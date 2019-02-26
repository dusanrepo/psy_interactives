# frozen_string_literal: true

RSpec.describe 'interpreting-results', type: :feature do
  let!(:interactive_name) { 'interpreting-results' }
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
    expect(page).to have_selector 'img.clickable'
    expect(page).to have_selector 'img.step-0'
    expect(page).to have_selector 'img.step-1'
    expect(page).to have_selector 'img.step-1-active'
    expect(page).to have_selector 'img.step-2'
    expect(page).to have_selector 'img.step-3'
    expect(page).to have_selector 'img.step-4'
    expect(page).to have_selector 'img.step-5'
    expect(page).to have_selector 'img.step-6'
  end

  context 'y-axis', js: true do
    it 'shows correct content', js: true do
      expect(page).to have_content('Select the y-axis label.')
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
    end

    it 'shows correct feedback', js: true do
      find('a.y-area').click
      expect(page).to have_content('Positive emotion was the main variable in the study.')
      expect(page).to have_selector 'button.next'
    end
  end

  context 'x-axis', js: true do
    before do
      find('a.y-area').click
      click_button('Next')
    end

    it 'shows correct content', js: true do
      expect(page).to have_content('Select the x-axis label.')
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end

    it 'shows correct feedback', js: true do
      find('a.x-area').trigger('click')
      expect(page).to have_content('This refers to the hour of the day.')
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end
  end

  context 'legend', js: true do
    before do
      find('a.y-area').click
      click_button('Next')
      find('a.x-area').trigger('click')
      click_button('Next')
    end

    it 'shows correct content', js: true do
      expect(page).to have_content('Select the legend.')
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end

    it 'shows correct feedback', js: true do
      find('a.legend-area').click
      expect(page).to have_content('The legend shows that each colored line')
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end
  end

  context 'peak', js: true do
    before do
      find('a.y-area').click
      click_button('Next')
      find('a.x-area').trigger('click')
      click_button('Next')
      find('a.legend-area').click
      click_button('Next')
    end

    it 'shows correct content', js: true do
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end

    it 'shows correct feedback', js: true do
      find('a.peak-area').click
      expect(page).to have_content('The first peak occurred at about 8:00 a.m.')
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end
  end

  context 'saturday', js: true do
    before do
      find('a.y-area').click
      click_button('Next')
      find('a.x-area').trigger('click')
      click_button('Next')
      find('a.legend-area').click
      click_button('Next')
      find('a.peak-area').click
      click_button('Next')
    end

    it 'shows correct content', js: true do
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end

    it 'shows correct feedback', js: true do
      find('path.weekend-area').trigger('click')
      expect(page).to have_content('Although all the lines have similar shapes')
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end
  end

  context 'monday, tuesday', js: true do
    before do
      find('a.y-area').click
      click_button('Next')
      find('a.x-area').trigger('click')
      click_button('Next')
      find('a.legend-area').click
      click_button('Next')
      find('a.peak-area').click
      click_button('Next')
      find('path.weekend-area').trigger('click')
      click_button('Next')
    end

    it 'shows correct content', js: true do
      expect(page).to have_selector 'button.clickable-toggle'
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end

    it 'shows correct feedback', js: true do
      find('a.weekday-area').click
      expect(page).to have_content('People used the fewest positive emotion')
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
    end
  end
end
