import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  state = {
    poke: {}
  }

  getPokemon = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await res.json();
    console.log(data);
    this.setState({ poke : data });
    //this.setState({ poke : e.target.elements.pokemonName.value });

  }

  render() {
    const {sprites, title} = this.state.poke;
    return (
      <div className="App">
        <Form getPokemon={this.getPokemon} />
          Hello warld {sprites && <img src={sprites.front_default} alt={title} />}
      </div>
    );
  }
}

export default App;
