class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items do |t|
      t.shopping_cart_item_fields # Creates the cart items fields
      t.iteger :owner_id
      t.string :owner_type
      t.integer :quantity
      t.integer :item_id
      t.string :item_type
      t.float :price

      t.timestamps
    end
  end
end
