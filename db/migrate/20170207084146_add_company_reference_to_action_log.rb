class AddCompanyReferenceToActionLog < ActiveRecord::Migration[5.0]
  def change
    add_reference :action_logs, :company, foreign_key: true
  end
end
