# frozen_string_literal: true

RSpec.describe 'racial-intolerance', type: :feature do
  let!(:interactive_name) { 'racial-intolerance' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  before do
    visit "/interactives/#{interactive['slug']}/"
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has the map' do
    sleep 5
    expect(page).to have_selector 'div#map'
  end

  it 'has the intro content' do
    expect(page).to have_selector 'div.intro-text'
  end

  it 'has the legend content' do
    expect(page).to have_selector 'div.level-one'
    expect(page).to have_selector 'div.level-two'
    expect(page).to have_selector 'div.level-three'
    expect(page).to have_selector 'div.level-four'
    expect(page).to have_selector 'div.level-five'
    expect(page).to have_selector 'div.level-six'
    expect(page).to have_selector 'div.level-seven'
  end
end
