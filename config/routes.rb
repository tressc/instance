Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
    resources :images, only: [:index, :create, :show, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy, :index, :show, :update]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
