class Api::V1::CommentsController < ApplicationController
  def index
    @data = Comment.all
  end
end
