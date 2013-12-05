class ProductTypesController < ApplicationController
	def new
	 	@product_type = ProductType.new
	 end
	 def create
	 	@product_type = ProductType.new(params[:product_type])
	 	if @product_type.save
	 		redirect_to @product_type
	 	else
	 		render 'new'
	 	end
	 end
	 def destroy
		@product_type = ProductType.find(params[:id])
		@product_type.destroy
		render text: "ok"
	end
	def edit
		@product_type = ProductType.find(params[:id])
	end
	def show
		@product_type = ProductType.find(params[:id])
	end

	def index
		@product_types = ProductType.paginate(page: params[:page],:per_page => 10)
	end
	def update
		@product_types = ProductType.find(params[:id])

		if @product_types.update(params[:product_type])
			redirect_to @product_types
		else
			render 'edit'
		end
	end
end
