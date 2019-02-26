# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize
require_relative '../helpers/string_helpers'
require 'securerandom'

class NewInteractiveStubber
  include StringHelpers

  DIR_OF_IMAGES = 'source/assets/images'
  DIR_OF_STYLESHEETS = 'source/assets/stylesheets'
  DIR_OF_JAVASCRIPTS = 'source/assets/javascripts'
  DIR_OF_CONTENT = 'source/content'
  DIR_OF_LAYOUTS = 'source/layouts'
  DIR_OF_WEBPACK_CONFIGURATIONS = 'webpack/configurations'
  DIR_OF_DATA = 'data'

  attr_reader :formatted_name,
              :supplied_name,
              :supplied_title,
              :data_interactive_template_yml,
              :index_template_html_slim,
              :javascript_template_js,
              :layout_template_html_slim,
              :stylesheet_template_scss,
              :webpack_configuration_template_js
  attr_writer :supplied_title

  def initialize(supplied_name:, supplied_title:)
    self.supplied_name = supplied_name
    self.supplied_title = supplied_title
    self.formatted_name = stub_names(supplied_name, supplied_title)
    load_templates
  end

  def run
    stub_images
    stub_stylesheets
    stub_javascripts
    stub_layouts
    stub_content
    stub_webpack_configuration
    stub_data_interactive_yml
  end

  def update_formatted_name
    self.formatted_name = stub_names(supplied_name, supplied_title)
  end

  private

  attr_writer :formatted_name,
              :supplied_name,
              :data_interactive_template_yml,
              :index_template_html_slim,
              :javascript_template_js,
              :layout_template_html_slim,
              :stylesheet_template_scss,
              :webpack_configuration_template_js

  def load_templates
    self.data_interactive_template_yml = File.read('lib/templates/interactive/data_interactive_template.yml')
    self.index_template_html_slim = File.read('lib/templates/interactive/index_template.html.slim')
    self.javascript_template_js = File.read('lib/templates/interactive/javascript_template.js')
    self.layout_template_html_slim = File.read('lib/templates/interactive/layout_template.html.slim')
    self.stylesheet_template_scss = File.read('lib/templates/interactive/stylesheet_template.scss')
    self.webpack_configuration_template_js = File.read('lib/templates/interactive/webpack_configuration_template.js')
  end

  def uuid_gen
    SecureRandom.uuid
  end

  def stub_names(supplied_name, supplied_title)
    slug = format_slug(supplied_name)
    {
      slug: slug,
      const: format_constant_name(slug),
      title: format_title(supplied_title)
    }
  end

  def stub_data_interactive_yml
    data_interactive_template_yml.gsub!('{{interactive-dir-name}}', formatted_name[:slug])
    data_interactive_template_yml.gsub!('{{interactive-yml-name}}', formatted_name[:slug])
    data_interactive_template_yml.gsub!('{{interactive-js-name}}', formatted_name[:slug])
    data_interactive_template_yml.gsub!('{{interactive-scss-name}}', formatted_name[:slug])
    data_interactive_template_yml.gsub!('{{interactive-layout-name}}', formatted_name[:slug])
    data_interactive_template_yml.gsub!('{{interactive-title-name}}', formatted_name[:title])
    data_interactive_template_yml.gsub!('{{interactive-id}}', uuid_gen)
    File.open("#{DIR_OF_DATA}/interactives.yml", 'a') { |file| file.write("\n\n" + data_interactive_template_yml) }
  end

  def stub_webpack_configuration
    webpack_configuration_template_js.gsub!('{{interactive-dir-name}}', formatted_name[:slug])
    webpack_configuration_template_js.gsub!('{{interactive-yml-name}}', formatted_name[:slug])
    webpack_configuration_template_js.gsub!('{{interactive-js-name}}', formatted_name[:slug])
    webpack_configuration_template_js.gsub!('{{interactive-scss-name}}', formatted_name[:slug])
    webpack_configuration_template_js.gsub!('{{interactive-const-name}}', formatted_name[:const])
    File.open("#{DIR_OF_WEBPACK_CONFIGURATIONS}/#{formatted_name[:slug]}.js", 'w') { |file| file.write(webpack_configuration_template_js) }
  end

  def stub_content
    File.open("#{create_directory(DIR_OF_CONTENT)}/index.html.slim", 'w') { |file| file.write(index_template_html_slim) }
  end

  def stub_layouts
    File.open("#{DIR_OF_LAYOUTS}/#{formatted_name[:slug]}.html.slim", 'w') { |file| file.write(layout_template_html_slim) }
  end

  def stub_javascripts
    File.open("#{create_directory(DIR_OF_JAVASCRIPTS)}/#{formatted_name[:slug]}.js", 'w') { |file| file.write(javascript_template_js) }
  end

  def stub_stylesheets
    File.open("#{create_directory(DIR_OF_STYLESHEETS)}/#{formatted_name[:slug]}.scss", 'w') { |file| file.write(stylesheet_template_scss) }
  end

  def stub_images
    File.open("#{create_directory(DIR_OF_IMAGES)}/.keep", 'w') { |file| file.write('DELETE ME WHEN DONE') }
  end

  def create_directory(base_path)
    path = base_path + '/' + formatted_name[:slug]
    FileUtils.mkdir_p(path) unless File.directory?(path)
    path
  end
end
# rubocop:enable all
