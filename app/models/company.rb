class Company < ApplicationRecord
  before_save :generate_hash

  has_many :locations

  private
  def generate_hash
    if comp_hash.blank?
      update comp_hash: SecureRandom.urlsafe_base64(20)
    end
  end
end
