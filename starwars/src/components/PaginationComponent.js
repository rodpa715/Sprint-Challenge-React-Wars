import React from 'react';

export default function PaginationComponent(props) {
  const {prev, next} = props;
  return(
    <div className="pagination">
      <i onClick={prev}className="fas fa-arrow-circle-left"></i>
      <i onClick={next} className="fas fa-arrow-circle-right"></i>
    </div>
  )
}