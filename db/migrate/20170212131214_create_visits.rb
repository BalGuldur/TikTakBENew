class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.integer :qty_people
      t.boolean :opened
      t.datetime :opened_at
      t.boolean :booked
      t.datetime :book_start
      t.boolean :closed
      t.datetime :closed_at
      t.references :location, foreign_key: true
      t.boolean :deleted
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :visits, :deleted
    add_index :visits, :opened
    add_index :visits, :booked
    add_index :visits, :closed
  end
end
