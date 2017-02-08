class V1::PlacesController < V1::BaseController
  before_action :check_current_location
  before_action :set_action_log
  before_action :set_place, only: [:update, :destroy]

  def index
    render json: current_location.places.front_view, status: :ok
  end

  def create
    @place = Place.new(place_params)
    if @place.save
      # Broadcats не делаем, т.к. это редко используемый элемент
      # Обновлем тлоько на клиенте с помощью вызова самого action
      success_action
      render json: @place.front_view, status: :ok
    else
      error_action
      render json: @place.errors, status: 400
    end
  end

  def destroy
    # Broadcats не делаем, т.к. это редко используемый элемент
    # Обновлем тлоько на клиенте с помощью вызова самого action
    if @place.destroy
      success_action
      render json: @place.front_view, status: :ok
    elsif @place.update deleted: true
      success_action
      render json: @place.front_view, status: :ok
    else
      error_action
      redner json: @place.errors, status: 400
    end
  end

  def update
    if @place.update place_params
      success_action
      render json: @place.front_view, status: :ok
    else
      error_action
      render json: @place.errors, status: 400
    end
  end

  private

  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.permit(:title, :capacity, :hall_id)
  end

  def success_action
    @action_log.update success: true
  end

  def error_action
    @action_lod.update success: false
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
