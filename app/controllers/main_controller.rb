class MainController < ApplicationController
  skip_before_action :check_many_companies, only: [:choose_company, :select_company]
  skip_before_action :check_current_tenant, only: [:choose_company, :select_company]
  before_action :set_selected_employee, only: [:choose_company]

  def index
    navigation_items = [
        {id: 6, title: 'Рабочий стол', link: '/work_window', icon: 'fa fa-coffee'},
        {id: 1, title: 'Первый пункт', link: '/', icon: 'fa fa-camera'},
        {id: 2, title: 'Заведения', link: '/locations', icon: 'fa fa-building-o'},
        {id: 3, title: 'Сотрудники', link: '/employees', icon: 'fa fa-child'},
        {id: 4, title: 'Залы и столы', link: '/halls_control', icon: 'fa fa-cubes'},
        {id: 5, title: 'Меню', link: '/menu_control', icon: 'fa fa-cubes'},
    ]

    @main_props = {
        name: 'stranger',
        current_user: current_user.react_model,
        current_employee: current_employee,
        navigation_items: navigation_items,
        current_company: current_company,
        current_location: current_location,
        locations: current_company.locations,
        faye: {server: FAYE_ADDR_FOR_CLIENT, token: FAYE_TOKEN},
        initial_faye_channels: ["/broadcast", "/companies/#{current_company.id}"]
    }
    console
  end

  def select_company
    @current_user = current_user
    @companies = current_user.companies
    @employees = current_user.employees
    console
  end

  def choose_company
    if @selected_employee.present?
      puts "@selected_employee #{@selected_employee.as_json}"
      puts "company #{@selected_employee.company}"
      set_current_employee @selected_employee
      set_current_company @selected_employee.company
      redirect_to :root
    else
      redirect_to select_company_path
    end
  end

  def logout
    set_current_employee nil
    set_current_company nil
    set_current_location nil
    redirect_to sign_out_path
  end

  private

  # def set_selected_company
  #   @selected_company = Company.find_by(comp_hash: @comp_hash)
  # end

  def set_selected_employee
    @selected_employee = Employee.find_by(employee_params)
  end

  # def set_comp_hash
  #   @comp_hash = params[:comp_hash]
  # end

  def employee_params
    params.permit(:id)
  end
end