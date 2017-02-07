class ActionLog < ApplicationRecord
  serialize :parameters

  acts_as_tenant :company

  belongs_to :employee
  belongs_to :company
end
