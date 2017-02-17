class V1::OrdersController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_order, only: [:update, :destroy]

  def index
    render json: current_location.orders.front_view, status: :ok
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @order.front_view, status: :ok
    else
      error_action
      render json: @order.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @order.destroy
      success_action
      render json: @order.front_view, status: :ok
    else
      error_action
      redner json: @order.errors, status: 400
    end
  end

  def update
    if @order.update order_params
      success_action
      render json: @order.front_view, status: :ok
    else
      error_action
      render json: @order.errors, status: 400
    end
  end

  private

  def set_order
    @order = Order.find_by_id(params[:id])
  end

  def order_params
    params.permit(:visit_id)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
  end
end
