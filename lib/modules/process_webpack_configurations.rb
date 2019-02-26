# frozen_string_literal: true

require 'yaml'
require_relative '../helpers/string_helpers'

class ProcessWebpackConfigurations
  include StringHelpers

  attr_reader :insert_webpack_interactive_configurations,
              :insert_webpack_configuration_merges,
              :insert_webpack_interactive_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode, :interactive, :interactive_list

  def initialize(mode:, interactive: nil)
    self.mode = mode
    self.interactive = interactive
    self.interactive_list = YAML.load_file('data/interactives.yml')
    self.global_webpack_config_js = File.read('webpack/global.webpack.config.js')
    self.insert_webpack_interactive_configurations = ''
    self.insert_webpack_configuration_merges = ''
    self.insert_webpack_interactive_plugins = ''
    self.insert_webpack_plugin_merges = ''
  end

  def run
    append_configurations
    append_plugins
    write_out_configuration
  end

  private

  attr_writer :insert_webpack_interactive_configurations,
              :insert_webpack_configuration_merges,
              :insert_webpack_interactive_plugins,
              :insert_webpack_plugin_merges,
              :global_webpack_config_js,
              :mode, :interactive, :interactive_list

  # rubocop:disable Metrics/AbcSize
  def append_configurations
    process_append_configurations
    process_substitution(insert_webpack_interactive_configurations, '{{insert-webpack-interactive-configurations}}')
    process_substitution(trim_excess(insert_webpack_configuration_merges), '{{insert-webpack-configuration-merges}}')
  end

  def process_append_configurations
    return Dir.glob('webpack/configurations/*.js') { |file| process_append_configuration_file(file) } if interactive.nil?
    process_append_configuration_file("webpack/configurations/#{interactive}.js")
  end

  def process_append_configuration_file(file)
    self.insert_webpack_interactive_configurations = insert_webpack_interactive_configurations + "\n" + File.read(file)
    self.insert_webpack_configuration_merges = insert_webpack_configuration_merges +
                                              'merge.smart(globalConfig, ' +
                                              format_constant_name(File.basename(file, '.*')) + '),'
  end

  def append_plugins
    return remove_plugins unless development?
    Dir.glob('webpack/plugins/*.js') do |file|
      self.insert_webpack_interactive_plugins = insert_webpack_interactive_plugins + "\n" + File.read(file)
      self.insert_webpack_plugin_merges = insert_webpack_plugin_merges + ',' + format_constant_name(File.basename(file, '.*'))
    end
    process_substitution(insert_webpack_interactive_plugins, '{{insert-webpack-interactive-plugins}}')
    process_substitution(insert_webpack_plugin_merges, '{{insert-webpack-interactive-plugin-merges}}')
  end
  # rubocop:enable Metrics/AbcSize

  def remove_plugins
    process_substitution('', '{{insert-webpack-interactive-plugins}}')
    process_substitution('', '{{insert-webpack-interactive-plugin-merges}}')
  end

  def write_out_configuration
    File.open('webpack.config.js', 'w') { |file| file.write(global_webpack_config_js) }
  end

  def development?
    mode == 'development'
  end

  def process_substitution(str_to_use, str_to_replace)
    global_webpack_config_js[str_to_replace] = str_to_use
  end

  def trim_excess(str)
    str.slice!(str.length - 1, str.length)
    str
  end
end
