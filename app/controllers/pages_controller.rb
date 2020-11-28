class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :about_us ]

  def home
    @professions = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks", "Barber" ]
    @low_rates = [ "Moving", "Shopping", "Cleaning", "General Helper", "Gardening and Removal"  ]
    @mid_rates = [ "Plumbing", "Carpentry", "Painting", "Electrical", "Landscaping", "Car Mechanic", "Groundworks", "Barber" ]
    @high_rates = [ "Cooking", "Computer Technician", "Sewing", "Furniture Making" ]

    @locations = User.all.each { |user| user.location }
    @users = User.all
    @jobs = Job.all
    @rated_users = @users.each.select { |user| user.rating > 4.6 unless user.rating.nil? }
    @coverphoto = ["cooking.jpg", "painting.jpg", "peoplejumping.jpg", "moving.jpg", "sewing.jpg"]

    if params[:query].present?
      @jobs = Job.search_by_profession(params[:query])
      @query = params[:query]
      redirect_to jobs_path(@query)
    end
  end

  def profile
    @user = current_user
    @hired = current_user.purchases.map do |purchase|
      purchase.job
    end
    @jobs_sell = current_user.jobs

    images = ["painting.jpg", "helping.jpg"]
    @cover_photo = images.sample
  end

  def messages
  end

  def about_us
  end
end
