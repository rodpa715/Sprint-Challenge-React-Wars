import React from 'react';
import "./StarWars.css";
import CharacterList from "./CharacterList"
import PaginationComponent from "./PaginationComponent"

export default function ListContainer(props) {
  const {charactersArray, next, prev} = props;
  return(
   <>
      <CharacterList charactersArray={charactersArray}/>
      <PaginationComponent next={next} prev={prev}/>
   </>
  )
}