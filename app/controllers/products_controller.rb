class ProductsController < ApplicationController
	def new
		@product_type = ProductType.find(params[:product_type_id])
		@product = Product.new
	end
	def create
		@product_type = ProductType.find(params[:product_type_id])
		@product = @product_type.products.create(params[:product])
		redirect_to product_type_products_path(@product_type)
	end
	def show
		@product = Product.find(params[:id])
	end
	def destroy
    @product = Product.find(params[:id])
    @product.destroy
    render text: 'ok'
  #   @product_type = ProductType.find(params[:product_type_id])
		# @products = @product_type.products.paginate(page: params[:page],:per_page => 3)
  #   respond_to do |format|
  #   	format.js {render products: @products, product_type: @product_type}
  #   end
  end
  def edit
    @product_type = ProductType.find(params[:product_type_id])
    @product = Product.find(params[:id])
  end
  def index
		@product_type = ProductType.find(params[:product_type_id])
		@products = @product_type.products.paginate(page: params[:page],:per_page => 10)
	end
	def update
		@product = Product.find(params[:id])
		if @product.update(params[:product])
			redirect_to product_type_product_path(@product.product_type, @product)
		else
			render 'edit'
		end
	end
end
