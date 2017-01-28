class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def vkontakte
    token = request.env['omniauth.auth']
    login_user token

    # binding.pry
    redirect_to :root
  end

  private

  def login_user token # rubocop:disable Style/AsciiComments
    account = OmniAuthAccount.find_or_create_by(provider: token.provider, uid: token.uid)
    # Если у auth account не найден user, создаем или находим пользователя
    unless account.user
      # Находим пользователея
      user = User.find_by(email: token.info.email)
      # Если пользователь по email не найден, то создаем пользователя
      user = User.create(email: token.info.email, fullname: token.info.name) unless user
      # Обновляем пользователя для аккаунта
      account.update user: user
      puts "update account user #{user}"
    end
    # Авторизуем пользователя
    sign_in account.user
  end
end
