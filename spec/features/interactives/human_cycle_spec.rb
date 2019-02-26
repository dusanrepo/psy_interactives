# frozen_string_literal: true

RSpec.describe 'human-cycle', type: :feature do
  let!(:interactive_name) { 'human-cycle' }
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

  it 'has the chart' do
    sleep 5
    expect(page).to have_selector 'div#chart'
  end

  it 'has the intro content' do
    expect(page).to have_selector 'div.intro-text'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#estrogen'
    expect(page).to have_selector 'button#endometrial'
    expect(page).to have_selector 'button#progesterone'
  end
end
