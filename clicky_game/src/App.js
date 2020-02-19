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

  shuffle = () => {
    const characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
       
    });
    this.setState( {characters} ); 
    // console.log(characters)
  };


  render() {
  //  this.shuffle(characters)
    return (
      <>
        <NavBar />
        <Title />
        <div className='container wrapper'>
          <div className='row'>
            {this.state.characters.map(character => (
              < CharacterCard
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
