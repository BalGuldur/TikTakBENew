class V1::EmployeesController < V1::BaseController
  def index
    @employees = current_company.employees
    render json: @employees, status: :ok
  end

  def create
    @employee = Employee.new(employee_params)
    if @employee.save
      # TODO: Сделать бродкаст с новым сотрудником
      auth_link = "#{request.base_url}/users/sign_in?emp_hash=#{@employee.emp_hash}"
      render json: {employee: @employee.as_json, auth_link: auth_link}, status: :ok
    else
      render json: @employee.errors, status: 400
    end
  end

  private

  def employee_params
    params.permit(:fullname, :email, :position)
  end
end
