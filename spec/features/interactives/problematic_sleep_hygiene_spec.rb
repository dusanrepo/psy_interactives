# frozen_string_literal: true

RSpec.describe 'problematic-sleep-hygiene', type: :feature do
  let!(:interactive_name) { 'problematic-sleep-hygiene' }
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
    expect(page).to have_selector 'div#stage-1'
    expect(page).to have_selector 'div#stage-2'
    expect(page).to have_selector 'div#stage-3'
    expect(page).to have_selector 'div#stage-4'
    expect(page).to have_selector 'div#stage-5'
    expect(page).to have_selector 'div#stage-6'
    expect(page).to have_selector 'div#stage-7'
  end

  it 'has all stages pt2' do
    expect(page).to have_selector 'div#stage-8'
    expect(page).to have_selector 'div#stage-9'
    expect(page).to have_selector 'div#stage-10'
    expect(page).to have_selector 'div#stage-11'
    expect(page).to have_selector 'div#stage-12'
    expect(page).to have_selector 'div#stage-13'
    expect(page).to have_selector 'div#stage-14'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reload'
  end
end
