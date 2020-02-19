import React from 'react';
import CharacterCard from "./components/CharacterCard";
import './App.css';
import characters from "./characters.json";
import Title from "./components/Title"
import NavBar from "./components/Navbar"


class App extends React.Component {
  
  state = {
    characters,
    score: 0
  }


  handleClick(e) {
    e.preventDefault();
    const clickValue = e.target.getAttribute("alt");
    console.log("You clicked on " + clickValue);
    // const scoring = () => {
    //   const plus = this.setState({ score: this.state.score +1 })
    //   console.log(plus)
    // }    
  }

  scoring = () => {
    this.setState({ score: this.state.score +1 })
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
