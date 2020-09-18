class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    @job = Job.all.sample
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
