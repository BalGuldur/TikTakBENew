class V1::LocationsController < V1::BaseController
  before_action :location_params, only: [:create]

  def create
    @location = Location.new(location_params)
    if @location.save
      # render json: @location, status: :ok
      render json: @location, status: :ok
      broadcast('/broadcast', 'test')
    else
      render json: @location.errors, status: 400
    end
  end

  private

  def location_params
    params.permit(:title)
  end
end
