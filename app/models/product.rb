class Product < ActiveRecord::Base
	belongs_to :product_type, :order => "created_at DESC"
	attr_accessible :product_type_id, :product_name, :product_description, :product_cost
	validates :product_name, uniqueness: {message: "Name of product is exists" }, presence: true
	validates :product_cost, presence: true, format: { with: /[0-9]/,
    message: "only allows number" }
end
