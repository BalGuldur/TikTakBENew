class MainController < ApplicationController
  skip_before_action :check_many_companies, only: [:choose_company, :select_company]
  before_action :set_selected_company, only: [:choose_company]

  def index
    menu_items = [
        {id: 1, title: 'Первый пункт', link: '/', icon: 'fa fa-camera'},
        {id: 2, title: 'Второй пункт', link: '/test', icon: 'fa fa-camera'},
    ]

    @main_props = {
        name: 'stranger',
        current_user: current_user.react_model,
        menu_items: menu_items,
        current_company: current_company
    }
  end

  def select_company
    @current_user = current_user
    @companies = current_user.companies
  end

  def choose_company
    if @selected_company.present?
      set_current_company @selected_company
      redirect_to :root
    else
      redirect_to select_company_path
    end
  end

  private

  def set_selected_company
    comp_hash = params[:comp_hash]
    @selected_company = Company.find_by(comp_hash: comp_hash)
  end
end