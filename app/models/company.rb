class Company < ApplicationRecord
  before_save :generate_hash

  private
  def generate_hash
    if comp_hash.blank?
      comp_hash = SecureRandom.urlsafe_base64(20)
    end
  end
end
