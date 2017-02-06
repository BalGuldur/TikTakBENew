class AddLocHashToLocation < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :loc_hash, :string
  end
end
