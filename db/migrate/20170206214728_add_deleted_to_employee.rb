class AddDeletedToEmployee < ActiveRecord::Migration[5.0]
  def change
    add_column :employees, :deleted, :boolean
  end
end
