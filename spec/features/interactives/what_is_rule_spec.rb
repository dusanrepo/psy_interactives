# frozen_string_literal: true

RSpec.describe 'what-is-rule', type: :feature do
  let!(:interactive_name) { 'what-is-rule' }
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
    expect(page).to have_selector '.stage.stage-1'
    expect(page).to have_selector '.stage.stage-2'
  end

  it 'has all content' do
    expect(page).to have_selector 'div.instructions'
    expect(page).to have_selector 'div.answer'
  end

  it 'has all controls' do
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#guess'
    expect(page).to have_selector 'button#show-hypothesis'
    expect(page).to have_selector 'button#check-another'
    expect(page).to have_selector 'button#check'
    expect(page).to have_selector 'button#reset'
  end
end
