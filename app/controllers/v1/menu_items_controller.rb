class V1::MenuItemsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_menu_item, only: [:update, :destroy]

  def index
    render json: current_location.menu_items.front_view, status: :ok
  end

  def create
    @menu_item = MenuItem.new(menu_item_params)
    if @menu_item.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @menu_item.front_view, status: :ok
    else
      error_action
      render json: @menu_item.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @menu_item.destroy
      success_action
      render json: @menu_item.front_view, status: :ok
    else
      error_action
      redner json: @menu_item.errors, status: 400
    end
  end

  def update
    if @menu_item.update menu_item_params
      success_action
      render json: @menu_item.front_view, status: :ok
    else
      error_action
      render json: @menu_item.errors, status: 400
    end
  end

  private

  def set_menu_item
    @menu_item = MenuItem.find_by_id(params[:id])
  end

  def menu_item_params
    params.permit(:title, :price, :menu_category_id)
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
