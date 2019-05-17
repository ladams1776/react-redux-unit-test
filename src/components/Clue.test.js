import React from "react";
import { shallow } from "enzyme";
import Clue from "./Clue";
import { clue } from "../data/fixtures";

const props = { clue };

describe("<Clue />", () => {
  let clue = shallow(<Clue {...props} />);

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

  it('should have text-hidden for a class name', () => {
    expect(clue.find('h5').at(1).hasClass('text-hidden')).toEqual(true);
  });

  describe('when rendering a clue with no value', () => {
    beforeEach(() => {
      props.clue.value = undefined;
      clue = shallow(<Clue {...props} />)
    });

    it('displays the value as `unknown`', () => {
      expect(clue.find('h4').text()).toEqual('unknown')
    });
  });

  describe("When clicked on", () => {
    beforeEach(() => {
      clue.simulate('click');
    });

    it('should change class name to text-revealed', () => {
      expect(clue.find('h5').at(1).hasClass('text-revealed')).toEqual(true);
    });
  });
});
