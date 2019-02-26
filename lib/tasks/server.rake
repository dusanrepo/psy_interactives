# frozen_string_literal: true

namespace :server do

  namespace :develop do
    desc 'Build the site for development with livereload'
    task livereload: ['utilities:build:purge:all'] do
      Rake::Task['webpack:build:development'].invoke
      puts("---------------------------------------------------------->>\n")
      puts('Cranking up the development server running on port 4567')
      puts('Open your browser to http://localhost:4567/')
      puts("---------------------------------------------------------->>\n")
      FileUtils.mkdir('build')
      FileUtils.mkdir("build/#{ENV['CHOSEN_INTERACTIVE']}")
      Dir.glob('source/assets/*').each do |asset_directory|
        next if %w(javascripts stylesheets).include?(File.basename(asset_directory))
        Dir.glob("#{asset_directory}/**").each do |interactive|
          next unless File.basename(interactive) == ENV['CHOSEN_INTERACTIVE']
          FileUtils.cp_r("#{interactive}/.","build/#{File.basename(interactive)}")
        end
      end
      system('bundle exec middleman server -e livereload --verbose')
    end
  end

  namespace :build do
    desc 'Build the site for development'
    task development: ['utilities:build:purge:all'] do
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the server')
      puts("---------------------------------------------------------->>\n")
      Rake::Task['webpack:build:development'].invoke
      system('time bundle exec middleman build -e development --verbose')
      Rake::Task['server:build:cleanup'].invoke
    end

    desc 'Build the site for production'
    task production: ['utilities:build:purge:all'] do
      puts("---------------------------------------------------------->>\n")
      puts('Building static files, but I will not be starting the server')
      puts("---------------------------------------------------------->>\n")
      Rake::Task['webpack:build:production'].invoke
      system('time bundle exec middleman build -e production --verbose')
      Rake::Task['server:build:cleanup'].invoke
    end

    task :cleanup do
      # purge manifests
      puts "\n\n****************************************\n\n"
      puts 'Purging Manifest Files'
      puts "\n****************************************\n\n"
      Dir.glob('build/**/*').select { |file| /manifest/.match file }.each { |file| File.delete(file) }

      # move assets to meet build specs
      puts "\n\n****************************************\n\n"
      puts 'Migrating Asset Files'
      puts "\n****************************************\n\n"
      Dir.glob('build/assets/*').each do |asset_directory|
        Dir.glob("#{asset_directory}/**").each do |interactive|
          if File.directory?("build/#{File.basename(interactive)}")
            FileUtils.cp_r("#{interactive}/.","build/#{File.basename(interactive)}")
          end
          # remove unused directory of assets
          FileUtils.rm_rf(interactive)
        end
      end
      # remove assets after move
      FileUtils.rm_rf('build/assets')

      # purge .keeps
      puts "\n\n****************************************\n\n"
      puts 'Purging .keep Files'
      puts "\n****************************************\n\n"
      Dir.glob('build/**/*', File::FNM_DOTMATCH).select { |file| /.keep/.match file }.each { |file| File.delete(file) }
    end
  end
end
