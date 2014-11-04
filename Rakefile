require 'bundler'
Bundler.require

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'lemmer'
})

require 'sinatra/activerecord/rake'
