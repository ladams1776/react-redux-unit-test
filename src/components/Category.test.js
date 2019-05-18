import React from "react";
import { mount } from "enzyme";
import { fakeServer } from "sinon";
import { Category } from "./Category";
import { category, clues } from "../data/fixtures";


const props = { category: category };

describe("<Category />", () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith(
      "GET",
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [200, { "Content-Type": "application/json" },
      JSON.stringify(clues)
    ]
    );
  });

  describe('when creating a new category', () => {
    let category;

    beforeEach(done => {
      category = mount(<Category {...props} />);
      server.respond();
      setTimeout(done);
    });

    it('test one to three', () => {
      console.log(category.debug());
    });
  });
});
