# frozen_string_literal: true

# rubocop:disable Metrics/AbcSize, Metrics/MethodLength
require 'net/sftp'
require 'timeout'

class Deploy
  def initialize
    raise 'Error! Missing Configuration' unless properly_configured?
    self.chairseven_ftp_un = ENV['CHAIRSEVEN_FTP_UN']
    self.chairseven_ftp_pw = ENV['CHAIRSEVEN_FTP_PW']
    self.chairseven_ftp_url = ENV['CHAIRSEVEN_FTP_URL']
    self.chairseven_ftp_remote_path = ENV['CHAIRSEVEN_FTP_REMOTE_PATH']
  end

  def run
    Timeout.timeout(1500) do
      Net::SFTP.start(chairseven_ftp_url, chairseven_ftp_un, password: chairseven_ftp_pw) do |sftp|
        puts 'Deleting the base index....'
        sftp.session.exec!("rm -rf #{chairseven_ftp_remote_path}/index.html")
        puts "\n\nDeleting the assets...."
        sftp.session.exec!("rm -rf #{chairseven_ftp_remote_path}/assets")
        puts "\n\nDeleting the interactives...."
        sftp.session.exec!("rm -rf #{chairseven_ftp_remote_path}/interactives")
        puts "\n\nUploading the base index...."
        sftp.upload!('build/index.html', "#{chairseven_ftp_remote_path}/index.html")
        puts "\n\nUploading the assets...."
        sftp.session.exec!("mkdir #{chairseven_ftp_remote_path}/assets")
        sftp.upload!('build/assets', "#{chairseven_ftp_remote_path}/assets") do |event, uploader, *args|
          sftp_logger(event, uploader, *args)
        end
        puts "\n\nUploading the interactives...."
        sftp.session.exec!("mkdir #{chairseven_ftp_remote_path}/interactives")
        sftp.upload!('build/interactives', "#{chairseven_ftp_remote_path}/interactives") do |event, uploader, *args|
          sftp_logger(event, uploader, *args)
        end
      end
    end
    puts 'File transfer complete'
  rescue Timeout::Error
    raise 'Error! FTP Timeout'
  end

  private

  attr_accessor :chairseven_ftp_un,
                :chairseven_ftp_pw,
                :chairseven_ftp_url,
                :chairseven_ftp_remote_path

  def properly_configured?
    return false unless ENV['CHAIRSEVEN_FTP_UN']
    return false unless ENV['CHAIRSEVEN_FTP_PW']
    return false unless ENV['CHAIRSEVEN_FTP_URL']
    return false unless ENV['CHAIRSEVEN_FTP_REMOTE_PATH']
    true
  end

  def sftp_logger(event, _uploader, *args)
    case event
    when :open then
      # args[0] : file metadata
      puts "starting upload: #{args[0].local} -> #{args[0].remote} (#{args[0].size} bytes}"
    when :put then
      # args[0] : file metadata
      # args[1] : byte offset in remote file
      # args[2] : data being written (as string)
      puts "writing #{args[2].length} bytes to #{args[0].remote} starting at #{args[1]}"
    when :close then
      # args[0] : file metadata
      puts "finished with #{args[0].remote}"
    when :mkdir then
      # args[0] : remote path name
      puts "creating directory #{args[0]}"
    when :finish then
      puts 'all done!'
    end
  end
end

Deploy.new.run
# rubocop:enable all
