class MainController < ApplicationController
  def index
    menu_items = [
        {id: 1, title: 'Первый пункт', link: '/logout', icon: 'fa fa-diamond'},
        {id: 2, title: 'Второй пункт', link: '/logout', icon: 'fa fa-diamond'},
    ]

    @main_props = { name: 'stranger', current_user: current_user, menu_items: menu_items }
  end
end