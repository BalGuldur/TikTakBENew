class Place < ApplicationRecord
  default_scope { where(deleted: false) }

  belongs_to :hall

  def self.front_view
    self.as_json
  end
end
