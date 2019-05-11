import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

function setup() {
  const props = {
    card: {
      prompt: "mocking a prompted question",
      answer: "answer to the prompted question"
    }
  };

  const wrapper = shallow(<Card {...props} />);

  return {
    props,
    wrapper
  };
}

describe("<Card />", () => {
  const { wrapper, props } = setup();

  it('sets `reveal` to be `false`', () => {
    expect(wrapper.state().reveal).toBe(false);
  });

  it('renders the card prompt', () => {
    expect(wrapper.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });

  it('renders the card answer', () => {
    expect(wrapper.find('.card-answer h4').text()).toEqual(props.card.answer);
  });

  it('applies the `text-hidden` class to the card answer', () => {
    expect(wrapper.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
  });

  // describe('onClick', () => {
  //   it('should change className to `text-revealed`');
  // });
});
