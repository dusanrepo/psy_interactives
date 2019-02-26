# frozen_string_literal: true

RSpec.describe 'words-artificial-language', type: :feature do
  let!(:interactive_name) { 'words-artificial-language' }
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

  it 'has all content' do
    expect(page).to have_selector '.feedback.feedback-incorrect'
    expect(page).to have_selector '.feedback.feedback-correct'
  end

  it 'has a figure caption' do
    expect(page).to have_selector 'div.figure-caption'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#reset'
  end
end
