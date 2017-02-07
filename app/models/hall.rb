class Hall < ApplicationRecord
  default_scope { where(deleted: false) }

  belongs_to :location
  has_many :places

  def self.front_view
    self.as_json(methods: [:place_ids])
  end
end
