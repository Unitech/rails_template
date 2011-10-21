#
#
# Template gen with :
# rails new eschool -m template/generate_template.rb
#

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
gem 'devise', :git => 'git://github.com/plataformatec/devise.git'

run("bundle install")

#
# Application HELPER
#

# #generate(:scaffold, "person name:string")
generate(:controller, "home index about")
route "root :to => 'home#index'"
# #rake("db:migrate")
 
# git :init
# git :add => "."
# git :commit => "-a -m 'Initial commit'"
