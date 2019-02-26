# frozen_string_literal: true

RSpec.describe 'implicit-association-test', type: :feature do
  let!(:interactive_name) { 'implicit-association-test' }
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
    expect(page).to have_selector 'div.image-block'
    expect(page).to have_selector 'div.word-block'
  end

  it 'has all content' do
    expect(page).to have_selector '.instructions-1.block-1'
    expect(page).to have_selector '.instructions-2.block-2'
    expect(page).to have_selector '.instructions-3.block-3'
    expect(page).to have_selector '.instructions-4.block-4'
    expect(page).to have_selector '.instructions-5.block-5'
    expect(page).to have_selector '.instructions-6.block-6'
    expect(page).to have_selector '.instructions-7.block-7'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#start'
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
    expect(page).to have_selector 'button#left'
    expect(page).to have_selector 'button#right'
  end
end
