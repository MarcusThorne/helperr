class Purchase < ApplicationRecord
  belongs_to :use
  belongs_to :job
end
