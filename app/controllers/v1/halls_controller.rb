class V1::HallsController < V1::BaseController
  before_action :check_current_location

  def index
    render json: current_location.halls.front_view, status: :ok
  end

end
