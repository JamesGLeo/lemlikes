class ApplicationController < Sinatra::Base

  helpers Sinatra::AuthenticationHelper

  enable :sessions
  enable :method_override

  before do
    @connection = ActiveRecord::Base.establish_connection({adapter: 'postgresql',database: 'lemmer'})
  end
  after do
    @connection.disconnect!
  end

  set :public_folder, File.expand_path(File.dirname(__FILE__) + '/../public')
  set :views, File.expand_path(File.dirname(__FILE__) + '/../views')

  # not_found do
  #   status 404
  #   "LemLemBot says ':('"
  # end
end
