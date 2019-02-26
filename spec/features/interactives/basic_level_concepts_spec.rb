# frozen_string_literal: true

RSpec.describe 'basic-level-concepts', type: :feature do
  let!(:interactive_name) { 'basic-level-concepts' }
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
    expect(page).to have_selector 'div.trial-image'
    expect(page).to have_selector 'div.trial-text'
    expect(page).to have_selector 'div.trial-feedback'
    expect(page).to have_selector 'div.frame-0'
    expect(page).to have_selector 'div.frame-1'
    expect(page).to have_selector 'div.frame-2'
  end

  it 'has all content' do
    expect(page).to have_selector 'div.trial-image'
    expect(page).to have_selector 'div.trial-text'
    expect(page).to have_selector 'div.trial-feedback'
    expect(page).to have_selector 'canvas#myChart'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button.previous'
    expect(page).to have_selector 'button.next'
    expect(page).to have_selector 'button.reset'
    expect(page).to have_selector 'button.try-again'
  end
end
