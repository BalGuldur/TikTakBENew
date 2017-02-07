class CreateHalls < ActiveRecord::Migration[5.0]
  def change
    create_table :halls do |t|
      t.references :location, foreign_key: true
      t.string :title
      t.boolean :deleted

      t.timestamps
    end
  end
end
