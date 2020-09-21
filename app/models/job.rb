class Job < ApplicationRecord
  belongs_to :user, dependent: :destroy

  def show_card_image
    if profession == 'Plumbing'
      'plumbing'
    elsif profession == 'Electrical'
      'electrical'
    elsif profession == 'Delivery'
      'delivery'
    else 
      'nothing'
    end
  end
end
