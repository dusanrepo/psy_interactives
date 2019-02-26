# frozen_string_literal: true

RSpec.describe 'boundaries-between-words', type: :feature do
  let!(:interactive_name) { 'boundaries-between-words' }
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
    expect(page).to have_selector 'div.stage-0'
    expect(page).to have_selector 'div.stage-1'
    expect(page).to have_selector 'div.stage-2'
    expect(page).to have_selector 'div.stage-3'
  end

  it 'has all the draggables' do
    expect(page).to have_selector 'div.where-draggable'
    expect(page).to have_selector 'div.are-draggable'
    expect(page).to have_selector 'div.the-draggable'
    expect(page).to have_selector 'div.silences-draggable'
    expect(page).to have_selector 'div.between-draggable'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#reload'
  end
end
