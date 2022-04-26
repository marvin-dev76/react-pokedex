import React from 'react';
import { CgPokemon } from 'react-icons/cg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div>
          <Link to="/" className="navbar-title-container">
            <p className="navbar-title">Pokedex</p>
            <CgPokemon size={40} color={'var(--primary)'} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
