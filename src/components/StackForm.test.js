import React from 'react';
import { shallow } from 'enzyme'
import { StackForm } from './StackForm'
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

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

  
});