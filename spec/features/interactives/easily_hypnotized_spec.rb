# frozen_string_literal: true

RSpec.describe 'easily-hypnotized', type: :feature do
  let!(:interactive_name) { 'easily-hypnotized' }
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
    expect(page).to have_selector 'div#stage-5'
    expect(page).to have_selector 'div#stage-6'
    expect(page).to have_selector 'div#stage-7'
  end

  it 'has all stages pt2' do
    expect(page).to have_selector 'div#stage-8'
    expect(page).to have_selector 'div#stage-9'
    expect(page).to have_selector 'div#stage-10'
    expect(page).to have_selector 'div#stage-11'
    expect(page).to have_selector 'div#stage-12'
    expect(page).to have_selector 'div#stage-13'
    expect(page).to have_selector 'div#stage-14'
    expect(page).to have_selector 'div#stage-15'
    expect(page).to have_selector 'div#stage-16'
    expect(page).to have_selector 'div#stage-17'
  end

  it 'has all stages pt3' do
    expect(page).to have_selector 'div#stage-18'
    expect(page).to have_selector 'div#stage-19'
    expect(page).to have_selector 'div#stage-20'
    expect(page).to have_selector 'div#stage-21'
    expect(page).to have_selector 'div#stage-22'
    expect(page).to have_selector 'div#stage-23'
    expect(page).to have_selector 'div#stage-24'
    expect(page).to have_selector 'div#stage-25'
    expect(page).to have_selector 'div#stage-26'
  end

  it 'has all stages' do
    expect(page).to have_selector 'div#stage-27'
    expect(page).to have_selector 'div#stage-28'
    expect(page).to have_selector 'div#stage-29'
    expect(page).to have_selector 'div#stage-30'
    expect(page).to have_selector 'div#stage-31'
    expect(page).to have_selector 'div#stage-32'
    expect(page).to have_selector 'div#stage-33'
    expect(page).to have_selector 'div#stage-34'
    expect(page).to have_selector 'div#stage-35'
  end

  # it 'has all content' do
  # expect(page).to have_selector ''
  # end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#previous'
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
  end
end
