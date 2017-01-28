class MainController < ApplicationController
  def index
    @main_props = { name: 'stranger', current_user: current_user }
  end
end