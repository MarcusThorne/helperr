class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @professions = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]
    @low_rates = [ "Moving", "Shopping", "Cleaning", "General Helper", "Gardening and Removal"  ]
    @mid_rates = [ "Plumbing", "Carpentry", "Painting", "Electrical", "Landscaping", "Car Mechanic", "Groundworks" ]
    @high_rates = [ "Cooking", "Computer Technician", "Sewing", "Furniture Making" ]

    @user = User.all
    @jobs = Job.all
    @rated_users = @user.each.select { |user| user.rating > 4.6 unless user.rating.nil? }

    if params[:query].present?
      @jobs = Job.search_by_profession(params[:query])
      @query = params[:query]
      redirect_to jobs_path(@query)
    else
      @jobs = Job.all
    end
  end

  def profile
    @jobs = current_user.purchases.map do |purchase|
      purchase.job
    end
    @jobs_sell = current_user.jobs
  end

  def messages
  end
end
