class HelloWorldController < ApplicationController
  def index
    console

    @hello_world_props = { name: "Stranger" }
  end
end
