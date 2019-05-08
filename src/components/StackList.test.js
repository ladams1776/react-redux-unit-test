import React from "react";
import { connect } from "react-redux";
import { shallow } from "enzyme";
import { StackListFixture } from "../data/fixtures";
import { StackList } from "./StackList";

function setup() {
  const props = {
    stacks: StackListFixture
  }
  const wrapper = shallow(<StackList {...props}/>)

  return {
    wrapper,
    props,
  }
}



describe.only('<StacList/>', () => {
  const { props, wrapper } = setup();

  it('renders the correct number of cards with links', () => {
    expect(wrapper.find('Link h4').length).toEqual(2);
  });
  it('renders the stacks', () => {
    expect(wrapper.find('Link h4').at(0).text()).toEqual("test prompt");
    expect(wrapper.find('Link h4').at(1).text()).toEqual("test prompt2");
  });

});