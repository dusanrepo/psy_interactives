# frozen_string_literal: true

RSpec.describe 'correlation-coefficients', type: :feature do
  let!(:interactive_name) { 'correlation-coefficients' }
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
    expect(page).to have_selector 'div#interactive-content'
    expect(page).to have_selector 'div.drag-container'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button.reset'
    expect(page).to have_selector 'button.plus'
    expect(page).to have_selector 'button.minus'
  end

  context 'stage 1', js: true do
    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.positive'
      expect(page).not_to have_selector 'div.drag-container'
      expect(page).to have_content('Weaker')
      expect(page).to have_content('Stronger')
    end
  end

  context 'stage 2', js: true do
    before do
      click_button('Next')
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.image1'
      expect(page).to have_selector 'img.image2'
      expect(page).to have_selector 'img.image3'
      expect(page).not_to have_selector 'div#interactive-content'
      expect(page).to have_content('Drag the appropriate correlation to the correct scatterplot.')
    end
  end
end
