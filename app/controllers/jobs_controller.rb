class JobsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index, :show ]

  def index
    profession = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]
    @query = params[query_type]
    @index = 0

    if params[:format].present? && params[:query].present?
      redirect_to jobs_path(params[:query])

    elsif params[:format].to_i != 0
      number = 12
      start = 1 + ( number * ( params[:format].to_i - 1 ))
      finish = 12 + ( number * ( params[:format].to_i - 1 ))
      @users = User.all[start..finish]

    elsif params[:format] == "high_rated"
      @users = User.select { |user| user.rating >= 4.5 unless user.rating.nil? }.first(12)

    elsif params[:format].present? || params[:query].present?
      if params[:format] == "low_priced" || params[:query] == "low priced"
        @jobs = Job.select { |job| job.rate.to_i <= 25 }
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) && @user_id.count(user.id) >= 4 }.first(12)

      elsif params[:format] == "high_priced" || params[:query] == "high priced"
        @jobs = Job.select { |job| job.rate.to_i > 25 }
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) && @user_id.count(user.id) >= 4 }.first(12)

      else
        @jobs = Job.search_by_profession(params[query_type])
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) }.first(12)
      end

    else
      if User.all.count < 12
        @users = User.all
      else
        @users = User.all[1..12]
      end
    end
  end

  def show
    @jobs = Job.all
    if params[:id].nil?
      @job = Job.ids.first
    else
      @job = Job.find(params[:id])
    end
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)
    @job.user = current_user
    if @job.save
      redirect_to jobs_path
    else
      render :new
    end
  end

  def edit
    @job = Job.find(params[:id])
  end

  def update
    @job = Job.find(params[:id])
    @job.update
    redirect_to job_path(@job)
  end

  def destroy
    @job.destroy
    redirect_to jobs_path
  end

  private

  def job_params
    params.require(:job).permit(:profession, :rate, :description, :location)
  end

  def query_type
    if params[:query].present?
      :query
    else
      :format
    end
  end
end
