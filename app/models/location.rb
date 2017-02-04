class Location < ApplicationRecord
  acts_as_tenant :company

  before_save :set_default_deleted

  belongs_to :company

  private

  def set_default_deleted
    if deleted.nil?
      update deleted: false
    end
  end
end
