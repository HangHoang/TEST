class UsersController < ApplicationController
	def new
		@user = User.new
	end
	def create
		@user = User.new(params[:user])
	 	if @user.save
	 		redirect_to product_types_path
	 	else
	 		render 'new'
	 	end
  end
  def index
  	@users = User.paginate(page: params[:page],:per_page => 10)
		respond_to do |format|
	    format.html
	    format.xml { render xml: @users }
	  end
  end
	def update
		@user = User.find(params[:id])

		if @user.update(params[:user])
			redirect_to @user
		else
			render 'edit'
		end
	end
end
