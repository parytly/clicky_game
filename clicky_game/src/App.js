import React from 'react';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import characters from "./characters.json";
import Title from "./components/Title"
import NavBar from "./components/Navbar"


class App extends React.Component {
  
  state = {
    characters,
    score: 0,
    userSelect: []
  }

  handleClick = (e) => {
    e.preventDefault();
    const clickValue = e.target.name;
    console.log("You clicked on " + clickValue); 
    
    this.setState({userSelect: [...this.state.userSelect, clickValue]})
    console.log(this.state.userSelect)
  }

  // Keep the score
  scoring = () => {
    this.setState({ score: this.state.score +1 });
  }
  
  // Function to shuffle the characters once clicked on
  shuffle = () => {
    const characters = this.state.characters.sort(function(a, b) {
      return 0.5 - Math.random()
       
    });
    console.log(characters)
    this.setState( {characters} ); 
    // console.log(this.state.characters)
  };


  render() {
    return (
      <>
        <NavBar 
        score = {this.state.score}/>
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
                score = {this.scoring}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
