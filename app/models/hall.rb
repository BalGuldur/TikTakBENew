class Hall < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  belongs_to :location
  has_many :places, dependent: :destroy

  def self.front_view
    halls = all.includes(:places)
    result = {}
    halls.each {|hall| result.merge! hall.front_view}
    result
  end

  def front_view
    {self.id => self.as_json(methods: [:place_ids])}
  end

  private

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
