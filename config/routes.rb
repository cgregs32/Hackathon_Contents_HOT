Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :menus
    resources :cart_items
    resources :shopping_carts


    # get '/cart_items/clear', to: 'cart_items#clear_cart'
    get '/cart/show', to: 'shopping_carts#show'
    get '/cart/total', to: 'shopping_carts#cart_total'

  end



  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
