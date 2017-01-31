class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :emp_hash_params
  before_action :check_auth, unless: :devise_controller?

  protected

  def check_auth
    unless user_signed_in?
      redirect_to new_user_session_path(emp_hash_params)
    end
  end

  def emp_hash_params
    params.permit(:emp_hash)
  end
end
