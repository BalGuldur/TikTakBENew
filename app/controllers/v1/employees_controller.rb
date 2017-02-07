class V1::EmployeesController < V1::BaseController
  before_action :set_employee, only: [:destroy, :update]
  before_action :set_action_log

  def index
    @employees = current_company.employees
    render json: @employees, status: :ok
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      auth_link = "#{request.base_url}/users/sign_in?emp_hash=#{@employee.emp_hash}"
      success_action
      render json: {employee: @employee, auth_link: auth_link}, status: :ok
    else
      error_action
      render json: @employee.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @employee.destroy
      success_action
      render json: @employee, status: :ok
    elsif @employee.update deleted: true
      success_action
      render json: @employee, status: :ok
    else
      error_action
      redner json: @employee.errors, status: 400
    end
  end

  def update
    if @employee.update employee_params
      success_action
      render json: @employee, status: :ok
    else
      error_action
      render json: @employee.errors, status: 400
    end
  end

  private

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

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.permit(:fullname, :email, :position)
  end
end
