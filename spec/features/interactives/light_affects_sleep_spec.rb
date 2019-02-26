# frozen_string_literal: true

RSpec.describe 'light-affects-sleep', type: :feature do
  let!(:interactive_name) { 'light-affects-sleep' }
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
    expect(page).to have_selector 'div.stage-1'
    expect(page).to have_selector 'div.stage-2'
    expect(page).to have_selector 'div.stage-3'
    expect(page).to have_selector 'div.stage-4'
    expect(page).to have_selector 'img.stage-1'
    expect(page).to have_selector 'img.stage-2'
    expect(page).to have_selector 'img.stage-3'
    expect(page).to have_selector 'img.stage-4'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
  end
end
