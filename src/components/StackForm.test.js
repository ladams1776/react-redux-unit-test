import React from 'react';
import { shallow } from 'enzyme'
import { StackForm } from './StackForm'

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';


function setup() {
  const wrapper = shallow(<StackForm />);
  return { wrapper };
}


describe('<StackForm />', () => {
  const { wrapper } = setup();

  it('should render link back to home', () => {
    expect(wrapper.find('Link h4').text()).toEqual('Home');
  });

  it('should render h4 with the text `Create a New Stack`', () => {
    expect(wrapper.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders a Form component', () => {
    expect(wrapper.find('Form').exists()).toBe(true);
  });

  it('renders a button to add a new card', () => {
    expect(wrapper.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit the form', () => {
    expect(wrapper.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
  });


  describe('and updating the title', () => {
    beforeEach(() => {
      wrapper.find('FormControl').simulate('change', {
        target: {
          value: changeTitle
        }
      });
    });

    it('updates the title in state', () => {
      expect(wrapper.state().title).toEqual(changeTitle);
    });
  });


  describe('when adding a new card', () => {
    beforeEach(() => {
      wrapper.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      wrapper.setState({ cards: [], title: '' });
    });

    it('adds a new card to the state', () => {
      expect(wrapper.state().cards.length).toEqual(1);
    });

    it('renders the prompt section', () => {
      expect(wrapper.find('label').at(1).props().children).toEqual('Prompt:');
    });

    it('renders the answer section', () => {
      expect(wrapper.find('label').at(2).props().children).toEqual('Answer:');
    });
  });


  describe('and updating the card prompt', () => {
    beforeEach(() => {
      wrapper.find('Button').at(0).simulate('click');
      wrapper.find('FormControl').at(1).simulate('change', { target: { value: changePrompt}});
    });

    it('updates the prompt in the state', () => {
      expect(wrapper.state().cards[0].prompt).toEqual(changePrompt);
    });  
  });

  describe('and updating the card answer', () => {
    beforeEach(() => {
      wrapper.find('Button').at(0).simulate('click');
      wrapper.find('FormControl').at(2).simulate('change', { target: { value: changeAnswer}});
    });

    it('updates the answer in the state', () => {      
      expect(wrapper.state().cards[0].answer).toEqual(changeAnswer);
    });
  });

});