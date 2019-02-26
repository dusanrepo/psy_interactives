# frozen_string_literal: true

RSpec.describe 'ethical-principles', type: :feature do
  let!(:interactive_name) { 'ethical-principles' }
  let!(:interactive) do
    interactives = YAML.load_file('data/interactives.yml')
    interactives[interactive_name]
  end

  def go_to_stage(next_num)
    click_button('Begin review')
    next_num.times do
      find('button.yes').click
      click_button('Next')
    end
  end

  before do
    visit "/interactives/#{interactive['slug']}/index.html"
  end

  it 'has the correct title' do
    expect(page.has_title?("Interactives | #{interactive['title']}")).to be_truthy
  end

  it 'has all stages' do
    expect(page).to have_selector 'div#stage-0'
    expect(page).to have_selector 'div#stage-1'
    expect(page).to have_selector 'div#stage-2'
    expect(page).to have_selector 'div#stage-3'
  end

  it 'has the correct buttons' do
    expect(find('button#review').visible?).to be_truthy
    expect(find('button#reload').visible?).to be_truthy
  end

  context 'stage 1', js: true do
    before do
      click_button('Begin review')
    end

    it 'shows the correct content', js: true do
      expect(find('.study.study-1').visible?).to be_truthy
      expect(find('.question.question-1').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-1').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-2').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-2').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-3').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-3').visible?).to be_truthy
    end
  end

  context 'stage 2', js: true do
    before do
      go_to_stage(3)
    end

    it 'shows the correct content', js: true do
      expect(find('.study.study-2').visible?).to be_truthy
      expect(find('.question.question-4').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-4').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-5').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-5').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-6').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-6').visible?).to be_truthy
    end
  end

  context 'stage 3', js: true do
    before do
      go_to_stage(6)
    end

    it 'shows the correct content', js: true do
      expect(find('.study.study-3').visible?).to be_truthy
      expect(find('.question.question-7').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-7').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-8').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-8').visible?).to be_truthy
      click_button('Next')
      expect(find('.question.question-9').visible?).to be_truthy
      find('button.yes').click
      expect(find('.feedback.feedback-9').visible?).to be_truthy
    end
  end
end
