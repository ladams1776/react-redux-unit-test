import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { categories } from "../data/fixtures";

const props = { categories };

describe("<App />", () => {
  const wrapper = shallow(<App {...props} />);

  it("renders the title", () => {
    expect(wrapper.find('h2').text()).toEqual('Jeopardy!');
  });

  it('creates the correct number of links', () => {
    expect(wrapper.find('Link').length).toEqual(categories.length);
  });

  it('titles the links correctly', () => {
    wrapper.find('Link h4').forEach((linkTitle, index) => {
      expect(linkTitle.text()).toEqual(categories[index].title);
    });
  });
});
