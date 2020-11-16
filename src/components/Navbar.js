import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='navbar-logo'>
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
            </li>
            <li className='nav-item'>
              <Link
                to='/shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/plan-my-kitchen'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Plan My Kitchen
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                <p className='nav-header'>MHK</p>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to='/my-order'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                My Order
              </Link>
            </li>
          </ul>
          <Link to='my-order'>
            {button && <Button
              buttonStyle='btn--outline-header'>My Order</Button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
