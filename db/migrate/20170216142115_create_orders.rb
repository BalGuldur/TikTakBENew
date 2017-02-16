class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :visit, foreign_key: true
      t.boolean :deleted
      t.datetime :deleted_at

      t.timestamps
    end
    add_index :orders, :deleted
  end
end
