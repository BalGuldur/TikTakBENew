class CreateMenuCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_categories do |t|
      t.string :title
      t.boolean :deleted
      t.datetime :deleted_at
      t.references :menu_department, foreign_key: true

      t.timestamps
    end
    add_index :menu_categories, :deleted
  end
end
