class Company < ApplicationRecord
  before_save :generate_hash

  has_many :locations
  has_many :employees
  has_many :action_logs

  private
  def generate_hash
    if comp_hash.blank?
      update comp_hash: SecureRandom.urlsafe_base64(20)
    end
  end
end
