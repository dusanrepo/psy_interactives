# frozen_string_literal: true

RSpec.describe 'manipulated-measured', type: :feature do
  let!(:interactive_name) { 'manipulated-measured' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  before do
    visit "/interactives/#{interactive['slug']}/"
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has all prompts' do
    expect(page).to have_selector 'div.hair-color'
    expect(page).to have_selector 'div.cell-1'
    expect(page).to have_selector 'div.cell-2'
    expect(page).to have_selector 'div.task-1'
    expect(page).to have_selector 'div.task-2'
    expect(page).to have_selector 'div.photo-1'
    expect(page).to have_selector 'div.skin-conductance'
    expect(page).to have_selector 'div.brain-activity'
    expect(page).to have_selector 'div.photo-2'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button.measured'
    expect(page).to have_selector 'button.manipulated'
    expect(find('button#next').visible?).to be_truthy
    expect(find('button#previous').visible?).to be_truthy
    expect(find('button#reload').visible?).to be_truthy
  end

  context 'any random stage - measured', js: true do
    it 'shows a prompt', js: true do
      expect(page).to have_selector 'div.prompt'
    end

    it 'shows feedback when selected', js: true do
      find('button.measured').click
      expect(page).to have_selector 'div.feedback'
      expect(find('button#next').visible?).to be_truthy
    end
  end

  context 'any random stage - manipulated', js: true do
    it 'shows feedback when selected', js: true do
      click_button('Reset')
      find('button.manipulated').click
      expect(page).to have_selector 'div.feedback'
      expect(find('button#next').visible?).to be_truthy
    end
  end
end
