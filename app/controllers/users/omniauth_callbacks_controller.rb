class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  before_action :set_token, only: [:vkontakte]
  before_action :set_emp_hash, only: [:vkontakte]

  def vkontakte
    login_user

    # binding.pry
    redirect_to :root
  end

  private

  def login_user # rubocop:disable Style/AsciiComments Metrics/MethodLength
    # Переменные из токена
    my_token = {
        photo: @token.extra.raw_info.photo_50,
        fullname: @token.info.name,
        email: @token.info.email,
        provider: @token.provider,
        uid: @token.uid,
    }

    # Просмотр token в консоли приложения
    # puts "@token #{@token.as_json}"
    # puts "emp_hash #{@emp_hash.as_json}"

    if @emp_hash.present?
      #   Создание пользователя по личному приглашению
      employee = Employee.find_by(emp_hash: @emp_hash)
      if employee.blank?
        puts "employee blank"
      end
      @user = OmniAuthAccount.create_user my_token, employee
    else
      #   Вход с существующей учеткой
      @user = OmniAuthAccount.user_for_login my_token
    end
    # Проверка пользователя в консоли
    puts "user #{@user}"
    return nil if @user.blank?
    puts "user.errors.present? #{@user.errors.present?}"
    puts "user.errors #{@user.errors.as_json}"
    # return nil if @user.errors.present?
    puts "sign_in @user"
    sign_in @user
  end

  def set_emp_hash
    @emp_hash = request.env['omniauth.params']['emp_hash'] ||= ''
  end

  def set_token
    @token = request.env['omniauth.auth']
  end
end
