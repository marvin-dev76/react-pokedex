import React from 'react';
import './Pokemons.css';
import Greeting from './Greeting/Greeting';
import PokeForm from './PokeForm/PokeForm';
import PokeList from './PokeList/PokeList';

const Pokemons = () => {
  return (
    <div className="container">
      <div className="pokemons">
        <Greeting />
        <PokeForm />
        <PokeList />
      </div>
    </div>
  );
}

export default Pokemons;
