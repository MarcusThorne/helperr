Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#home"
  
  resources :purchase_history, only: [ :index, :show ]
  resources :jobs do
    resources :purchase, only: [ :show, :new, :create ]
  end

  get "my_profile", to: "pages#profile"
  get "messages", to: "pages#messages"
  get "about_us", to: "pages#about_us"
end
