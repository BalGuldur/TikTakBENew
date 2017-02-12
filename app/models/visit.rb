class Visit < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  scope :todays, -> { where(opened_at: DateTime.now.to_date..(DateTime.now.to_date + 1.day))}
  scope :opened, -> { where(opened: true)}

  before_save :set_default

  belongs_to :location
  has_and_belongs_to_many :places
  # has_many :menu_items, dependent: :destroy

  def self.front_view
    visits = all.includes(:places) # .includes()
    front_visits = {}
    front_place_to_visits = {}
    places = Place.joins(:visits).where(visits: {id: visits.ids})
    visits.each {|visit| front_visits.merge! visit.front_view_with_key}
    places.each {|place| front_place_to_visits.merge!(place.id => place.visit_ids)}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        visits: front_visits,
        place_to_visits: front_place_to_visits,
        # menu_cat_to_menu_items: front_menu_cat_to_menu_items,
        # halls_to_places: result_halls_to_places,
    }
  end

  def front_view_with_key
    { id => front_view }
  end

  def front_view
    as_json(methods: [:place_ids, :opened_at_time])
  end

  private

  def opened_at_time
    opened_at.to_s(:time)
  end

  def set_default
    default_obj = {}
    default_obj.merge!({qty_people: 1}) if qty_people.nil?
    default_obj.merge!({booked: false}) if booked.nil?
    default_obj.merge!({closed: false}) if closed.nil?
    default_obj.merge!({opened: true}) if opened.nil?
    default_obj.merge!({opened_at: DateTime.now}) if opened_at.nil? and opened || default_obj[:opened]
    update(default_obj) if !default_obj.empty?
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
