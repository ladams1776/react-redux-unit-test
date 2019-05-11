import * as actions from './index';
import { stack, stacks} from '../data/fixtures';



describe.only('actions', () => {

  it('creates an action to set the main stack', () => {
    const expectedAction = {
      type: actions.SET_STACK,
      stack: {...stack}
    }

    expect(actions.setStack(stack)).toEqual(expectedAction);
  });
  
  it('creates an action to load a stack', () => {
    const expectedAction = {
      type: actions.LOAD_STACKS,
      stacks: {...stack}
    }

    expect(actions.loadStacks(stack)).toEqual(expectedAction);
  });

  it('creates an action to add a stack', () => {
    const expectedAction = {
      type: actions.ADD_STACK,
      stack: {...stack}
    };

    expect(actions.addStack(stack)).toEqual(expectedAction);
  });

});
