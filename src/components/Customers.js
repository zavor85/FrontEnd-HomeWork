import React from 'react';
import { Button } from './Button';
import './Button.css';
import './Customers.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Customers() {
  return (
    <div classname="carousel-wrapper">
      <Carousel
        className='carousel'
        showStatus={false}
        showIndicators={false}
      >
        <div className='customers'>
          <div className='customers-container-text'>
            <h6>What Our Customers Say</h6>
            <h1>Over 35 years experience designing handmade kitchens</h1>
            <h5>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</h5>
            <p>Jane, Dundee</p>
          </div>
          <div className='btn1-container'>
          <Link to='/frequenly-asked-questions'>
              <Button
                buttonStyle='btn--outline'
                buttonSize='btn--xlarge'
              >
                Frequently asked questions
            </Button>
            </Link>
          </div>
        </div>

        <div className='customers'>
          <div className='customers-container-text'>
            <h6>What Our Customers Say</h6>
            <h1>Over 35 years experience designing handmade kitchens</h1>
            <h5>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</h5>
            <p>Jane, Dundee</p>
          </div>
          <div className='btn1-container'>
            <Link to='/frequenly-asked-questions'>
              <Button
                buttonStyle='btn--outline'
                buttonSize='btn--xlarge'
              >
                Frequently asked questions
            </Button>
            </Link>
          </div>
        </div>

        <div className='customers'>
          <div className='customers-container-text'>
            <h6>What Our Customers Say</h6>
            <h1>Over 35 years experience designing handmade kitchens</h1>
            <h5>Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</h5>
            <p>Jane, Dundee</p>
          </div>
          <div className='btn1-container'>
          <Link to='/frequenly-asked-questions'>
              <Button
                buttonStyle='btn--outline'
                buttonSize='btn--xlarge'
              >
                Frequently asked questions
            </Button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Customers;