# frozen_string_literal: true

RSpec.describe 'lights', type: :feature do
  let!(:interactive_name) { 'lights' }
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
    expect(page).to have_selector 'div#stage1'
    expect(page).to have_selector 'img#on1'
    expect(page).to have_selector 'img#on2'
    expect(page).to have_selector 'img#on3'
    expect(page).to have_selector 'img#on4'
    expect(page).to have_selector 'div#stage2'
    expect(page).to have_selector 'img#off1'
    expect(page).to have_selector 'img#off2'
    expect(page).to have_selector 'img#off3'
    expect(page).to have_selector 'img#off4'
  end

  it 'shows the correct images', js: true do
    expect(find('div#stage1').visible?).to be_truthy
    expect(page).not_to have_selector 'div#stage2'
  end

  it 'has the correct buttons' do
    expect(find('label.option1').visible?).to be_truthy
    expect(find('label.option2').visible?).to be_truthy
  end

  context 'on is selected', js: true do
    before do
      find('label.option2').click
      find('label.option1').click
    end

    it 'shows the correct images', js: true do
      expect(find('div#stage1').visible?).to be_truthy
      expect(page).not_to have_selector 'div#stage2'
    end
  end

  context 'off is selected', js: true do
    before do
      find('label.option2').click
    end

    it 'shows the correct images', js: true do
      expect(page).not_to have_selector 'div#stage1'
    end
  end
end
