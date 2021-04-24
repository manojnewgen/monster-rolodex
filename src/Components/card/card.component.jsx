import React from "react";
import './card.style.css'

export const Card = (props) =>(
  <div className='card-container'>
   <img style={{ width: "180px", height: '180px' }} alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h2>{props.monster.name}</h2>
    <h2>{props.monster.email}</h2>
  </div>
);
