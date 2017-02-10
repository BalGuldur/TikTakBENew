class CreateMenuItems < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_items do |t|
      t.string :title
      t.integer :price
      t.references :menu_category, foreign_key: true
      t.boolean :deleted
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :menu_items, :deleted
  end
end
