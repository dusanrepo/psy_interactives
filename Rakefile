require 'pry'
require 'require_all'
require 'highline/import'

require_all 'lib/modules/**/*.rb'

load_all 'lib/tasks/*.rake'

desc 'List all rake tasks for this application.'
task :tasks do
  system('rake -T')
end
