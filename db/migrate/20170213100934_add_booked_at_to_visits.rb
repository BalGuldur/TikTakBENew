class AddBookedAtToVisits < ActiveRecord::Migration[5.0]
  def change
    add_column :visits, :booked_at, :datetime
  end
end
