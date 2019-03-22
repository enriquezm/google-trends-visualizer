// App controls where all box components are organized.
// App controls reponsiveness.
// App controlls grid size.
import React, { Component } from 'react';
import Box from './components/Box';
import logo from './logo.svg';
import './App.css';
import AnimalListData from './animal_names.json';
import Colors from './colors.json';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 25, //default requirement
      animals: []
    }
    this.createZoo = this.createZoo.bind(this);
  }
  componentDidMount() {
    this.createZoo();
  }
  createZoo(){
    // Creates a concatenated string of animal box components based on grid size
    const animalArray = [];
    for(let i = 0; i < this.state.gridSize; i++) {
      const animalNumber = Math.floor((Math.random() * this.state.gridSize) + 1); // number between 1 and gridSize (not inclusive)
      const colorNumber = Math.floor((Math.random() * 4) + 0);
      animalArray.push(
        <Box bgColor={Colors[colorNumber]} text={AnimalListData[animalNumber]}/>
      );
    }
    console.log(animalArray);
    this.setState({
      animals: animalArray
    });
  }
    
  render() {
    return (
      <div className="grid">
        {
          this.state.animals.map((animal) => animal)
        }
      </div>
    );
  }
}

export default App;
