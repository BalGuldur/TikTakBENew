class MenuDepartment < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :location

  def self.front_view
    menu_departments = all # .includes()
    front_menu_departments = {}
    menu_departments.each {|m_d| front_menu_departments.merge! m_d.front_view_with_key}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        menu_departments: front_menu_departments,
        # halls_to_places: result_halls_to_places,
    }
  end

  def front_view_with_key
    {id => as.json}
  end

  def front_view
    as.json
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
