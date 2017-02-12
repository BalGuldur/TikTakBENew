class CreateJoinTableVisitPlace < ActiveRecord::Migration[5.0]
  def change
    create_join_table :visits, :places do |t|
      t.index [:visit_id, :place_id]
      t.index [:place_id, :visit_id]
    end
  end
end
