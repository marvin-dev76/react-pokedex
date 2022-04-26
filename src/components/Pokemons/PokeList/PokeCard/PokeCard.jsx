import React from 'react';
import './PokeCard.css';
import { getColorByType } from '../../../../utils/getColorsbyType';
import { getId } from '../../../../utils/getId';
import { useEffect } from 'react';

const PokeCard = ({ name, number, types, id }) => {

  const {formatedNumber, pkmIndex} = getId(number, id);

  return (
    <div className="pokecard">
      <img
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pkmIndex}.png`}
        className="poke-img"
        alt="poke-img"
      />
      <div className="poke-info">
        <h3>{formatedNumber}</h3>
        <h2 className="poke-name">{name}</h2>
        <div className="poke-types">
          {
            types.map((type, index) => (
              <p
                className="type"
                key={index}
                style={{ backgroundColor: getColorByType(type.type.name) }}
              >
                {type.type.name}
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
