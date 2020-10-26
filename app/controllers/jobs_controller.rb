class JobsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index, :show ]

  def index
    profession = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]
    
    if params[:format].present? && params[:query].present?
      redirect_to jobs_path(params[:query])
    end
    
    if params[:format] == "high_rated"
      @users = User.select { |user| user.rating >= 4.5 unless user.rating.nil? }
      
    elsif params[:format].present? || params[:query].present?
      if params[:format] == "low_priced" || params[:query] == "low priced"
        @jobs = Job.select { |job| job.rate.to_i <= 25 }
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) && @user_id.count(user.id) >= 4 }
      
      elsif params[:format] == "high_priced" || params[:query] == "high priced"
        @jobs = Job.select { |job| job.rate.to_i > 25 }
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) && @user_id.count(user.id) >= 4 }
      
      else
        @jobs = Job.search_by_profession(params[query_type])
        @user_id = @jobs.map { |job| job.user_id }
        @users = User.select { |user| @user_id.include?(user.id) }
      end
    
    else
      @users = User.all
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
