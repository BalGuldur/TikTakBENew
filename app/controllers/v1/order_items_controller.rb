class V1::OrderItemsController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_order_item, only: [:update, :destroy]

  def index
    render json: current_location.order_items.front_view, status: :ok
  end

  def create
    @order_item = OrderItem.new(order_item_params)
    if @order_item.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @order_item.front_view, status: :ok
    else
      error_action
      render json: @order_item.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @order_item.destroy
      success_action
      render json: @order_item.front_view, status: :ok
    else
      error_action
      redner json: @order_item.errors, status: 400
    end
  end

  def update
    if @order_item.update order_item_params
      success_action
      render json: @order_item.front_view, status: :ok
    else
      error_action
      render json: @order_item.errors, status: 400
    end
  end

  private

  def set_order_item
    @order_item = OrderItem.find_by_id(params[:id])
  end

  def order_item_params
    params.permit(:title, :price, :menu_item_id, :discount)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
  end
end
