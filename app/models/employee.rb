class Employee < ApplicationRecord
  acts_as_tenant :company

  belongs_to :user
  belongs_to :company

  private

  def generate_hash
    if emp_hash.blank?
      update emp_hash: SecureRandom.urlsafe_base64(20)
    end
  end
end
