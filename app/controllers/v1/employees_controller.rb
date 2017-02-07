class V1::EmployeesController < V1::BaseController
  before_action :set_employee, only: [:destroy, :update]

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
      render json: {employee: @employee, auth_link: auth_link}, status: :ok
    else
      render json: @employee.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @employee.destroy
      render json: @employee, status: :ok
    elsif @employee.update deleted: true
      render json: @employee, status: :ok
    else
      redner json: @employee.errors, status: 400
    end
  end

  def update
    if @employee.update employee_params
      render json: @employee, status: :ok
    else
      render json: @employee.errors, status: 400
    end
  end

  private

  def set_employee
    @employee = Employee.find(params[:id])
  end

  def employee_params
    params.permit(:fullname, :email, :position)
  end
end
