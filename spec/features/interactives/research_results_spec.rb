# frozen_string_literal: true

RSpec.describe 'research-results', type: :feature do
  let!(:interactive_name) { 'research-results' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  before do
    visit "/interactives/#{interactive['slug']}/index.html"
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has all stages' do
    expect(page).to have_selector 'img.step-1'
    expect(page).to have_selector 'img.step-2'
    expect(page).to have_selector 'img.step-3'
    expect(page).to have_selector 'img.step-4'
    expect(page).to have_selector 'img.step-5'
  end
end
