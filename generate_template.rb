#
#
# Template gen with :
# rails new eschool -m template/generate_template.rb
#

readme("README")

run "rm public/index.html"

run "cp -r ../template/blueprint/* ."

#
# Gems
#
gem 'mysql2'
gem 'redcarpet'
gem 'simple-navigation'
gem 'will_paginate'
gem 'paperclip'

if yes?("Would you like to install Devise ?")
  gem 'devise', :git => 'git://github.com/plataformatec/devise.git'
  generate("devise:install")
  model_name = ask("What would you like the user model to be called? [user]")
  model_name = "user" if model_name.blank?
  generate("devise", model_name)
end

run("bundle install")

#
# Application HELPER
#

# #generate(:scaffold, "person name:string")

generate(:controller, "home index about")
route "root :to => 'home#index'"

# #rake("db:migrate")

if yes?("Want to init a new Git repo ?") 
  git :init
  git :add => "."
  git :commit => "-a -m 'Initial commit'"
end
