import React from "react";

const PokeCard = (props) => {
  return (
    <div className="poke-card flex flex-col items-center justify-center gap-6">
      <img
        className="w-40 h-40"
        src={props.pokeimg}
        alt={`pokemon-image ${props.pokeimg}`}
      />
      <h2>{props.pokename}</h2>
    </div>
  );
};

PokeCard.propTypes = {};
export default PokeCard;
