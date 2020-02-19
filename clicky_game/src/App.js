import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import characters from "./characters.json";
import Title from "./components/Title"
import NavBar from "./components/Navbar"


class App extends Component {
  
  state = {
    characters
  };

  userPick = []

  handleClick(e) {
    e.preventDefault();
    const clickValue = e.target.getAttribute("alt");
    console.log("You clicked on " + clickValue)
    // this.userPick.push(clickValue)
    // console.log(this.userPick)
  }

  // Function to shuffle the characters once clicked on
  shuffle = () => {
    const characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
       
    });
    this.setState( {characters} ); 
    console.log(this.state.characters)
  };


  render() {
    return (
      <>
        <NavBar />
        <Title />
        <div className='container wrapper'>
          <div className='row'  key = {this.state.characters.id}>
            {this.state.characters.map(character => (
              < CharacterCard
              key = {character.id}
              clickValue = {this.handleClick}
                shuffle = {this.shuffle}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
