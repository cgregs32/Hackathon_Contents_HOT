class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.text :item, null: false, default: ''
      t.float :price, null: false, default: 0.0
      t.string :image

      t.timestamps
    end
  end
end
