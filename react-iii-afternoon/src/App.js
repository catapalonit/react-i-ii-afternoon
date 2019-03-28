import React, { Component } from 'react';
import './App.css';
import data from './data.js'

class App extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      id: 1,
      characters: data
    }
    this.updateId=this.updateId.bind(this);
    // this.characters=this.characters.bind(this);
  }

  updateId(val){
    this.setState({ id : val })
  }

  async handleClickIncrease() {
    if (this.state.id >= data.length){
      await this.setState({ 
        id : 0
      })
    }
    this.setState({
      id: this.state.id + 1
    })
  }
  async handleClickDecrease() {
    if (this.state.id <= 1){
      await this.setState({
        id : 26
      })
    }
    this.setState({
    id: this.state.id - 1
    })
  }


  render() {
    var displayCharacters = this.state.characters.map(element=>{
      if (element.id === this.state.id){
      return(
          <div>
      <h1>{element.name.first} {element.name.last}</h1>
      <h2>From: {element.city}, {element.country}</h2>
      <h2>Job Title: {element.title}</h2>
      <h2>Employer: {element.employer}</h2>
      <br></br>
      <h2>Favorite Movies:</h2>
        <ol>1. {element.favoriteMovies[0]}</ol>
        <ol>2. {element.favoriteMovies[1]}</ol>
        <ol>3. {element.favoriteMovies[2]}</ol>
          </div>
      )
      }
    })
    return (
      <div className="App">
        <header className="header">
          <p>Home</p>
        </header>
        <body className="background">
          <div className="main">
          <div className="pageCounter">{this.state.id}/{data.length} </div>
          {displayCharacters}
          </div>
          <div className="buttons">
          <button className= "previous" onClick = {() => {this.handleClickDecrease()}}> {'<'} Previous</button>
          <button className= "next" onClick = {() => {this.handleClickIncrease()}}>Next {'>'}</button>
          </div>
          <div className="centerButtons"> 
          <button className= "edit" onClick = {() => {}}> Edit</button>
          <button className= "delete" onClick = {() => {}}> Delete</button>
          <button className= "new" onClick = {() => {}}> New</button>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
