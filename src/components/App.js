import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="calc-container" className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
