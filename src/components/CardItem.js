import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
      <div>
        <Link className='cards-item' to={props.path}>
          <img
            className='cards-item-img'
            alt='Kitchen'
            src={props.src}
          />
        </Link>
      </div>
  );
}

export default CardItem;
