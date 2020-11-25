class UserController < ApplicationController
  def show
    @user = User.find(params[:id])
    @hired = @user.purchases.map do |purchase|
      purchase.job
    end
    @jobs_sell = @user.jobs

    images = ["painting.jpg", "helping.jpg"]
    @cover_photo = images.sample
  end
end
