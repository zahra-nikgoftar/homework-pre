import React from "react";

function PokeCard({ name, type, image }) {
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img className="Pokecard-image" src={image} alt={name} />
      <p className="Pokecard-type">Type: {type}</p>
      <hr />
    </div>
  );
}


export default PokeCard;
