class AddEmployeePositionToEmployee < ActiveRecord::Migration[5.0]
  def change
    add_column :employees, :employee_position, :string
  end
end
