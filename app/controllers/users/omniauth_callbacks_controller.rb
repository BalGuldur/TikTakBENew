class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def vkontakte
    token = request.env['omniauth.auth']
    login_user token

    # binding.pry
    redirect_to :root
  end

  private

  def login_user token # rubocop:disable Style/AsciiComments
    # Просмотр token в консоли приложения
    puts "token #{token.as_json}"

    account = OmniAuthAccount.find_or_create_by(provider: token.provider, uid: token.uid)
    # Обновляем фото аккаунта
    account.photo = token.extra.raw_info.photo_50
    # Если у auth account не найден user, создаем или находим пользователя
    unless account.user
      # Находим пользователея
      user = User.find_by(email: token.info.email)
      # Если пользователь по email не найден, то создаем пользователя
      user = User.create(email: token.info.email, fullname: token.info.name) unless user
      # Обновляем пользователя для аккаунта
      account.user = user
      puts "update account user #{user}"
    end
    # Сохраняем все изменения в аккаунте
    account.save
    # Авторизуем пользователя
    sign_in account.user
  end
end
