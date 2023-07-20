class HomeController < ApplicationController

  #1 = Yellow
  # 2 = Red
  # 3 = Green
  # 4 = Blue
  def index
    level = 4
    @order = []
    @player_input = []

    level.times do |i|
      @order << rand(1..4)
    end

  end

end