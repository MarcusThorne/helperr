class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :profession
      t.string :rate
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end
