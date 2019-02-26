# frozen_string_literal: true

RSpec.describe 'sensperc', type: :feature do
  let!(:interactive_name) { 'sensperc' }
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

  it 'has the correct images' do
    expect(page).to have_selector 'img.brown'
    expect(page).to have_selector 'img.bitter'
    expect(page).to have_selector 'img.acidic'
    expect(page).to have_selector 'img.steamy'
    expect(page).to have_selector 'img.head'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'label.option1'
    expect(page).to have_selector 'label.option2'
    expect(page).to have_selector 'label.option3'
    expect(page).to have_selector 'label.option4'
  end

  context 'eye is selected', js: true do
    before do
      find('label.option1').click
    end

    it 'shows the correct image', js: true do
      expect(page).to have_selector 'img.brown'
    end

    it 'shows the base image', js: true do
      expect(page).to have_selector 'img.head'
    end
  end

  context 'mouth is selected', js: true do
    before do
      find('label.option2').click
    end

    it 'shows the correct image', js: true do
      expect(page).to have_selector 'img.bitter'
    end

    it 'shows the base image', js: true do
      expect(page).to have_selector 'img.head'
    end
  end

  context 'nose is selected', js: true do
    before do
      find('label.option3').click
    end

    it 'shows the correct image', js: true do
      expect(page).to have_selector 'img.acidic'
    end

    it 'shows the base image', js: true do
      expect(page).to have_selector 'img.head'
    end
  end

  context 'skin is selected', js: true do
    before do
      find('label.option4').click
    end

    it 'shows the correct image', js: true do
      expect(find('img.steamy').visible?).to be_truthy
      expect(page).to have_selector 'img.steamy'
    end

    it 'shows the base image', js: true do
      expect(find('img.head').visible?).to be_truthy
      expect(page).to have_selector 'img.head'
    end
  end
end
