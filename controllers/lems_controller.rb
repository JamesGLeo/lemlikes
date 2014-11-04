class LemsController < ApplicationController

  before do
    authenticate!
  end

  after do
    redirect '/users/profile'
  end

  post '/' do
    current_user.lems << Lem.create(params[:lem])
  end

  delete '/:id' do
    Lem.delete(params[:id])
  end

end
