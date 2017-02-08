class Hall < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  belongs_to :location
  has_many :places, dependent: :destroy

  def self.front_view
    halls = all.includes(:places)
    result_halls = {}
    halls.each {|hall| result_halls.merge! hall.front_view}
    result_halls_to_places = {}
    halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        halls: result_halls,
        halls_to_places: result_halls_to_places,
    }
  end

  def front_view
    {self.id => self.as_json}
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
