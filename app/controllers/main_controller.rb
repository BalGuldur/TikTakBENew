class MainController < ApplicationController
  def index
    menu_items = [
        {id: 1, title: 'Первый пункт', link: '/', icon: 'fa fa-camera'},
        {id: 2, title: 'Второй пункт', link: '/test', icon: 'fa fa-camera'},
    ]

    @main_props = { name: 'stranger', current_user: current_user, menu_items: menu_items }
  end
end