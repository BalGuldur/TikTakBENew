class V1::MenuCategoriesController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_menu_category, only: [:update, :destroy]

  def index
    render json: current_location.menu_categories.front_view, status: :ok
  end

  def create
    @menu_category = MenuCategory.new(menu_category_params)
    if @menu_category.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @menu_category.front_view, status: :ok
    else
      error_action
      render json: @menu_category.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @menu_category.destroy
      success_action
      render json: @menu_category.front_view, status: :ok
    else
      error_action
      redner json: @menu_category.errors, status: 400
    end
  end

  def update
    if @menu_category.update menu_category_params
      success_action
      render json: @menu_category.front_view, status: :ok
    else
      error_action
      render json: @menu_category.errors, status: 400
    end
  end

  private

  def set_menu_category
    @menu_category = MenuCategory.find_by_id(params[:id])
  end

  def menu_category_params
    params.permit(:title, :menu_department_id)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
  end

  # def set_action_log
  #   @action_log = ActionLog.create(
  #       action: action_name,
  #       controller: controller_name,
  #       parameters: params.as_json,
  #       company: current_company,
  #       employee: current_employee,
  #   )
  # end
end
