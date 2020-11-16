import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import HandmadeKitchen from './HandmadeKitchen'
import Customers from './Customers'
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Cards() {
  return (
    <div>
      <div className='kitchen-container'>
      <HandmadeKitchen />
      </div>
      <div className='customers-container'>
       <Customers />
      </div>
      <div className='gallery-container'>
        <h1>Customer Gallery</h1>
        <div className='cards-container'>
          <CardItem
            src='images/img-4.jpg'
            path='/gallery'
          />
          <CardItem
            src='images/img-5.jpg'
            path='/gallery'
          />
          <CardItem
            src='images/img-6.jpg'
            path='/gallery'
          />
          <CardItem
            src='images/img-7.jpg'
            path='/gallery'
          />
        </div>
      </div>
      <div className='btn2-container'>
        <Link to='/view-more'>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View More
        </Button>
        </Link>
      </div>
    </div>

  );
}

export default Cards;
