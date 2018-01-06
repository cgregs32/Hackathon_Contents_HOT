class Api::MenusController < ApplicationController
  before_action :set_menu, only: [ :show, :update, :destroy ]

  def index
    @menus = Menu.all
    render json: @menus
  end

  def show 
  end 

  def create
    @menu = Menu.new(menu_params)
    if @menu.save 
      render :show, status: :created
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  def update 
    if @menu.update(menu_params)
      render :show, status: :ok
    else 
      render json: @menu.errors, status: :unprocessable_entity
    end
  end 
  
  def destroy
    @menu.destroy
  end
  
  private 

  def set_menu
    params.require(:menu).permit(:item, :price, :image)
  end 

  def menu_params
    @menu = Menu.find(params[:id])
  end 

end
