# frozen_string_literal: true

RSpec.describe 'prejudice-in-the-brain', type: :feature do
  let!(:interactive_name) { 'prejudice-in-the-brain' }
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

  it 'has all images' do
    expect(page).to have_selector '.image-1'
    expect(page).to have_selector '.image-2'
    expect(page).to have_selector '.image-3'
    expect(page).to have_selector '.image-4'
  end

  it 'has all the text content' do
    expect(page).to have_selector '.instructions'
    expect(page).to have_selector '.feedback-1'
    expect(page).to have_selector '.feedback-2'
    expect(page).to have_selector '.feedback-3'
    expect(page).to have_selector '.end-of-stage-instructions'
  end

  it 'has all the feedback triggers' do
    expect(page).to have_selector 'div#trigger-1'
    expect(page).to have_selector 'div#trigger-2'
    expect(page).to have_selector 'div#trigger-3'
  end

  it 'has the correct buttons' do
    expect(page).to have_selector 'button#next'
    expect(page).to have_selector 'button#reset'
    expect(page).to have_selector 'button#previous'
  end

  it 'shows the correct content on load' do
    expect(page).to have_content('In this interactive, you will see what happens in the brain')
  end

  context 'stage 1', js: true do
    before do
      click_button('Next')
      sleep 4
    end

    it 'shows the correct content', js: true do
      expect(page).to have_content('Now select the amygdala')
      expect(page).not_to have_selector 'button#next'
      expect(page).to have_selector 'button#reset'
      expect(page).to have_selector 'button#previous'
    end

    it 'shows the correct feedback', js: true do
      find('div#trigger-1').click
      # expect(page).not_to have_selector 'button#previous'
      expect(page).to have_content('If someone has implicit prejudice toward African Americans, the amygdala')
      sleep 4
      expect(page).to have_content('Now select the anterior cingulate cortex')
      expect(page).to have_selector 'button#previous'
    end
  end

  def stage_2
    click_button('Next')
    sleep 4
    find('div#trigger-1').click
    sleep 4
  end

  context 'stage 2', js: true do
    before do
      stage_2
    end

    it 'shows the correct content', js: true do
      expect(page).to have_selector 'button#previous'
    end

    it 'shows the correct feedback', js: true do
      sleep 6
      find('div#trigger-2').trigger('click')
      # expect(page).not_to have_selector 'button#previous'
      expect(page).to have_content('If this person intends to be egalitarian, the anterior cingulate cortex will be activated')
      sleep 4
      expect(page).to have_content('Now select the prefrontal cortex')
      expect(page).to have_selector 'button#previous'
    end
  end

  def stage_3
    click_button('Next')
    sleep 4
    find('div#trigger-1').click
    sleep 6
    find('div#trigger-2').trigger('click')
    sleep 4
  end

  context 'stage 3', js: true do
    before do
      stage_3
    end

    it 'shows the correct content', js: true do
      expect(page).to have_selector 'button#previous'
    end

    it 'shows the correct feedback', js: true do
      sleep 6
      find('div#trigger-3').trigger('click')
      # expect(page).not_to have_selector 'button#previous'
      expect(page).to have_content('Finally, the prefrontal cortex will control')
      sleep 4
      expect(page).to have_selector 'button#previous'
    end
  end
end
