class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.text :item
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
