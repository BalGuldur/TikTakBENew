class CreateMenuDepartments < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_departments do |t|
      t.string :title
      t.boolean :deleted
      t.datetime :deleted_at
      t.references :location, foreign_key: true

      t.timestamps
    end
    add_index :menu_departments, :deleted
  end
end
