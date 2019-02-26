# frozen_string_literal: true

namespace :interactive do
  namespace :stub do
    desc 'Stub new interactive setup'
    task :new do
      cli = HighLine.new
      puts("---------------------------------------------------------->>\n")
      yml = cli.ask("\nWhat is the interacive data yml name of the interacive you would like to stub?")
      raise 'Error! Interacive not supplied.' if yml.empty?
      new_interactive_stubber = NewInteractiveStubber.new(supplied_name: yml, supplied_title: yml)
      puts("---------------------------------------------------------->>\n")
      exit unless cli.agree("\nYour slug for this interacive will be \"#{new_interactive_stubber.formatted_name[:slug]}\" - Are you sure you want this? (Yes or No)")
      puts("---------------------------------------------------------->>\n")
      validated = cli.agree("\nYour title for this interacive will be \"#{new_interactive_stubber.formatted_name[:title]}\" - Are you sure you want this? (Yes or No)")
      unless validated
        title = cli.ask("\nWhat is the interacive title you would like to stub?")
        raise 'Error! Interacive Title not supplied.' if title.empty?
        new_interactive_stubber.supplied_title = title
        new_interactive_stubber.update_formatted_name
      end
      puts("---------------------------------------------------------->>\n")
      puts("Stubbing #{new_interactive_stubber.formatted_name[:slug]} now...")
      new_interactive_stubber.run
    end
  end
end
