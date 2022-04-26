import React, { useState } from 'react';
import './PokeForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchPokemons, restorePokemons } from '../../../redux/PokeDuck';

const PokeForm = () => {

  const [pokemonSearch, setPokemonSearch] = useState("");

  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.filteredPokemons);
  const pokemonsTotal = useSelector((store) => store.pokemons);

  const handleChange = (e) => {
    setPokemonSearch(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(pokemonSearch.toLowerCase());
    
    const filteredPokemons = pokemons.filter(pokemon => {
      return (
        pokemon.name.toLowerCase().includes(pokemonSearch.toLowerCase()) || pokemon.id.toString().includes(pokemonSearch)
      );
    })
    dispatch(searchPokemons(filteredPokemons))
    setPokemonSearch("");
  }

  const clearSearch = (e) => {
    e.preventDefault();
    setPokemonSearch("");
    dispatch(restorePokemons());
  }

  return (
    <form className="pokeform" onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        placeholder="Search for a Pokemon: "
        className="pokeform-input"
        onChange={(e) => handleChange(e)}
        value={pokemonSearch}
      />
      <input
        type="submit"
        value="Search"
        className="pokeform-search"
      />
      <input
        type="button"
        value="Cancel Search"
        className="pokeform-clear"
        onClick={(e) => clearSearch(e)}
      />
      <p className="total">Total: {`(${pokemonsTotal.length})`}</p>
    </form>
  );
}

export default PokeForm;
