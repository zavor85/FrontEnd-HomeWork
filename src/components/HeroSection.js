import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className='carousel'
        showStatus={false}
        showArrows={false}
      >
        <div className='hero-container'>
          <p>Design and order your new kitchen online today</p>
          <h2>Bespoke & made to measure handmade kitchen design</h2>
          <div className='hero-btns'>
            <Link to='/my-order'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
        <div className='hero-container'>
          <p>Design and order your new kitchen online today</p>
          <h2>Bespoke & made to measure handmade kitchen design</h2>
          <div className='hero-btns'>
            <Link to='/my-order'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
        <div className='hero-container'>
          <p>Design and order your new kitchen online today</p>
          <h2>Bespoke & made to measure handmade kitchen design</h2>
          <div className='hero-btns'>
            <Link to='/my-order'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
