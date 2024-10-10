
import React from "react";
import PokeCard from "./pokecard";


function Pokedex(props){
    return (
      <div>
        {props.map((pr) => (
          <PokeCard
            id={pr.id}
            name={pr.name}
            type={pr.type}
            image={pr.image}
          />
        ))}
      </div>
    );
}


export default Pokedex; 