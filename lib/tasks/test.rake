# frozen_string_literal: true

namespace :test do
  namespace :lint do
    desc 'Lint JavaScript via esLint.'
    task :javascript do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning esLint")
      puts("\nIf this command fails, please install: npm install -g eslint")
      puts("---------------------------------------------------------->>\n")
      system('npm run lint')
    end

    desc 'Lint SCSS via StyleLint.'
    task :style do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning Style Lint")
      puts("\nIf this command fails, please install: npm install -g stylelint")
      puts("---------------------------------------------------------->>\n")
      system('stylelint "source/**/*.scss" --syntax scss --fix')
    end

    desc 'Lint HTML via VNU.'
    task :html do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning Style Lint")
      puts("\nIf this command fails, please review https://validator.github.io/validator/")
      puts("---------------------------------------------------------->>\n")
      system('java -jar node_modules/vnu-jar/build/dist/vnu.jar --skip-non-html --errors-only --filterfile .vnurc build')
    end
  end

  namespace :ruby do
    desc 'Run Rspec'
    task :rspec do
      puts("---------------------------------------------------------->>\n")
      puts("\nRunning purge")
      puts("\nRunning production build")
      puts("\nRunning Rspec")
      puts("---------------------------------------------------------->>\n")
      system('bundle exec rake utilities:build:purge:all')
      system('bundle exec rake webpack:build:production')
      system('bundle exec rspec')
    end
  end
end
