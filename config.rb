# frozen_string_literal: true

Bundler.require(:default)

require 'slim'
Slim::Engine.disable_option_validator!

require_all 'lib/helpers'
autoload_all 'lib/helpers'

activate :directory_indexes

set :site_url, ""
set :images_dir, ""
set :css_dir, ""
set :js_dir, ""

helpers WebpackAssetHelpers
helpers FolderHelpers

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

ignore 'assets/stylesheets/*'
ignore 'assets/javascripts/*'
ignore 'partials/*'
ignore 'content/*'
ignore 'rev-manifest.json'

data.interactives.each do |interactive_id, interactive_data|
  next unless ENV['CHOSEN_INTERACTIVE']=='ALL' || ENV['CHOSEN_INTERACTIVE']==interactive_id
  proxy "/#{interactive_data['slug']}/index.html",
        "/content/#{interactive_data['directory']}/index.html",
        layout: interactive_data['layout'] || 'global',
        ignore: true,
        locals: {
          interactive_title: interactive_data['title'],
          interactive_js: interactive_data['js_file'],
          interactive_scss: interactive_data['scss_file']
        }
end

# rubocop:disable Metrics/BlockLength
helpers do
  def image_url(source)
    image_path(source)
  end

  def image_tag(path, options_hash = ::Middleman::EMPTY_HASH)
    options = options_hash.dup
    options.merge!(src: path)
    tag("img", options)
  end

  def stylesheet_link_tag(destination)
    super(destination)
  end

  def javascript_include_tag(destination)
    super(destination)
  end
end
# rubocop:enable Metrics/BlockLength
