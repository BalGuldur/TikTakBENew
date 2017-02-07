class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :title
      t.references :hall, foreign_key: true
      t.integer :capacity
      t.boolean :deleted

      t.timestamps
    end
  end
end
