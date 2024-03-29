class V1::VisitsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_visit, only: [:update, :destroy, :close, :convert_to_open]

  def index
    visits = current_location.visits_on_day(params[:visits_date].to_date)
    render json: visits.front_view, status: :ok
    # render json: current_location.visits.active(params[:visits_date]).front_view, status: :ok
  end

  def today
  #   TODO: сделать смену, изменить метод todays (использовать booking_at)
    visits = current_location.visits_today
    render json: visits.front_view, status: :ok
  end

  def create
    places = Place.where(id: visit_params[:place_ids])
    if visit_params[:booked] || places.free?
      @visit = Visit.new(visit_params)
      # Переводим значение параметра из 3600 60 в текущую дату + время
      @visit.book_start = book_start_param
      @visit.location = current_location
      if @visit.save
        # Broadcats не делаем, т.к. это редко используемый элемент
        # Обновлем тлоько на клиенте с помощью вызова самого action
        success_action
        render json: @visit.front_view, status: :ok
        broadcast('/broadcast', {action: 'addVisit', data: @visit.front_view})
      else
        error_action
        render json: @visit.errors, status: 400
      end
    else
      error_action
      puts "Create Visit error"
      render json: {errors: "Has opened place ("}, status: 400
    end
  end

  def close
    if @visit.update opened: false, closed: true, closed_at: DateTime.now
      success_action
      render json: @visit.front_view, status: :ok
      broadcast('/broadcast', {action: 'close_visit', data: @visit.front_view})
    else
      error_action
      render json: @visit.errors, status: 400
    end
  end

  def convert_to_open
    if @visit.update opened: true, opened_at: DateTime.now
      success_action
      render json: @visit.front_view, status: :ok
      broadcast('/broadcast', {action: 'update_visit', data: @visit.front_view})
    else
      error_action
      render json: @visit.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @visit.destroy
      success_action
      render json: @visit.front_view, status: :ok
    else
      error_action
      redner json: @visit.errors, status: 400
    end
  end

  def update
    if @visit.update visit_params
      success_action
      render json: @visit.front_view, status: :ok
    else
      error_action
      render json: @visit.errors, status: 400
    end
  end

  private

  def book_start_param
    if params[:book_start].present?
      data = DateTime.now.to_date.to_s
      time = Time.at(params[:book_start].to_i).to_s(:time)
      return (data+" "+time).to_datetime
    else
      nil
    end
  end

  def set_visit
    @visit = Visit.find_by_id(params[:id])
  end

  def visit_params
    params.permit(:qty_people, :opened, :opened_at, :booked, :booked_at, :closed, :closed_at, :deleted, :deleted_at, place_ids: [])
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_log.update success: false
  end
end
