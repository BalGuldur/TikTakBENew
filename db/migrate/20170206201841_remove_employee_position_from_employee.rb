class RemoveEmployeePositionFromEmployee < ActiveRecord::Migration[5.0]
  def change
    remove_column :employees, :employee_position, :string
  end
end
