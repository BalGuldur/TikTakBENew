class OmniAuthAccount < ApplicationRecord
  belongs_to :user

  def self.user_for_login token
    omni_auth_logger.info("Start find user for token #{token.as_json}")
    check_token token

    # Ищем аккаунт или возвращаем nil
    account = OmniAuthAccount.find_by(provider: token[:provider], uid: token[:uid])
    if account.present?
      omni_auth_logger.info("Find account by token #{token.as_json}, result account #{account.as_json}")
    else
      omni_auth_logger.warn("Don't find account for #{token.as_json}, Finish finding user for token #{token.as_json}")
      return nil
    end


    if account.user.present?
      user = account.user
      omni_auth_logger.info("User find #{user}")
      if account.user.employees.blank?
        user.errors.add(:find, "Not find employee for user_id #{user.id}")
        omni_auth_logger.warn("Not find employee for user #{user.as_json}")
      end
    else
      user = User.new
      user.errors.add(:find, 'not find user for account')
      omni_auth_logger.warn('Not find user for account')
    end

    omni_auth_logger.info("Finish finding user for token #{token.as_json}, result user #{user.as_json}")
    return user
  end

  def self.create_user token, employee
    omni_auth_logger.info("Start create account user by token and employee\ntoken #{token.as_json}\nemployee #{employee}")
    check_token token
    raise 'Не передан сотрудник в OmniAuthAccount create_user' if employee.blank?

    # Ищем или создаем аккаунт
    @account = OmniAuthAccount.find_by(provider: token[:provider], uid: token[:uid])
    if @account.present?
      omni_auth_logger.info("Find account for\ntoken #{token.as_json}\nresult #{@account.as_json}")
    else
      @account = OmniAuthAccount.new(provider: token[:provider], uid: token[:uid]) unless @account
      omni_auth_logger.info("Not find account for token #{token.as_json}, create new account #{@account.as_json}")
    end

    # Обновляем фото аккаунта
    @account.photo = token[:photo]

    # Если у аккаунта нет пользователя
    if @account.user.blank?
      # Находим пользователея
      omni_auth_logger.info("Find account, user empty")
      @user = User.find_by(email: token[:email])

      # Если пользователь по email не найден, то создаем пользователя
      if @user.blank?
        @user = User.create(email: token[:email], fullname: token[:fullname], password: SecureRandom.urlsafe_base64(20))
        omni_auth_logger.info("Don't find user by token, create new user\n token #{token} \n user #{@user}")
      else
        omni_auth_logger.info("Find uxer by token \n token #{token} \n user #{@user}")
      end

      # Добавляем сотрудника в пользователя
      @user.employees << employee
      @user.save
      employee.update emp_hash: nil

      # Обновляем пользователя для аккаунта
      @account.user = @user
      @account.save
      omni_auth_logger.info("Add employee to user and empty hash \n user #{@user} \n employee #{employee} \n account #{@account}")
    else
      @user = @account.user
      @user.employees << employee
      employee.update emp_hash: nil
      omni_auth_logger.info("Find account and user present, set employee\n user #{@user}\n employee #{employee}")
    end
    omni_auth_logger.info("Finish create account by employee\naccount #{@account.as_json}\nemployee #{employee.as_json}\nuser #{@user.as_json}")
    return @user
  end

  private

  def omni_auth_logger
    OmniAuthAccount.omni_auth_logger
  end

  def self.omni_auth_logger
    @@omni_auth_logger ||= Logger.new(File.join(Rails.root, 'log', 'omni_auth.log'))
  end

  def self.check_token token
    if token[:provider].blank? or token[:uid].blank?
      raise 'Не хаватает информации в token при передачи в OmniAuthAccount.user_for_login'
    end
  end
end
