class CreateActionLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :action_logs do |t|
      t.string :controller
      t.string :action
      t.references :employee, foreign_key: true
      t.text :parameters
      t.boolean :success

      t.timestamps
    end
  end
end
