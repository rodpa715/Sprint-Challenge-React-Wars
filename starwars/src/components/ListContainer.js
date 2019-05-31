import React from 'react';
import "./StarWars.css";
import CharacterList from "./CharacterList"
import PaginationComponent from "./PaginationComponent"

export default function ListContainer(props) {
  const {charactersArray} = props;
  return(
   <>
      <CharacterList charactersArray={charactersArray}/>
      <PaginationComponent />
   </>
  )
}