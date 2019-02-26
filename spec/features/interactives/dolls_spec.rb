# frozen_string_literal: true

RSpec.describe 'dolls', type: :feature do
  let!(:interactive_name) { 'dolls' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  before do
    visit "/interactives/#{interactive['slug']}/index.html"
  end

  def iterate_stage(num_stage)
    num_stage.times do
      click_button('Next')
    end
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has the correct images' do
    expect(page).to have_selector 'img#room1'
    expect(page).to have_selector 'img#room2'
    expect(page).to have_selector 'img#room3'
    expect(page).to have_selector 'img#room4'
    expect(page).to have_selector 'img#room5'
  end

  context 'first stage' do
    it 'shows the correct image on the first stage', js: true do
      expect(page).to have_selector('img#room1', visible: true)
      expect(page).to have_selector('img#room2', visible: false)
      expect(page).to have_selector('img#room3', visible: false)
      expect(page).to have_selector('img#room4', visible: false)
      expect(page).to have_selector('img#room5', visible: false)
    end

    it 'does not show the questions, answers, or answer buttons on the first stage', js: true do
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      expect(page).to have_selector('button#option1', visible: false)
      expect(page).to have_selector('button#option2', visible: false)
      expect(page).to have_selector('div.test-question-wrapper', visible: false)
    end
  end

  context 'second stage' do
    before do
      click_button('Next')
    end
    it 'shows the correct image on the second stage', js: true do
      expect(page).to have_selector('img#room1', visible: false)
      expect(page).to have_selector('img#room2', visible: true)
      expect(page).to have_selector('img#room3', visible: false)
      expect(page).to have_selector('img#room4', visible: false)
      expect(page).to have_selector('img#room5', visible: false)
    end

    it 'does not show the questions, answers, or answer buttons on the second stage', js: true do
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      expect(page).to have_selector('button#option1', visible: false)
      expect(page).to have_selector('button#option2', visible: false)
      expect(page).to have_selector('div.test-question-wrapper', visible: false)
    end
  end

  context 'third stage' do
    before do
      iterate_stage(2)
    end

    it 'shows the correct image on the third stage', js: true do
      expect(page).to have_selector('img#room1', visible: false)
      expect(page).to have_selector('img#room2', visible: false)
      expect(page).to have_selector('img#room3', visible: true)
      expect(page).to have_selector('img#room4', visible: false)
      expect(page).to have_selector('img#room5', visible: false)
    end

    it 'does not show the questions, answers, or answer buttons on the third stage', js: true do
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      expect(page).to have_selector('button#option1', visible: false)
      expect(page).to have_selector('button#option2', visible: false)
      expect(page).to have_selector('div.test-question-wrapper', visible: false)
    end
  end

  context 'fourth stage' do
    before do
      iterate_stage(3)
    end

    it 'shows the correct image on the fourth stage', js: true do
      expect(page).to have_selector('img#room1', visible: false)
      expect(page).to have_selector('img#room2', visible: false)
      expect(page).to have_selector('img#room3', visible: false)
      expect(page).to have_selector('img#room4', visible: true)
      expect(page).to have_selector('img#room5', visible: false)
    end

    it 'does not show the questions, answers, or answer buttons on the fourth stage', js: true do
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      expect(page).to have_selector('button#option1', visible: false)
      expect(page).to have_selector('button#option2', visible: false)
      expect(page).to have_selector('div.test-question-wrapper', visible: false)
    end
  end

  context 'fifth stage' do
    before do
      iterate_stage(4)
    end

    it 'shows the correct image on the fifth stage', js: true do
      expect(page).to have_selector('img#room1', visible: false)
      expect(page).to have_selector('img#room2', visible: false)
      expect(page).to have_selector('img#room3', visible: false)
      expect(page).to have_selector('img#room4', visible: false)
      expect(page).to have_selector('img#room5', visible: true)
    end

    it 'shows the answer buttons and question on the fifth stage', js: true do
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      expect(page).to have_selector('button#option1', visible: true)
      expect(page).to have_selector('button#option2', visible: true)
      expect(page).to have_selector('div.test-question-wrapper', visible: true)
      expect(page).to have_content('Respond to the following question')
    end
  end

  context 'the user clicks the incorrect answer first' do
    it 'shows the corresponding answer text and allows the user to switch their answer', js: true do
      iterate_stage(4)
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      click_button('the basket')
      expect(page).to have_content("No, that's incorrect.")
      expect(page).to have_selector('#test-question-fail', visible: true)
      expect(page).to have_selector('#test-question-pass', visible: false)
      click_button('the box')
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: true)
      expect(page).to have_content("Yes, that's correct!")
    end
  end

  context 'the user clicks the correct answer first' do
    it 'shows the corresponding answer text and does not allow the user to switch from the correct answer', js: true do
      iterate_stage(4)
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: false)
      click_button('the box')
      expect(page).to have_content("Yes, that's correct!")
      expect(page).to have_selector('#test-question-fail', visible: false)
      expect(page).to have_selector('#test-question-pass', visible: true)
      expect(page).to have_button('the basket', disabled: true)
    end
  end
end
