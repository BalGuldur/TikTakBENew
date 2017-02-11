class V1::MenuDepartmentsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_menu_department, only: [:update, :destroy]

  def index
    render json: current_location.menu_departments.front_view, status: :ok
  end

  def index_with_nested
    render json: current_location.menu_departments.front_view_with_nested(current_location), status: :ok
  end

  def create
    @menu_department = MenuDepartment.new(menu_department_params)
    @menu_department.location = current_location
    if @menu_department.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @menu_department.front_view, status: :ok
    else
      error_action
      render json: @menu_department.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @menu_department.destroy
      success_action
      render json: @menu_department.front_view, status: :ok
    else
      error_action
      redner json: @menu_department.errors, status: 400
    end
  end

  def update
    if @menu_department.update menu_department_params
      success_action
      render json: @menu_department.front_view, status: :ok
    else
      error_action
      render json: @menu_department.errors, status: 400
    end
  end

  private

  def set_menu_department
    @menu_department = MenuDepartment.find_by_id(params[:id])
  end

  def menu_department_params
    params.permit(:title)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
  end

  def set_action_log
    @action_log = ActionLog.create(
        action: action_name,
        controller: controller_name,
        parameters: params.as_json,
        company: current_company,
        employee: current_employee,
    )
  end
end
