# frozen_string_literal: true

RSpec.describe 'index', type: :feature do
  let!(:interactives) { YAML.load_file('data/interactives.yml') }

  before do
    sleep 45
    visit '/'
  end

  it 'has the correct titles' do
    expect(page.has_title?('Interactives')).to be_truthy
    expect(page.has_content?('List of Interactives')).to be_truthy
  end

  it 'has the correct interactives' do
    interactives.each do |interactive|
      expect(page.has_content?(interactive[1]['title'])).to be_truthy
      expect(page).to have_link(href: "/interactives/#{interactive[1]['slug']}/")
    end
  end
end
