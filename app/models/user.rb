class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:vkontakte]

  has_many :omni_auth_accounts

  def display_name
    # TODO: В последующем тут должно быть обращение к employee )
    self.fullname
  end
end
