class Place < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  # default_scope { where(deleted: false) }

  belongs_to :hall
  has_one :location, through: :hall
  has_and_belongs_to_many :visits

  def self.front_view
    # TODO: Проверить количество SQL запросов
    places = all.includes(:visits, :places_visits)
    result = {}
    places.each {|place| result.merge! place.front_view}
    result
  end

  def front_view
    {id => as_json}
  end

  def safe_destroy
    destroy
  end

  def opened?
    visits.opened.empty? ? false : true
  end

  def self.free?
    if !all.empty?
      location = first.location
      if location.visits_today.opened.joins(:places).where(places: {id: ids}).empty?
        return true
      else
        return false
      end
    end
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
