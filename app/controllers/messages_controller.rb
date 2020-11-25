class MessagesController < ApplicationController
  def show 
    @you = current_user 
    @user = User.find(params[:id])
  end
end