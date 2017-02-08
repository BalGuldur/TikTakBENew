class Employee < ApplicationRecord
  acts_as_tenant :company
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_defaults

  belongs_to :user
  belongs_to :company
  has_many :action_logs

  private

  def set_defaults
    update default_params if default_params.present?
  end

  def default_params
    my_params = {}
    if emp_hash.blank?
      my_params[:emp_hash] = SecureRandom.urlsafe_base64(20)
    end
    my_params
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
