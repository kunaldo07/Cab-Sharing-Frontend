import React from 'react';
import DetailsBlock from '../detailsBlock/DetailsBlock';
import "./details.css";

const Details = ({home, editing}) => {
  return (
    <div className="details">
        <div className="details-element">
            <DetailsBlock home={home} editing={editing}/>
        </div>
    </div>
  )
}

export default Details