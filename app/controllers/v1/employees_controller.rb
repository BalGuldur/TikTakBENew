class V1::EmployeesController < V1::BaseController
  def index
    @employees = current_company.employees
    render json: @employees, status: :ok
  end
end
