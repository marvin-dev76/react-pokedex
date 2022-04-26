import React from "react";
import "./PokeSpecific.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../../redux/PokeDuck";
import { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsShieldShaded } from "react-icons/bs";
import Loader from "../../Loader/Loader";
import { getColorByType } from "../../../utils/getColorsbyType";
import { getId } from "../../../utils/getId";

const PokeSpecific = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loadingSpecific);

  useEffect(() => {
    dispatch(getPokemon(name));
  }, [dispatch, name]);

  const pokemon = useSelector((store) => store.pokemon);
  const { formatedNumber, pkmIndex } = getId(pokemon.id, pokemon.id);

  console.log(pokemon);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <BsArrowLeftShort size={45} color={"var(--fg)"} />
      </div>
      <div className="poke-specific">
        <div className="poke-specific-header">
          <h1 className="poke-specific-name">
            {formatedNumber} {pokemon.name}
          </h1>
          <img
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pkmIndex}.png`}
            alt="pkm-img"
            className="poke-specific-img"
          />
          <div className="poke-specific-types">
            {pokemon.types.map((type, index) => (
              <p
                className="poke-specific-type"
                key={index}
                style={{ backgroundColor: getColorByType(type.type.name) }}
              >
                {type.type.name}
              </p>
            ))}
          </div>
          <div className="poke-specific-desc">
            "{pokemon.extra.flavor_text_entries[1].flavor_text.replace('\f', ' ')}"
          </div>
        </div>
        <div className="poke-specific-info">
          <div className="poke-specific-abilities-stats">
            <h2 style={{ fontWeight: 500 }}>Abilities</h2>
            {pokemon.abilities.map((item) => (
              <div
                key={item.ability.name}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <BsShieldShaded color="var(--primary)" size={24} />
                <p style={{ textTransform: 'capitalize' }}>{item.ability.name}</p>
              </div>
            ))}
            <h2 style={{ fontWeight: 500 }}>Stadistics (Base)</h2>
            {
              pokemon.stats.map(stat => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ textTransform: 'capitalize' }}>{stat.stat.name}</p>
                  <p style={{ color: '#999999' }}>{stat.base_stat} Points</p>
                  <div className="poke-specific-stat-bar-bg">
                    <p className="poke-specific-stat-bar" style={{ width: `${stat.base_stat}px` }}></p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeSpecific;
