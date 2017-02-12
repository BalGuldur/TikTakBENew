class V1::VisitsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_visit, only: [:update, :destroy]

  def index
    render json: current_location.visits.front_view, status: :ok
  end

  def create
    @visit = Visit.new(visit_params)
    @visit.location = current_location
    if @visit.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @visit.front_view, status: :ok
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
    params.permit(:qty_people, :opened, :opened_at, :booked, :booked_at, :closed, :closed_at, :deleted, :deleted_at)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
  end
end
