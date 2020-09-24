class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @user = User.all

    if params[:query].present?
      @jobs = Job.search_by_profession(params[:query])
      @query = params[:query]
      redirect_to jobs_path(@query)
    else
      @jobs = Job.all
    end

    @high_rated_users = @user.select do |user|
      unless user.rating.nil?
        user.rating > 4.7
      end
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
