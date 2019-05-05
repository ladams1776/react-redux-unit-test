import React from "react";
import { connect } from "react-redux";
import { shallow } from "enzyme";
import { stack } from "../data/fixtures";
import { Stack } from "./Stack";

function setup() {
  const props = {
    stack: stack
  }; 

  const wrapper = shallow(<Stack {...props} />);

  return {
    props,
    wrapper
  };
}

describe("<Stack />", () => {
  const { wrapper, props } = setup();

  it("renders the Link home", () => {
    expect(wrapper.find("Link h4").text()).toEqual("Home");
  });

  it("renders the title", () => {
    expect(wrapper.find("h3").text()).toEqual(props.stack.title);
  });

  it("renders the correct number of cards", () => {
    expect(wrapper.find("Card").length).toEqual(props.stack.cards.length);
  });
});
