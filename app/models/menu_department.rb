class MenuDepartment < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :location
  has_many :menu_categories, dependent: :destroy
  has_many :menu_items, through: :menu_categories

  def self.front_view
    menu_departments = all.includes(:menu_categories, :menu_items) # .includes()
    front_menu_departments = {}
    front_menu_dep_to_menu_cat = {}
    menu_departments.each {|m_d| front_menu_departments.merge! m_d.front_view_with_key}
    menu_departments.each {|m_d| front_menu_dep_to_menu_cat.merge!(m_d.id => m_d.menu_category_ids)}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        menu_departments: front_menu_departments,
        menu_dep_to_menu_cat: front_menu_dep_to_menu_cat,
    }
  end

  def self.front_view_with_nested current_location
    self.front_view
        .merge!(current_location.menu_categories.front_view)
        .merge!(current_location.menu_items.front_view)
  end

  def front_view_with_key
    { id => as_json }
  end

  def front_view
    as_json
  end

  private

  # def self.menu_departments_to_menu_categories
  #   result = {}
  #   self.each {|m_d| result.merge!(m_d.id => m_d.menu_category_ids)}
  #   result
  # end

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
