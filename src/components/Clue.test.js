import React from "react";
import { shallow } from "enzyme";
import Clue from "./Clue";
import { clue } from "../data/fixtures";

const props = { clue };

describe("<Clue />", () => {
  const clue = shallow(<Clue {...props} />);

  it("initial state should be reveal false", () => {
    expect(clue.state().reveal).toEqual(false);
  });

  it('should display the h4 value', () => {
    expect(clue.find('h4').text()).toEqual(props.clue.value);
  });

  it('should display the h5 question', () => {
    expect(clue.find('h5').at(0).text()).toEqual(props.clue.question);
  });

  it('should display the h5 answer', () => {
    expect(clue.find('h5').at(1).text()).toEqual(props.clue.answer);
  });
});
