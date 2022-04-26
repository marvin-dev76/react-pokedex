import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { pokemonReducer } from './PokeDuck';

const store = createStore(pokemonReducer, applyMiddleware(thunk));

export { store };
