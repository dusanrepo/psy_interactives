# frozen_string_literal: true

RSpec.describe 'ponzo', type: :feature do
  let!(:interactive_name) { 'ponzo' }
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
    expect(page).to have_selector 'img.option1'
    expect(page).to have_selector 'img.option2'
    expect(page).to have_selector 'img.option3'
    expect(page).to have_selector 'img.option4'
  end

  it 'shows the correct images', js: true do
    expect(find('img.option1').visible?).to be_truthy
  end

  it 'has the correct buttons' do
    expect(find('label.option1').visible?).to be_truthy
    expect(find('label.option2').visible?).to be_truthy
  end

  context 'train tracks is selected', js: true do
    before do
      find('label.option1').click
    end

    it 'shows the correct image', js: true do
      expect(find('img.option1').visible?).to be_truthy
    end
  end

  context 'downward perspective lines is selected', js: true do
    before do
      find('label.option2').click
    end

    it 'shows the correct image', js: true do
      expect(find('img.option2').visible?).to be_truthy
    end
  end

  context 'upward perspective lines is selected', js: true do
    before do
      find('label.option3').click
    end

    it 'shows the correct image', js: true do
      expect(find('img.option3').visible?).to be_truthy
    end
  end

  context 'parallel lines is selected', js: true do
    before do
      find('label.option4').click
    end

    it 'shows the correct image', js: true do
      expect(find('img.option4').visible?).to be_truthy
    end
  end
end
