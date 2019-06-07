import { sinon } from 'enzyme';
import { categories, category } from '../data/fixtures';
import { setCategories, SET_CATEGORIES, pickCategory, PICK_CATEGORY } from './index';

describe('index.js', () => {

  describe('setCategories', () => {
    let testingAction;

    beforeEach(() => {
      testingAction = setCategories(categories);
    });

    it('it should return correct type', () => {
      expect(testingAction.type).toEqual(SET_CATEGORIES);
    });

    it('it should return correct categories', () => {
      expect(JSON.stringify(testingAction.categories)).toEqual(JSON.stringify(categories));
    });
  });


  describe('pickCategory', () => {
    let testingAction;

    beforeEach(() => {
      testingAction = pickCategory(category);
    });

    it('it should return correct type', () => {
      expect(testingAction.type).toEqual(PICK_CATEGORY);
    });

    it('it should return with the correct category', () => {
      expect(testingAction.category).toEqual(category);
    });
    
  });
});