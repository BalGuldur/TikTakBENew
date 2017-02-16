class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.string :title
      t.integer :price
      t.integer :discount
      t.references :menu_item, foreign_key: true
      t.references :order, foreign_key: true
      t.boolean :deleted
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :order_items, :deleted
  end
end
