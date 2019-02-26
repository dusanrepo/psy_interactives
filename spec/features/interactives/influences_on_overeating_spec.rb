# frozen_string_literal: true

RSpec.describe 'influences-on-overeating', type: :feature do
  let!(:interactive_name) { 'influences-on-overeating' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  def iterate_stage(num_stage)
    num_stage.times do
      find('button.next', visible: false).trigger('click')
    end
  end

  before do
    visit "/interactives/#{interactive['slug']}/index.html"
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has all stages' do
    expect(page).to have_selector 'div.stage-0'
    expect(page).to have_selector 'div.stage-1'
    expect(page).to have_selector 'div.stage-2'
  end

  it 'has all sliders' do
    expect(page).to have_selector 'div.slider-0'
    expect(page).to have_selector 'div.slider-1'
    expect(page).to have_selector 'div.slider-2'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button.next'
    expect(page).to have_selector 'button.previous'
    expect(page).to have_selector 'button#reload'
  end

  context 'first plate', js: true do
    it 'shows instructions', js: true do
      expect(page).to have_content('Choose the portion of pasta you would like to eat')
    end

    it 'shows the correct slider', js: true do
      expect(page).to have_selector 'div.slider-0'
      expect(page).not_to have_selector 'div.slider-1'
      expect(page).not_to have_selector 'div.slider-2'
    end

    it 'shows correct buttons', js: true do
      expect(page).not_to have_selector 'button.next'
      expect(page).not_to have_selector 'button.previous'
      expect(page).to have_selector 'button#reload'
    end
  end

  context 'second plate', js: true do
    before do
      iterate_stage(1)
    end

    it 'shows instructions', js: true do
      expect(page).to have_content('Once again, choose the portion of pasta you would like to eat')
    end

    it 'shows the correct slider', js: true do
      expect(page).not_to have_selector 'div.slider-0'
      expect(page).to have_selector 'div.slider-1'
      expect(page).not_to have_selector 'div.slider-2'
    end

    it 'shows correct buttons', js: true do
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button#reload'
    end
  end

  context 'third plate', js: true do
    before do
      iterate_stage(2)
    end

    it 'shows instructions', js: true do
      expect(page).to have_content('Again, choose the portion of pasta you would like to eat')
    end

    it 'shows the correct slider', js: true do
      expect(page).not_to have_selector 'div.slider-0'
      expect(page).not_to have_selector 'div.slider-1'
      expect(page).to have_selector 'div.slider-2'
    end

    it 'shows correct buttons', js: true do
      expect(page).not_to have_selector 'button.next'
      expect(page).to have_selector 'button.previous'
      expect(page).to have_selector 'button#reload'
    end
  end
end
