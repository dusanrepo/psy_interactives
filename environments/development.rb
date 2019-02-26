# frozen_string_literal: true

Bundler.require(:development)

Slim::Engine.set_default_options(pretty: true)

activate :external_pipeline,
         name: :webpack,
         command: 'npm run build',
         source: 'build'

set :relative_links, true

activate :relative_assets
