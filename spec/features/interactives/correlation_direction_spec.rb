# frozen_string_literal: true

RSpec.describe 'correlation-direction', type: :feature do
  let!(:interactive_name) { 'correlation-direction' }
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
    expect(page).to have_selector 'img.step-0'
    expect(page).to have_selector 'img.step-1'
    expect(page).to have_selector 'img.step-2'
    expect(page).to have_selector 'img.step-3'
    expect(page).to have_selector 'img.step-4'
    expect(page).to have_selector 'img.step-5'
    expect(page).to have_selector 'img.step-6'
    expect(page).to have_selector 'img.step-7'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button.next'
    expect(page).to have_selector 'button.previous'
    expect(page).to have_selector 'button.reset'
  end

  context 'stage 0', js: true do
    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-0'
      expect(page).to have_content('This is a scatterplot of the relationship between perceived social class and generosity.')
    end
    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).not_to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 1', js: true do
    before do
      iterate_stage(1)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-1'
      expect(page).to have_content('each participant thought he or she ranked in social class, from least (1) to most (10) wealthy.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 2', js: true do
    before do
      iterate_stage(2)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-2'
      expect(page).to have_content('Generosity is represented by how often a participant attempted to help a stranger in a cooperative game, from least (1) to most (10) generous.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 3', js: true do
    before do
      iterate_stage(3)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-3'
      expect(page).to have_content('Each dot represents where a particular participant fell on both the y-axis and the x-axis.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 4', js: true do
    before do
      iterate_stage(4)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-4'
      expect(page).to have_content('Viewing a scatterplot can give you an indication of the pattern of results.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 5', js: true do
    before do
      iterate_stage(5)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-5'
      expect(page).to have_content('This scatterplot shows the relationship between alcohol dependence and marital aggression.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 6', js: true do
    before do
      iterate_stage(6)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-6'
      expect(page).to have_content('This scatterplot shows the relationship between height and generosity.')
    end

    it 'has the correct buttons' do
      expect(page).to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end

  context 'stage 7', js: true do
    before do
      iterate_stage(7)
    end

    it 'shows the correct content on load', js: true do
      expect(page).to have_selector 'img.step-7'
      expect(page).to have_content('Select each button below to see what correlations with different strengths and directions might look like on a scatterplot.')
    end

    it 'shows the activity buttons' do
      expect(page).to have_selector 'label#weak-negative'
      expect(page).to have_selector 'label#weak-positive'
      expect(page).to have_selector 'label#strong-none'
      expect(page).to have_selector 'label#strong-negative'
      expect(page).to have_selector 'label#strong-positive'
    end

    it 'has the correct buttons' do
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button.reset'
    end
  end
end
