class Visit < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :location
  # has_many :menu_items, dependent: :destroy

  def self.front_view
    visits = all # .includes()
    front_visits = {}
    # front_menu_cat_to_menu_items = {}
    visits.each {|m_c| front_visits.merge! m_c.front_view_with_key}
    # visits.each {|m_c| front_menu_cat_to_menu_items.merge!(m_c.id => m_c.menu_item_ids)}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        visits: front_visits,
        # menu_cat_to_menu_items: front_menu_cat_to_menu_items,
        # halls_to_places: result_halls_to_places,
    }
  end

  def front_view_with_key
    { id => as_json }
  end

  def front_view
    as_json
  end

  private

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
