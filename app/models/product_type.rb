class ProductType < ActiveRecord::Base
	has_many :products, :dependent => :destroy, :order => "created_at DESC"
	attr_accessible :product_type_name
	validates :product_type_name, uniqueness: {message: "Name of product's type is exists" }, presence: true
end
