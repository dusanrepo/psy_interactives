# frozen_string_literal: true

Bundler.require(:development)

require 'yaml'
require 'rspec'
require 'capybara/rspec'
require 'axe/rspec'
require 'middleman-core'
require 'middleman-core/rack'

middleman_app = ::Middleman::Application.new

require_all 'spec/support'
autoload_all 'spec/support'

# Capybara.javascript_driver = :webkit
# Capybara.server = :webrick

# Capybara::Webkit.configure(&:block_unknown_urls)

Capybara.app = ::Middleman::Rack.new(middleman_app).to_app do
  set :root, File.expand_path(File.join(File.dirname(__FILE__), '..'))
  set :environment, :development
  set :show_exceptions, false
end
