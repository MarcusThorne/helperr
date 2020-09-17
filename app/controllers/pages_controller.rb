class PagesController < ApplicationController
    skip_before_action :authenticate_user!, only: :home

    def home
        @job = Job.all.sample
    end
end
