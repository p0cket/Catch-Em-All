import React, { Component } from 'react';
import Form from './components/Form';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
//Content imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//Navbar imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
//checkbox import
import Checkbox from '@material-ui/core/Checkbox';

class App extends Component {
   state = {
     poke: {}
   }

  getAllPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokedex/2`);
    const data = await res.json();
    console.log(data);
    this.setState({ poke : data });
  }

  componentDidMount = () => {
    this.getAllPokemon();
  }

  getOnePokemon = () => {
    //do a fetch for a single pokemon and see the pokemon below it.
  }
  // <div>
  //   <h3>{pokemon.entry_number}</h3>
  //   <p>{pokemon.pokemon_species.name}</p>
  //
  // </div>

  render() {
    const {pokemon_entries} = this.state.poke;
    return (
      <MuiThemeProvider>
        <div className="App">
        <div>
          <AppBar position="sticky" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Easy Pokedex
              </Typography>
              <div style={{padding: 20}}>
                <InputBase
                  placeholder="Search…"
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Form getPokemon={this.getOnePokemon} />
        <h1>Catch Them All</h1>
        <h3>A utility to help catch all the pokemon</h3>
        {pokemon_entries && pokemon_entries.map((pokemon) =>
          {
            return (
              <Card>
                <CardContent>
                  <div>
                  <CardMedia
                      style={{height: 80, width: 80}}
                      image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                      title="A Pokemon"
                  />


                  <Typography gutterBottom variant="h5" component="h2">
                      {pokemon.entry_number}. {pokemon.pokemon_species.name}
                  <Checkbox/>
                  </Typography>
                  </div>

                  <Typography component="p">
                      Bulbasaur are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                  </Typography>
                  <Button size="small" color="primary">
                      Learn More
                  </Button>
                </CardContent>

                </Card>
              );
            })
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
