# frozen_string_literal: true

activate :external_pipeline,
         name: :webpack,
         command: 'npm run build',
         source: 'build'

Slim::Engine.set_default_options(pretty: true)

activate :minify_html do |html|
  html.remove_quotes = false
  html.remove_intertag_spaces = true
  html.remove_http_protocol = true
end

set :relative_links, true

activate :relative_assets
