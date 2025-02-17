// import React from 'react'

import { useState } from "react";

const Tour = ({name, id, image, price, info, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  console.log(info.substring (0,5));
  
  return (
    <article className= 'single-tour'>
      <img src={image} alt={name} className='img'/>   
      <span className='tour-price'>${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info :`${info.substring(0,200)}...`} <button type="button" className="info-btn" onClick={()=> setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Show More'}
          </button></p>
        <button type='button' className='btn btn-block delete-btn' onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
      </article>
      );
};

export default Tour