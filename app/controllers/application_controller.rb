class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  set_current_tenant_through_filter
  before_action :configure_current_tenant

  before_action :emp_hash_params
  before_action :check_auth, unless: :devise_controller?
  before_action :check_many_companies, unless: :devise_controller?
  before_action :check_current_tenant, unless: :devise_controller?

  def broadcast(channel, message)
    message = {channel: channel, data: message}
    uri = URI.parse FAYE_ADDR_FOR_CLIENT
    Net::HTTP.post_form(uri, message: message.to_json)
  end

  def set_action_log
    @action_log = ActionLog.create(
        action: action_name,
        controller: controller_name,
        parameters: params.as_json,
        company: current_company,
        employee: current_employee,
    )
  end

  protected

  def check_many_companies
    if current_user.present?
      case
        when current_user.employees.count == 0
          raise "Нет сотрудников у пользователя"
        when current_user.employees.count == 1
          set_current_company current_user.employees.first.company
          set_current_employee current_user.employees.first
        when (current_user.employees.count > 1 and current_company.blank?)
          puts "current_company #{current_company.as_json}"
          redirect_to select_company_path
      end
    end
  end

  def check_auth
    unless user_signed_in?
      redirect_to new_user_session_path(emp_hash_params)
    end
  end

  def emp_hash_params
    params.permit(:emp_hash)
  end

  def current_company
    @_current_company ||= session[:current_company_id] && Company.find_by_id(session[:current_company_id])
    # Company.find_by(comp_hash: session[:current_company_hash])
  end

  def set_current_company company
    session[:current_company_id] = company && company.id
  end

  def current_location
    @_current_location ||= session[:current_location_id] && Location.find_by_id(session[:current_location_id])
  end

  def set_current_location location
    session[:current_location_id] = location && location.id
  end

  def current_employee
    @_current_employee ||= session[:current_employee_id] && Employee.find_by_id(session[:current_employee_id])
  end

  def set_current_employee employee
    session[:current_employee_id] = employee && employee.id
  end

  def configure_current_tenant
    if current_company.present?
      set_current_tenant current_company
    end
  end

  def check_current_tenant
    if ActsAsTenant.current_tenant.blank?
      raise "Error with tenant on application_controller"
    end
  end

  def check_current_location
    if current_location.blank?
      raise "Not set current location"
    end
  end
end
