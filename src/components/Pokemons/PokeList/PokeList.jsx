import React, { useEffect } from "react";
import "./PokeList.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../redux/PokeDuck";
import PokeCard from "./PokeCard/PokeCard";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const PokeList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons);
  const loading = useSelector((store) => store.loadingList);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="pokelist">
      {loading ? (
        <Loader />
      ) : (
        pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
            <PokeCard
              img={pokemon.sprites.front_default}
              name={pokemon.name}
              number={pokemon.id}
              types={pokemon.types}
              id={pokemon.id}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default PokeList;
