# frozen_string_literal: true

RSpec.describe 'causal-headlines', type: :feature do
  let!(:interactive_name) { 'causal-headlines' }
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

  it 'has all stages' do
    expect(page).to have_selector 'div#stage-1'
    expect(page).to have_selector 'div#stage-2'
    expect(page).to have_selector 'div#stage-3'
    expect(page).to have_selector 'div#stage-4'
  end

  it 'has the correct buttons' do
    expect(find('button#next').visible?).to be_truthy
    expect(find('button#previous').visible?).to be_truthy
    expect(find('button#reload').visible?).to be_truthy
  end

  context 'stage 1', js: true do
    it 'shows the correct content on load', js: true do
      expect(find('div#stage-1').visible?).to be_truthy
      expect(page).not_to have_selector 'div#stage-2'
      expect(page).not_to have_selector 'div#stage-3'
      expect(page).not_to have_selector 'div#stage-4'
    end

    it 'shows feedback when next is clicked', js: true do
      click_button('Next')
      expect(find(:css, '.feedback-1.panel-1').visible?).to be_truthy
    end

    it 'shows panel 2 content', js: true do
      iterate_stage(2)
      expect(find(:css, '.headline-1').visible?).to be_truthy
      expect(find(:css, '.study-1').visible?).to be_truthy
      expect(find(:css, '.question-1').visible?).to be_truthy
      expect(find(:css, '.answer-choices').visible?).to be_truthy
      expect(page).not_to have_selector 'button#next'
      find('button.yes').click
      expect(find('button#next').visible?).to be_truthy
    end
  end

  context 'stage 2', js: true do
    before do
      iterate_stage(2)
      find('button.no').click
      iterate_stage(1)
    end

    it 'shows the correct content on load', js: true do
      expect(page).not_to have_selector 'div#stage-1'
      expect(find('div#stage-2').visible?).to be_truthy
      expect(page).not_to have_selector 'div#stage-3'
      expect(page).not_to have_selector 'div#stage-4'
    end

    it 'shows feedback when next is clicked', js: true do
      click_button('Next')
      expect(find(:css, '.feedback-2.panel-1').visible?).to be_truthy
    end

    it 'shows panel 2 content', js: true do
      iterate_stage(2)
      expect(find(:css, '.headline-2').visible?).to be_truthy
      expect(find(:css, '.study-2').visible?).to be_truthy
      expect(find(:css, '.question-2').visible?).to be_truthy
      expect(find(:css, '.answer-choices').visible?).to be_truthy
      expect(page).not_to have_selector 'button#next'
      find('button.no').click
      expect(find('button#next').visible?).to be_truthy
    end
  end

  def set_stage3
    iterate_stage(2)
    find('button.no').click
    iterate_stage(3)
    find('button.no').click
    iterate_stage(1)
  end

  context 'stage 3', js: true do
    before do
      set_stage3
    end

    it 'shows the correct content', js: true do
      expect(page).not_to have_selector 'div#stage-1'
      expect(page).not_to have_selector 'div#stage-2'
      expect(find('div#stage-3').visible?).to be_truthy
      expect(page).not_to have_selector 'div#stage-4'
    end

    it 'shows feedback when next is clicked', js: true do
      click_button('Next')
      expect(find(:css, '.feedback-3.panel-1').visible?).to be_truthy
    end

    it 'shows panel 2 content', js: true do
      iterate_stage(2)
      expect(find(:css, '.headline-3').visible?).to be_truthy
      expect(find(:css, '.study-3').visible?).to be_truthy
      expect(find(:css, '.question-3').visible?).to be_truthy
      expect(find(:css, '.answer-choices').visible?).to be_truthy
      expect(page).not_to have_selector 'button#next'
      find('button.no').click
      expect(find('button#next').visible?).to be_truthy
    end
  end

  def set_stage4
    iterate_stage(2)
    find('button.no').click
    iterate_stage(3)
    find('button.no').click
    iterate_stage(3)
    find('button.no').click
    iterate_stage(1)
  end

  context 'stage 4', js: true do
    before do
      set_stage4
    end

    it 'shows the correct content', js: true do
      expect(page).not_to have_selector 'div#stage-1'
      expect(page).not_to have_selector 'div#stage-2'
      expect(page).not_to have_selector 'div#stage-3'
      expect(find('div#stage-4').visible?).to be_truthy
    end

    it 'shows feedback when next is clicked', js: true do
      click_button('Next')
      expect(find(:css, '.feedback-4.panel-1').visible?).to be_truthy
    end

    it 'shows panel 2 content', js: true do
      iterate_stage(2)
      expect(find(:css, '.headline-4').visible?).to be_truthy
      expect(find(:css, '.study-4').visible?).to be_truthy
      expect(find(:css, '.question-4').visible?).to be_truthy
      expect(find(:css, '.answer-choices').visible?).to be_truthy
      expect(page).not_to have_selector 'button#next'
      find('button.no').click
      expect(page).not_to have_selector 'button#next'
    end
  end
end
