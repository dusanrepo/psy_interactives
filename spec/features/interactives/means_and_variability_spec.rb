# frozen_string_literal: true

RSpec.describe 'means-and-variability', type: :feature do
  let!(:interactive_name) { 'means-and-variability' }
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
    expect(page).to have_selector 'p.start-text'
    expect(page).to have_selector 'p.four-text'
    expect(page).to have_selector 'p.one-text'
    expect(page).to have_selector 'p.nine-text'
  end

  it 'has all bars' do
    expect(page).to have_selector 'td#bar-1'
    expect(page).to have_selector 'td#bar-2'
    expect(page).to have_selector 'td#bar-3'
    expect(page).to have_selector 'td#bar-4'
    expect(page).to have_selector 'td#bar-5'
    expect(page).to have_selector 'td#bar-6'
    expect(page).to have_selector 'td#bar-7'
    expect(page).to have_selector 'td#bar-8'
    expect(page).to have_selector 'td#bar-9'
  end

  it 'has all x-axis values' do
    expect(page).to have_selector 'span.zero'
    expect(page).to have_selector 'span.one'
    expect(page).to have_selector 'span.two'
    expect(page).to have_selector 'span.three'
    expect(page).to have_selector 'span.four'
    expect(page).to have_selector 'span.five'
    expect(page).to have_selector 'span.six'
    expect(page).to have_selector 'span.seven'
    expect(page).to have_selector 'span.eight'
    expect(page).to have_selector 'span.nine'
  end
end
