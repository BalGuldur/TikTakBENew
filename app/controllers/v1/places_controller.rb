class V1::PlacesController < V1::BaseController
  before_action :check_current_location

  def index
    render json: current_location.places.front_view, status: :ok
  end
end
