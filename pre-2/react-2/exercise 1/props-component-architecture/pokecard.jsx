import React from "react";

function PokeCard({ name, type, image }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img className="Pokecard-image" src={image} alt={name} />
      <p className="Pokecard-type">Type: {type}</p>
    </div>
  );
}


export default PokeCard;
