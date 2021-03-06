import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Pokemons from './components/Pokemons/Pokemons';
import PokeSpecific from './components/Pokemons/PokeSpecific/PokeSpecific';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes, HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="background light">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route element={<Pokemons />} path="/" exact />
            <Route element={<PokeSpecific />} path="/pokemon/:name" exact />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
