class MenuCategory < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :menu_department
  has_many :menu_items, dependent: :destroy

  def self.front_view
    menu_categories = all.includes(:menu_items) # .includes()
    front_menu_categories = {}
    front_menu_cat_to_menu_items = {}
    menu_categories.each {|m_c| front_menu_categories.merge! m_c.front_view_with_key}
    menu_categories.each {|m_c| front_menu_cat_to_menu_items.merge!(m_c.id => m_c.menu_item_ids)}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        menu_categories: front_menu_categories,
        menu_cat_to_menu_items: front_menu_cat_to_menu_items,
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
