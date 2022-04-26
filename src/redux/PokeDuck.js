import axios from "axios";

const initialState = {
  pokemons: [],
  pokemon: {},
  filteredPokemons: [],
  loadingList: true,
  loadingSpecific: true,
};

// types

const GET_POKEMONS = "@pokemons/get-pokemons";
const RESTORE_POKEMONS = "@pokemons/restore-pokemons";
const LOADING_DATA_LIST = "@pokemons/loading-data-list";
const LOADING_DATA_SPECIFIC = "@pokemons/loading-data-specific";
const GET_POKEMON = "@pokemons/get-pokemon";
const SEARCH_POKEMONS = "@pokemons/search-pokemons";

// reducer

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
        loadingList: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loadingSpecific: false,
      };
    case RESTORE_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
        loadingList: false
      }
    case LOADING_DATA_LIST:
      return {
        ...state,
        loadingList: true,
      };
    case LOADING_DATA_SPECIFIC:
      return {
        ...state,
        loadingSpecific: true,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

// actions

const getPokemons = () => async (dispatch, getState) => {
  dispatch({ type: LOADING_DATA_LIST });

  let initialPokemons = getState().pokemons;

  console.log(initialPokemons);

  if (initialPokemons.length === 0) {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
    );
    let { results } = response.data;

    const pokemons = await Promise.all(
      results.map(async (result) => {
        const response = await axios.get(result.url);
        return response.data;
      })
    );

    dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
    return;
  }
  dispatch({
    type: GET_POKEMONS,
    payload: initialPokemons,
  });

};

const getPokemon = (pokemonName) => async (dispatch) => {
  dispatch({ type: LOADING_DATA_SPECIFIC });

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const extra = await axios.get(response.data.species.url);
  const { data } = extra;

  dispatch({
    type: GET_POKEMON,
    payload: { ...response.data, extra: data },
  });
};

const restorePokemons = () => async (dispatch) => {

  dispatch({ type: LOADING_DATA_LIST });

  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  let { results } = response.data;

  const pokemons = await Promise.all(
    results.map(async (result) => {
      const response = await axios.get(result.url);
      return response.data;
    })
  );

  dispatch({
    type: RESTORE_POKEMONS,
    payload: pokemons,
  });
}

const searchPokemons = (pokemons) => {
  return {
    type: SEARCH_POKEMONS,
    payload: pokemons,
  };
};

export { pokemonReducer, getPokemons, getPokemon, searchPokemons, restorePokemons };
