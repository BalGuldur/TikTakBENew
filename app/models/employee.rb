class Employee < ApplicationRecord
  acts_as_tenant :company

  default_scope { where(deleted: false) }

  # before_save :generate_hash
  before_save :set_defaults

  belongs_to :user
  belongs_to :company

  private

  # def generate_hash
  #   if emp_hash.blank?
  #     update emp_hash: SecureRandom.urlsafe_base64(20)
  #   end
  # end
  def set_defaults
    update default_params if default_params.present?
  end

  def default_params
    my_params = {}
    if emp_hash.blank?
      my_params[:emp_hash] = SecureRandom.urlsafe_base64(20)
    end
    # Не нужно т.к. задается с помощью default_scope
    # if deleted.nil?
    #   my_params[:deleted] = false
    # end
    my_params
  end
end
