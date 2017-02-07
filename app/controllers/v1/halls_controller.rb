class V1::HallsController < V1::BaseController
  before_action :check_current_location

  def index
    result = {
        halls: current_location.halls.front_view,
        places: current_location.places.front_view,
    }
    render json: result, status: :ok
  end

end
