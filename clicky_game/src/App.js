import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import characters from "./characters.json";
import Title from "./components/Title"
import NavBar from "./components/Navbar"

class App extends Component {


  render() {
    return (
      <>
        <NavBar />
        <Title />
        <div className='container wrapper'>
          <div className='row'>
            {characters.map(character => (
              < CharacterCard
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
