class CreateProductTypes < ActiveRecord::Migration
  def change
    create_table :product_types do |t|
			t.string :product_type_name

      t.timestamps
    end
    add_index :product_types, :product_type_name, :unique => true
  end
end
