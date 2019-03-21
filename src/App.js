// App controls where all box components are organized.
// App controls reponsiveness.
// App controlls grid size.
import React, { Component } from 'react';
import Box from './components/Box';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Box />
      </div>
    );
  }
}

export default App;
