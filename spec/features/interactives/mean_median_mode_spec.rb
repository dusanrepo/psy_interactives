# frozen_string_literal: true

RSpec.describe 'mean-median-mode', type: :feature do
  let!(:interactive_name) { 'mean-median-mode' }
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
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
  end

  it 'has all content' do
    expect(page).to have_selector 'table.frequency-table'
    expect(page).to have_selector 'table.histogram'
    expect(page).to have_selector 'div.levels'
    expect(page).to have_selector 'div.mean'
    expect(page).to have_selector 'div.median'
    expect(page).to have_selector 'div.mode'
  end
end
