class AddRequestToActionLog < ActiveRecord::Migration[5.0]
  def change
    add_column :action_logs, :request, :text
  end
end
