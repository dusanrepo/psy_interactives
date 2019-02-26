# frozen_string_literal: true

RSpec.describe 'random-sampling-assignment', type: :feature do
  let!(:interactive_name) { 'random-sampling-assignment' }
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
    expect(page).to have_selector 'div#stage-1'
    expect(page).to have_selector 'div#stage-2'
    expect(page).to have_selector 'div#stage-3'
    expect(page).to have_selector 'div#stage-4'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
  end

  context 'stage 1', js: true do
    it 'shows the correct content', js: true do
      expect(page).to have_content('Drivers were asked whether they had ever talked on a cell phone while driving.')
      expect(page).to have_selector 'button#random-sampling'
      expect(page).to have_selector 'button#random-assignment'
      expect(page).to have_selector 'button#neither'
      expect(page).to have_selector 'button#both'
    end

    it 'shows the correct feedback', js: true do
      click_button('Random assignment')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Neither')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Both')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random sampling')
      expect(page).to have_selector 'div.feedback-correct'
    end
  end

  context 'stage 2', js: true do
    before do
      click_button('Random sampling')
      click_button('Next')
    end

    it 'shows the correct content', js: true do
      expect(page).to have_content('A research team in Utah placed trained observers at a local intersection with a four-way stop sign.')
      expect(page).to have_selector 'button#random-sampling'
      expect(page).to have_selector 'button#random-assignment'
      expect(page).to have_selector 'button#neither'
      expect(page).to have_selector 'button#both'
    end

    it 'shows the correct feedback', js: true do
      click_button('Random assignment')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random sampling')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Both')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Neither')
      expect(page).to have_selector 'div.feedback-correct'
    end
  end

  context 'stage 3', js: true do
    before do
      click_button('Random sampling')
      click_button('Next')
      click_button('Neither')
      click_button('Next')
    end

    it 'shows the correct content', js: true do
      expect(page).to have_content('A research team invited college students who were taking an introductory psychology class into the laboratory.')
      expect(page).to have_selector 'button#random-sampling'
      expect(page).to have_selector 'button#random-assignment'
      expect(page).to have_selector 'button#neither'
      expect(page).to have_selector 'button#both'
    end

    it 'shows the correct feedback', js: true do
      click_button('Neither')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random sampling')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Both')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random assignment')
      expect(page).to have_selector 'div.feedback-correct'
    end
  end

  context 'stage 4', js: true do
    before do
      click_button('Random sampling')
      click_button('Next')
      click_button('Neither')
      click_button('Next')
      click_button('Random assignment')
      click_button('Next')
    end

    it 'shows the correct content', js: true do
      expect(page).to have_content('The other half of the participants were not given this information.')
      expect(page).to have_selector 'button#random-sampling'
      expect(page).to have_selector 'button#random-assignment'
      expect(page).to have_selector 'button#neither'
      expect(page).to have_selector 'button#both'
    end

    it 'shows the correct feedback', js: true do
      click_button('Neither')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random sampling')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Random assignment')
      expect(page).to have_selector 'div#incorrect'
      click_button('Try again')
    end

    it 'shows the correct feedback', js: true do
      click_button('Both')
      expect(page).to have_selector 'div.feedback-correct'
    end
  end
end
