class Location < ApplicationRecord
  acts_as_tenant :company
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :company
  has_many :halls, dependent: :destroy
  has_many :places, through: :halls
  has_many :employees
  has_many :action_logs, through: :employees
  has_many :menu_departments, dependent: :destroy
  has_many :menu_categories, through: :menu_departments
  has_many :menu_items, through: :menu_categories

  private

  def set_default
    # if deleted.nil?
    #   update deleted: false
    # end
    if loc_hash.nil?
      update loc_hash: SecureRandom.urlsafe_base64(20)
    end
  end

  def paranoia_restore_attributes
    {
        deleted_at: nil,
        deleted: false
    }
  end

  def paranoia_destroy_attributes
    {
        deleted_at: current_time_from_proper_timezone,
        deleted: true
    }
  end
end
