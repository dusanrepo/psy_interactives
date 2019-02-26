# frozen_string_literal: true

RSpec.describe 'alcohol', type: :feature do
  let!(:interactive_name) { 'alcohol' }
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
    expect(page).to have_selector 'div.agg-area.area'
    expect(page).to have_selector 'div.drink-group-area.area'
    expect(page).to have_selector 'div.expected-alc-area.area'
    expect(page).to have_selector 'div.high-alc-area.area'
  end

  context 'level of aggression', js: true do
    it 'shows question when label is clicked', js: true do
      find('div.agg-area').click
      expect(page).to have_content('The y-axis shows the level of the dependent variable.')
      expect(find(:css, '.agg-btn').visible?).to be_truthy
    end

    it 'shows question when next is clicked', js: true do
      find('div.agg-area').click
      find('button.agg-btn').click
      expect(page).to have_selector 'div.popover'
    end
  end

  context 'drink group', js: true do
    it 'shows question when label is clicked', js: true do
      find('div.drink-group-area').click
      expect(page).to have_content('The x-axis shows the level of the independent variable.')
      expect(find(:css, '.drinking-btn').visible?).to be_truthy
    end

    it 'shows question when next is clicked', js: true do
      find('div.drink-group-area').click
      click_button('Next')
      expect(page).to have_selector 'div.popover'
    end
  end

  context 'expected alcohol', js: true do
    it 'shows question when label is clicked', js: true do
      find('div.expected-alc-area').click
      expect(page).to have_content('What does the height of this bar mean?')
      expect(find(:css, '.expected-btn').visible?).to be_truthy
    end

    it 'shows question when next is clicked', js: true do
      find('div.expected-alc-area').click
      click_button('Next')
      expect(page).to have_selector 'div.popover'
    end
  end

  context 'high alcohol', js: true do
    it 'shows question when label is clicked', js: true do
      find('div.high-alc-area').click
      expect(page).to have_content('What does the height of this bar mean?')
      expect(find(:css, '.high-btn').visible?).to be_truthy
    end

    it 'shows question when next is clicked', js: true do
      find('div.high-alc-area').click
      click_button('Next')
      expect(page).to have_selector 'div.popover'
    end
  end
end
