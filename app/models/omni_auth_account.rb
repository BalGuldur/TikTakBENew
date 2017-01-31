class OmniAuthAccount < ApplicationRecord
  belongs_to :user

  def self.user_for_login token
    check_token token
    account = OmniAuthAccount.find_by(provider: token[:provider], uid: token[:uid])
    return nil unless account
    account.user.present? ? user = account.user : user = User.new
    if account.user.blank?
      user.errors.add(:find, 'not find user for account')
    elsif account.user.employees.blank?
      user.errors.add(:find, 'not find employee for user')
    end
    puts "user_for_login user.errors #{user.errors.as_json}"
    return user
  end

  def self.create_user token, employee
    check_token token
    raise 'Не передан сотрудник в OmniAuthAccount create_user' if employee.blank?
    @account = OmniAuthAccount.find_by(provider: token[:provider], uid: token[:uid])
    @account = OmniAuthAccount.new(provider: token[:provider], uid: token[:uid]) unless @account
    @account.photo = token[:photo]
    if @account.user.blank?
      # Находим пользователея
      @user = User.find_by(email: token[:email])
      # Если пользователь по email не найден, то создаем пользователя
      @user = User.create(email: token[:email], fullname: token[:fullname], password: SecureRandom.urlsafe_base64(20)) if @user.blank?
      # Добавляем сотрудника в пользователя
      @user.employees << employee
      @user.save
      employee.update emp_hash: nil
      # Обновляем пользователя для аккаунта
      @account.user = @user
      @account.save
    end
    return @user
  end

  private

  def self.check_token token
    if token[:provider].blank? or token[:uid].blank?
      raise 'Не хаватает информации в token при передачи в OmniAuthAccount.user_for_login'
    end
  end
end
