import React from 'react';

export default function PaginationComponent(props) {
  const {charactersArray} = props;
  return(
    <div className="pagination">
      <i className="fas fa-arrow-circle-left"></i>
      <i className="fas fa-arrow-circle-right"></i>
    </div>
  )
}