class Api::ShoppingCartsController < ApplicationController

  before_filter :extract_shopping_cart

    def create
      @product = Product.find(params[:product_id])
      @shopping_cart.add(@product, @product.price)
      redirect_to shopping_cart_path
    end

    def show
      cart = ShoppingCart.find(1)
      items = cart.cart_items.map { |item| item.item_id }
      binding.pry
      render json: Menu.find(items)
    end

    private
    def extract_shopping_cart
      shopping_cart_id = session[:shopping_cart_id]
      @shopping_cart = session[:shopping_cart_id] ? ShoppingCart.find(shopping_cart_id) : ShoppingCart.create
      session[:shopping_cart_id] = @shopping_cart.id
    end

end
