class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  set_current_tenant_through_filter
  before_filter :configure_current_tenant

  before_action :emp_hash_params
  before_action :check_auth, unless: :devise_controller?
  before_action :check_many_companies
  before_action :check_current_tenant, unless: :devise_controller?

  protected

  def check_many_companies
    if current_user.present?
      case
        when current_user.employees.count == 0
          raise "Нет сотрудников у пользователя"
        when current_user.employees.count == 1
          set_current_company current_user.employees.first.company
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
    Company.find_by(comp_hash: session[:current_company_hash])
  end

  def set_current_company company
    session[:current_company_hash] = company.comp_hash
    configure_current_tenant
  end

  def configure_current_tenant
    if session[:current_company_hash].present?
      company = Company.find_by(comp_hash: session[:current_company_hash])
      if company.present?
        set_current_tenant(company)
      end
    end
  end

  def check_current_tenant
    if ActsAsTenant.current_tenant.blank?
      raise "Error with tenant on application_controller"
    end
  end
end
