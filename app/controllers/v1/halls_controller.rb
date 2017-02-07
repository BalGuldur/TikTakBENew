class V1::HallsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log

  def index
    render json: current_location.halls.front_view, status: :ok
  end

  def create
    @hall = Hall.new(hall_params)
    @hall.location = current_location
    if @hall.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @hall.front_view, status: :ok
    else
      error_action
      render json: @employee.errors, status: 400
    end
  end

  private

  def hall_params
    params.permit(:title)
  end

  def success_action
    @action_log.success = true
    @action_log.save
  end

  def error_action
    @action_log.success = false
    @action_log.save
  end

  def set_action_log
    @action_log = ActionLog.new(
        action: action_name,
        controller: controller_name,
        parameters: params.as_json,
        company: current_company,
        employee: current_employee,
    )
  end
end
