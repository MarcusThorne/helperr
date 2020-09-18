class Job < ApplicationRecord
  belongs_to :users, dependent: :destroy

  def show_card_image
    if profession == 'Plumbing'
      'plumbing'
    elsif profession == 'Electrical'
      'electrical'
    elsif profession == 'Delivery'
      'delivery'
    end
  end
end
