import React from "react";
import helper from "./helperFunctions"

export default function CharacterList(props) {
  const {charactersArray} = props;
  return(
    <div className="character-list">
      {
        charactersArray.map( character => {
          return(
            <div className="character" key={`SWCHAR-${helper.removeSpace(character.name, " ", "-")}-${character.birth_year}`}>

              <section className="info key">
                <h2>Name: </h2>
                <h2>Birth Year:</h2>
                <h2>Gender: </h2>
                <h2>Height: </h2>
              </section>

              <section className="info value">
                <h2>{character.name}</h2>
                <h2>{character.birth_year}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.height / 100 }M</h2>
              </section>
              
            </div>
          )
        })
      }
    </div>
  );
}