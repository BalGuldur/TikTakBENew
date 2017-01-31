class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :title
      t.boolean :deleted
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
