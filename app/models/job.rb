class Job < ApplicationRecord
  belongs_to :user, dependent: :destroy
end
