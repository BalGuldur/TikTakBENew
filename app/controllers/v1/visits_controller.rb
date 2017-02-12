class V1::VisitsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_visit, only: [:update, :destroy, :close]

  def index
    render json: current_location.visits.front_view, status: :ok
  end

  def today
  #   TODO: сделать смену
    visits = current_location.visits #.todays
    render json: visits.front_view, status: :ok
  end

  def create
    puts "visit_params #{visit_params[:place_ids]}"
    puts "free? #{Place.where(id: visit_params[:place_ids]).free?}"
    if Place.where(id: visit_params[:place_ids]).free?
      @visit = Visit.new(visit_params)
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
