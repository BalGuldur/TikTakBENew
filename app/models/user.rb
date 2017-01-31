class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:vkontakte]

  has_many :omni_auth_accounts, dependent: :destroy
  has_many :employees

  def react_model
    {
        fullname: fullname,
        photo: photo,
        id: id
    }
  end

  def display_name
    # TODO: В последующем тут должно быть обращение к employee )
    self.fullname
  end

  def photo
    result = ''
    if omni_auth_accounts
      omni_auth_accounts.each do |account|
        result = account.photo if account.photo
        break if account.photo
      end
    end
    result
  end
end
