class Hall < ApplicationRecord
  default_scope { where(deleted: false) }

  belongs_to :location
  has_many :places

  def self.front_view
    halls = all.includes(:places)
    result = {}
    halls.each {|hall| result.merge! hall.front_view}
    result
  end

  def front_view
    {self.id => self.as_json(methods: [:place_ids])}
  end

  # def self.front_view
  #   all.as_json(methods: [:place_ids])
  # end
  #
  # def front_view
  #   as_json(methods: [:place_ids])
  # end
end
