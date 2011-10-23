# Template Gen for Rails

## How to use

`rails new eschool -m rails_template/generate_template.rb`

## Elements

- Markdown helper
- Bootstrap CSS from Twitter
- HTML5 Boilerplate (full yielding & co)

## config/application.rb

    config.generators do |g|
    g.test_framework  false
    g.stylesheets     false   # disable geneartion stylesheet
    g.assets	      false
    end
