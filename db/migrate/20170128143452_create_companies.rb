class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :comp_hash
      t.string :title

      t.timestamps
    end
  end
end
