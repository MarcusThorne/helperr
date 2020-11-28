class User < ApplicationRecord
  has_many :purchases
  has_many :jobs
  has_one_attached :photo
  has_one_attached :cover_photo
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include PgSearch::Model
  pg_search_scope :search_by_profession,
    against: [ :jobs ],
    using: {
      tsearch: { prefix: true }
    }
end
