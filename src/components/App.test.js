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
});
