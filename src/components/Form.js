import React from 'react';
import Button from '@material-ui/core/Button';

const Form = (props) => (
  <form onSubmit={props.getPokemon} style={{}} >
    <input className="" type="text" name="pokemonName" />
    <Button className="">Search</Button>
  </form>
)

export default Form;
