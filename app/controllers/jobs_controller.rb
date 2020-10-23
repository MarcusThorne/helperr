class JobsController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index, :show ]

  def index
    profession = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]
    @users = User.all

    if params[:query].present?
      @users = Job.search_by_profession(params[:query])
      @query = params[:query]
      raise
    elsif params[:format] == "high_rated"
      @users = User.select { |user| user.rating >= 4.6 unless user.rating.nil? }
    elsif (params[:format])
      @jobs = Job.search_by_profession(params[:format])
      @query = params[:format]
    else
      @jobs = Job.all
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
end
