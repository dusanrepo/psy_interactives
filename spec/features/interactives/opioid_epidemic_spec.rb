# frozen_string_literal: true

RSpec.describe 'opioid-epidemic', type: :feature do
  let!(:interactive_name) { 'opioid-epidemic' }
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
    expect(page).to have_selector ''
  end

  it 'has all content' do
    expect(page).to have_selector ''
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button.previous'
    expect(page).to have_selector 'button.next'
    expect(page).to have_selector 'button.reset'
  end
end
