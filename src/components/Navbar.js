import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide style={{position: 'fixed'}} appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <HideOnScroll {...props}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Anson He
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/experiences' className='nav-links' onClick={closeMobileMenu}>
                  Experiences
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                  Resume
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/music' className='nav-links' onClick={closeMobileMenu}>
                  Music
                </Link>
              </li>
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          </div>
        </nav>
      </HideOnScroll>
    </>
  );
}