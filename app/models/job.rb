class Job < ApplicationRecord
  belongs_to :user, dependent: :destroy

  PROFESSIONS = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]

  include PgSearch::Model
  pg_search_scope :search_by_profession,
    against: [ :profession ],
    using: {
      tsearch: { prefix: true }
    }
end
