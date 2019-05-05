import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = {
  note: {
    text: 'test note'
  }, 
  index: 1
};


describe('Note', () => {
  // must mount so we have access to more functions.
  let note = mount(<Note {...props} />);

  it('renders the note text', () => {
    // console.log(note.debug());
    expect(note.find('p').text()).toEqual(props.note.text);
  });
});