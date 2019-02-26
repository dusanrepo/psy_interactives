# frozen_string_literal: true

namespace :webpack do
  namespace :build do
    desc 'Build the webpack production configuration file'
    task :production do
      puts("---------------------------------------------------------->>\n")
      puts('Building Webpack Configurations...')
      ENV['CHOSEN_INTERACTIVE'] = 'ALL'
      ProcessWebpackConfigurations.new(mode: 'production').run
      puts("---------------------------------------------------------->>\n")
    end

    desc 'Build the webpack development configuration file'
    task :development do
      require 'yaml'
      puts("---------------------------------------------------------->>\n\n")
      cli = HighLine.new
      all_option = '*** all-interactives ***'
      dataset = YAML.load_file('data/interactives.yml')
      dataset = dataset.keys.sort
      choose do |menu|
        menu.prompt = "\nPlease choose an interactive to build!"
        menu.choices(*dataset) do |chosen|
          puts('Building Webpack Configurations...')
          ENV['CHOSEN_INTERACTIVE'] = chosen
          ProcessWebpackConfigurations.new(mode: 'development', interactive: chosen).run
        end
      end
      Rake::Task['test:lint:style'].invoke
      puts("---------------------------------------------------------->>\n")
    end
  end

  desc 'Remove Generated Webpack File'
  task :delete do
    puts("---------------------------------------------------------->>\n")
    puts('Removing Generated Webpack File')
    puts("---------------------------------------------------------->>\n")
    File.delete('webpack.config.js') if File.exist?('webpack.config.js')
  end
end
