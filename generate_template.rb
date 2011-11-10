#
#
# Rails_Template gen with :
# rails new eschool -m rails_template/generate_rails_template.rb
#

run "rm public/index.html"


# if yes?("Bootstrap stylesheet ?")
#   run "cp -vr ../rails_template/blueprint/app/assets/stylesheets/bootstrap.min.css app/assets/stylesheets/"
# end

# if yes?("HTML5 Full complient Views & partials (and some other stuffs) ?")
#   run "cp -vr ../rails_template/blueprint/app/views/* app/views/"
#   run "cp -vr ../rails_template/blueprint/public/* public/"
# end

run "cp -vr ../rails_template/blueprint/* ."

generate(:controller, "home index about")

#
# Gems
#
gem 'mysql2'
gem 'redcarpet'
gem 'simple-navigation'
gem 'will_paginate'
gem 'paperclip'

# if yes?("Would you like to install dynamic forms ?")
#   gem 'dynamic_form', :git => 'git://github.com/Alexandre-Strzelewicz/dynamic_form.git'
# else
#   run "rm lib/template/erb/scaffold/_form.html.erb"
# end

if yes?("Would you like to install Devise ?")
  gem 'devise', :git => 'git://github.com/plataformatec/devise.git'
  #run("bundle install")

  generate("devise:install")
  model_name = ask("What would you like the user model to be called? [user]")
  model_name = "user" if model_name.blank?
  generate("devise", model_name)
  rake("db:migrate")
end


#
# Application HELPER
#

#generate(:scaffold, "person name:string")



route "root :to => 'home#index'"


# if yes?("Want to init a new Git repo ?") 
#   git :init
#   git :add => "."
#   git :commit => "-a -m 'Initial commit'"
# end
