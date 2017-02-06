class V1::LocationsController < V1::BaseController
  before_action :location_params, only: [:create]
  before_action :set_location, only: [:destroy, :choose]

  def create
    @location = Location.new(location_params)
    if @location.save
      broadcast("/companies/#{@location.company.id}", {action: 'addLocation', data: @location.as_json})
      render json: @location, status: :ok
    else
      render json: @location.errors, status: 400
    end
  end

  def destroy
    if @location.destroy
      broadcast("/companies/#{@location.company.id}", {action: 'removeLocation', data: @location.as_json})
      render json: @location, status: :ok
    else
      render json: @location.errors, status: 400
    end
  end

  def choose
    if @location.present?
      set_current_location @location
      render json: @location, status: :ok
    else
      render json: @location.errors, status: 400
    end
  end

  private

  def location_params
    params.permit(:title)
  end

  def set_location
    @location = Location.find(params[:id])
  end
end
