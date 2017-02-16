class AddWorkTimeToLocation < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :open_time, :datetime
    add_column :locations, :close_time, :datetime
  end
end
