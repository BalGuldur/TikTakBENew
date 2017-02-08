class AddDeletedAtToTables < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :deleted_at, :datetime
    add_index :places, :deleted
    add_column :halls, :deleted_at, :datetime
    add_index :halls, :deleted
    add_column :locations, :deleted_at, :datetime
    add_index :locations, :deleted
    add_column :employees, :deleted_at, :datetime
    add_index :employees, :deleted
    add_column :users, :deleted_at, :datetime
    add_column :users, :deleted, :boolean
    add_index :users, :deleted
  end
end
