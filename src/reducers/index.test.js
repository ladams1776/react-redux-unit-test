import { sinon } from "enzyme";
import {
  categories,
  category
} from "../data/fixtures";
import rootReducer from "./index";
import * as actions from "../actions";

describe("actions", () => {

  it("creates an action to set categories", () => {
    const expectedAction = {
      type: actions.SET_CATEGORIES,
      categories
    }

    expect(rootReducer({}, {})).toEqual({ categories: [], category: {} });
  });

  it("creates an action to pick a category", () => {
    const expectedAction = {
      type: actions.PICK_CATEGORY,
      category
    };

    expect(rootReducer({}, { type: actions.PICK_CATEGORY, category })).toEqual({
      categories: [],
      category
    });
  });
});
