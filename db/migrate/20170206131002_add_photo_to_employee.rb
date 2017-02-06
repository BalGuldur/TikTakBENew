class AddPhotoToEmployee < ActiveRecord::Migration[5.0]
  def change
    add_column :employees, :photo, :string
  end
end
