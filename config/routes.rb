Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus
    resources :cart_items


    # get '/cart_items/clear', to: 'cart_items#clear_cart'
    get '/cart/show', to: 'shopping_cart#show'

  end



  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
