import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <p className='footer-subscription-heading'>
        MHK
        </p>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>SHOP</Link>
            <Link to='/'>PLAN MY KITCHEN</Link>
            <Link to='/'>ABOUT US</Link>
            <Link to='/'>GALLERY</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Service</h2>
            <Link to='/'>FAQ</Link>
            <Link to='/'>CONTACT</Link>
            <Link to='/'>HOW TO BUY</Link>
            <Link to='/'>DOWNLOADS</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Info</h2>
            <Link to='/'>DELIVERY</Link>
            <Link to='/'>TERMS</Link>
            <Link to='/'>PRIVACY</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Follow</h2>
            <div className='social-media-wrap'>
              <div className='social-icons'>
                <Link
                  className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i className='fab fa-twitter' />
                </Link>
                <Link
                  className='social-icon-link instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i className='fab fa-instagram' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-subscription'>
        <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development & Hosting by mtc.</p>
      </div>
    </div>
  );
}

export default Footer;
