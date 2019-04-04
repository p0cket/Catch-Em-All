import React from 'react';

const Form = (props) => (
  <form onSubmit={props.getPokemon} style={{}} >
    <input className="" type="text" name="pokemonName" />
    <button className="">Search</button>
  </form>
)

export default Form;
