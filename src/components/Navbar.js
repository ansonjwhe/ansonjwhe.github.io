import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
    <Slide style={{position: 'fixed'}} appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <HideOnScroll {...props}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              ansonjwhe
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <HashLink smooth to='/#' className='nav-links' onClick={closeMobileMenu}>
                  About
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink smooth to='/#experiences' className='nav-links' onClick={closeMobileMenu}>
                  Experiences
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink smooth to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink smooth to='/resume#' className='nav-links' onClick={closeMobileMenu}>
                  Resume
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink smooth to='/music#' className='nav-links' onClick={closeMobileMenu}>
                  Music
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </HideOnScroll>
    </>
  );
}