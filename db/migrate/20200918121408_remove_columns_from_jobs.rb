class RemoveColumnsFromJobs < ActiveRecord::Migration[6.0]
  def change
    remove_column :jobs, :users_id
  end
end
