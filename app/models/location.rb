class Location < ApplicationRecord
  default_scope { where(deleted: false)}

  acts_as_tenant :company

  before_save :set_default

  belongs_to :company
  has_many :halls
  has_many :places, through: :halls

  private

  def set_default
    # if deleted.nil?
    #   update deleted: false
    # end
    if loc_hash.nil?
      update loc_hash: SecureRandom.urlsafe_base64(20)
    end
  end
end
