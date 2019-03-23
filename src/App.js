// App controls where all box components are organized.
// App controls reponsiveness.
// App controlls grid size.
import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
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
  }
  componentDidMount() {
    this.randomizeAnimals();
  }
  randomizeAnimals() {
    const animals = [];
    for(let i = 0; i < this.state.gridSize; i++) {
      const randomNum = this.generateRandomNum(0, this.state.gridSize);
      animals.push(
        AnimalListData[randomNum]
      );
      this.setState({
        animals: animals
      });
    }
  }
  generateRandomNum(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
  generateRandomColor() {
    const randomNum = Math.floor((Math.random() * 4) + 0);
    return Colors[randomNum];
  }
  render() {
    return (
      <div>
        <Header />
        <Grid 
          animals={this.state.animals} 
          size={this.state.gridSize} 
          bgColor={this.generateRandomColor}
        />
      </div>
    );
  }
}

export default App;
