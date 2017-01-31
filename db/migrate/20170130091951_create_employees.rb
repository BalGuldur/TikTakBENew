class CreateEmployees < ActiveRecord::Migration[5.0]
  def change
    create_table :employees do |t|
      t.string :position
      t.references :user, foreign_key: true
      t.string :fullname
      t.string :emp_hash
      t.string :nickname
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
