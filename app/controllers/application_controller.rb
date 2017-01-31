class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :emp_hash_params
  before_action :check_auth, unless: :devise_controller?
  before_action :check_many_companies

  protected

  def check_many_companies
    if current_user.present?
      case
        when current_user.employees.count == 0
          raise "Нет сотрудников у пользователя"
        when current_user.employees.count == 1
          session[:current_company] = current_user.employees.first.company
        when (current_user.employees.count > 1 and current_company.blank?)
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
    session[:current_company]
  end

  def set_current_company company
    session[:current_company] = company
  end
end
