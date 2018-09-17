Rails.application.routes.draw do
  get 'comments/show'
  get 'comments/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, format: 'json' do
    namespace :v1  do
      resources :comments
    end
  end
end
