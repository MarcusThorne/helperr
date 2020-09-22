class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @jobs = Job.all
    @user = User.all
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
