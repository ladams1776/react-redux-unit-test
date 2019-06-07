import { sinon } from "enzyme";
import {
  categories as stubbingCategoriesData,
  category as stubbingCategoryData
} from "../data/fixtures";
import rootReducer from "./index";
import * as actions from "../actions";

describe("root reducer", () => {
  it("returns the initial state", () => {
    expect(rootReducer({}, {})).toEqual({ categories: [], category: {} });
  });

  it("sets categories now", () => {
    expect(rootReducer({}, { type: actions.SET_CATEGORIES, categories: stubbingCategoriesData })).toEqual({
      categories: stubbingCategoriesData,
      category: {}
    });
  });
});
