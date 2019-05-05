import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import "./App.css";

const COOKIE_KEY = 'NOTES';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: "",
      notes: []
    };
  }

  componentDidMount() {
    const notes = read_cookie(COOKIE_KEY);

    this.setState({
      notes
    });
  }

  _handleClick = event => {
    const { notes, text } = this.state;        
    notes.push({text});
    this.setState({ notes });
    bake_cookie(COOKIE_KEY, this.state.notes);
  };

  _clear = event => {
    delete_cookie(COOKIE_KEY);
    const notes = [];
    this.setState({notes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Note to Self</h2>
          <Form inline>
            <FormControl
              onChange={event => this.setState({ text: event.target.value })}
            />
            <Button onClick={this._handleClick}>Submit</Button>
            <Button onClick={this._clear}>Clear Notes</Button>
          </Form>
          {
            (this.state.notes.map((note, index) => {
              return <Note key={index} index={index} note={note} />              
            }))
          }
        </header>
      </div>
    );
  }
}

export default App;
