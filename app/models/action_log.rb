class ActionLog < ApplicationRecord
  serialize :parameters
  serialize :request

  acts_as_tenant :company

  belongs_to :employee
  belongs_to :company
end
