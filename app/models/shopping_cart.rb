class ShoppingCart < ApplicationRecord

  acts_as_shopping_cart_using :cart_item


  def tax_pct
    7.00
  end
end
