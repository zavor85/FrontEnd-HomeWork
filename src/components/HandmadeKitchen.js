import React from 'react';
import { Button } from './Button';
import './Button.css';
import './HandmadeKitchen.css'
import { Link } from 'react-router-dom';


function HandmadeKitchen() {
  return (
    <div className='handmade-kitchen'>
      <div className='handmade-kitchen-img-container'>
        <img
          className='handmade-kitchen-img'
          src='images/img-2.jpg'
          alt='handmade'></img>
      </div>
      <div className='handmade-kitchen-text-container'>
        <div className='handmade-kitchen-text'>
          <h6>Quality Craftmanship from build to delivery</h6>
          <h1>Discover the beauty of a handmade kitchen</h1>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</h5>
        </div>
        <div className='btn-container'>
          <Link to='/about-us'>
          <Button
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >About Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HandmadeKitchen;