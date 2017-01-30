class AddPhotoToOmniAuthAccount < ActiveRecord::Migration[5.0]
  def change
    add_column :omni_auth_accounts, :photo, :string
  end
end
