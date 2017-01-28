class CreateOmniAuthAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :omni_auth_accounts do |t|
      t.string :provider
      t.string :uid
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
