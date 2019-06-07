import { sinon } from 'enzyme';
import { categories as stubbingCategoriesData, category as stubbingCategoryData } from '../data/fixtures';
import { categories, category } from './index';
import { SET_CATEGORIES, PICK_CATEGORY } from '../actions';

describe('index.js', () => {
  describe('categories function', () => {
    let mockAction;

    beforeEach(() => {
      mockAction = {
        type: SET_CATEGORIES,
        categories: stubbingCategoriesData
      }
    });

    it('it should return correct categories', () => {
      const testingCategories = categories([], mockAction);
      expect(testingCategories).toEqual(stubbingCategoriesData);
    });
    //@todo: need to test just returning state due to lack of approved type
  });

  describe('category function', () => {
    let mockAction;

    beforeEach(() => {
      mockAction = {
        type: PICK_CATEGORY,
        category: stubbingCategoryData
      }
    });

    it('it should return correct category', () => {
      const testingCategory = category([], mockAction);
      expect(testingCategory).toEqual(stubbingCategoryData);
    });

    //@todo: need to test just returning state due to lack of approved type
  });
});