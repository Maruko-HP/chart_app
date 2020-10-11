class CreateGraphs < ActiveRecord::Migration[6.0]
  def change
    create_table :graphs do |t|
      t.date :date
      t.float :weight

      t.timestamps
    end
  end
end
