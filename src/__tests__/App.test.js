import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from '../App';

const SUBMIT_BUTTON_POSITION = 0;
const CLEAR_BUTTON_POSITION = 1;

describe('App', () => {
  let app = mount(<App />);

describe('render the App component', () => {
  it('renders the App title', () => {
    // console.log(app.debug());
    expect(app.find('h2').text()).toEqual('Note to Self');
  });
  
  it('renders the clear button', () => {
    expect(app.find('.btn').at(CLEAR_BUTTON_POSITION).text()).toEqual('Clear Notes');
  });

  it('renders a submit button', () => {
    expect(app.find('.btn').at(SUBMIT_BUTTON_POSITION).text()).toEqual('Submit');
  });
});
  

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });
    
    it('renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });    
  });

  describe('when creating a note', () => {
    let expectedNoteText = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: {
          value: expectedNoteText
        }
      });
    });

    it('updates the text in state', () => {
      expect(app.state().text).toEqual(expectedNoteText);
    });

    describe('and submitting the new note', () => {
      beforeEach(() => {
        app.find('.btn').at(SUBMIT_BUTTON_POSITION).simulate('click');
      });

      afterEach(() => {
        app.find('.btn').at(CLEAR_BUTTON_POSITION).simulate('click');
      });
  
      it('updates the state with the new note', () => {
        expect(app.state().notes[0].text).toEqual(expectedNoteText);
      });

      describe('and remounting the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          expect(app2.state().notes).toEqual([{text: expectedNoteText}]);
        });
      });
    });

    describe('and clicking the clear button', () => {
      beforeEach(() => {
        app.find('.btn').at(CLEAR_BUTTON_POSITION).simulate('click');        
      });

      it('clears the notes in state', () => {
        expect(app.state().notes).toEqual([]);
      });
    });
  });
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); 
