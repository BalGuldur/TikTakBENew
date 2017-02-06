class MainController < ApplicationController
  skip_before_action :check_many_companies, only: [:choose_company, :select_company]
  skip_before_action :check_current_tenant, only: [:choose_company, :select_company]
  before_action :set_comp_hash, only: [:choose_company]

  def index
    menu_items = [
        {id: 1, title: 'Первый пункт', link: '/', icon: 'fa fa-camera'},
        {id: 2, title: 'Заведения', link: '/locations', icon: 'fa fa-building-o'},
    ]

    @main_props = {
        name: 'stranger',
        current_user: current_user.react_model,
        menu_items: menu_items,
        current_company: current_company,
        current_location: current_location,
        locations: current_company.locations,
        faye: {server: FAYE_ADDR_FOR_CLIENT, token: FAYE_TOKEN},
        initial_faye_channels: ["/broadcast", "/companies/#{current_company.id}"]
    }
  end

  def select_company
    @current_user = current_user
    @companies = current_user.companies
  end

  def choose_company
    set_selected_company
    if @selected_company.present?
      puts "@selected_company #{@selected_company}"
      set_current_company @selected_company
      redirect_to :root
    else
      redirect_to select_company_path
    end
  end

  private

  def set_selected_company
    @selected_company = Company.find_by(comp_hash: @comp_hash)
  end

  def set_comp_hash
    @comp_hash = params[:comp_hash]
  end
end