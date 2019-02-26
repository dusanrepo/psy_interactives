# frozen_string_literal: true

module WebpackAssetHelpers
  def webpack_asset_path(variable, rev_manifest_name)
    "#{rev_manifest_name}/#{asset(variable, rev_manifest_name)}"
  end

  def rev_manifest(rev_manifest_name)
    manifest = File.join(Dir.pwd, "build/#{rev_manifest_name}/#{rev_manifest_name}-manifest.json")
    raise "#{manifest} is missing." unless File.exist?(manifest)
    JSON.parse(File.read(manifest))
  end

  def asset(variable, rev_manifest_name)
    asset = rev_manifest(rev_manifest_name)[variable]
    raise "Can't find #{variable} in webpack assets. See #{rev_manifest_name}-manifest.json for complete list." unless asset
    asset
  end
end
