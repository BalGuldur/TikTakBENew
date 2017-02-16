class Order < ApplicationRecord
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :visit
  has_many :order_items, dependent: :destroy

  def self.front_view
    orders = all.includes(:order_items) # .includes()
    front_orders = {}
    front_order_to_items = {}
    orders.each {|order| front_orders.merge! order.front_view_with_key}
    orders.each {|order| front_order_to_items.merge!(order.id => order.order_item_ids)}
    # result_halls_to_places = {}
    # halls.each {|hall| result_halls_to_places.merge!({hall.id => hall.place_ids})}
    {
        orders: front_orders,
        order_to_items: front_order_to_items,
        # menu_cat_to_menu_items: front_menu_cat_to_menu_items,
        # halls_to_places: result_halls_to_places,
    }
  end

  def front_view_with_key
    { id => front_view }
  end

  def front_view
    as_json(methods: [:order_item_ids])
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
