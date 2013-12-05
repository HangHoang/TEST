class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
    	t.integer :product_type_id, :null=>false
    	t.string :product_name, :null=>false, :default=>""
    	t.string :product_description, :default=>""
    	t.float :product_cost, :null=>false, :default=>"0.0"

      t.timestamps
    end
    add_index :products, :product_type_id
    add_index :products, :product_name, :unique => true
    add_index :products, :product_description
    add_index :products, :product_cost
  end
end
