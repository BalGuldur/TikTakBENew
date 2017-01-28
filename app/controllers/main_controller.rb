class MainController < ApplicationController
  def index
    @main_props = { current_user: current_user }
  end
end
