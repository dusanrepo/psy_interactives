# frozen_string_literal: true

RSpec.describe 'uncovering-implicit-bias', type: :feature do
  let!(:interactive_name) { 'uncovering-implicit-bias' }
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
    expect(page).to have_selector 'img.face.white'
    expect(page).to have_selector 'img.face.black'
    expect(page).to have_selector '.results'
  end

  it 'has all content' do
    expect(page).to have_selector 'p.final'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#start'
    expect(page).to have_selector 'button#submit'
    expect(page).to have_selector 'button#reset'
    expect(page).to have_selector 'button#next'
  end
end
