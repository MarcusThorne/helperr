class JobsController < ApplicationController
    skip_before_action :authenticate_user!, only: :index

    def index
        @jobs = Job.all
    end

    def show
        @jobs = Job.all
        @job = Job.find(params[:id])
    end

    def new
        @job = Job.new
    end

    def create
        @job = Job.new(job_params)
        @job.users = current_user
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
