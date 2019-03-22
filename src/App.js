// App controls where all box components are organized.
// App controls reponsiveness.
// App controlls grid size.
import React, { Component } from 'react';
import Box from './components/Box';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 5
    }
  }
  render() {
    return (
      <div className="grid">
        <Box bgColor="salmon" text="Cat"/>
        <Box bgColor="purple" text="Cat"/>
        <Box bgColor="green" text="Cat"/>
      </div>
    );
  }
}

export default App;
