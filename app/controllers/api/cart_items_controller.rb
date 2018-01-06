class Api::CartItemsController < ApplicationController
before_action :find_cart


def create
  binding.pry
  @cart.add(params[:item], params[:item][:price])
end

def destroy
  @cart.remove(@item, @item[:id])
end

def clear_cart
  @cart.clear
end

private

  def find_item
    @item = Menu.find(params[:id])
  end

  def find_cart
    @cart = ShoppingCart.find(1)
  end


end
