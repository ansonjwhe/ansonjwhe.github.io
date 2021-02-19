import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import Fade from 'react-reveal'

import '../../App.css';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <Fade top>
      <Avatar alt='Profile Photo' id='avatar' src='/images/self.jpg'/>
      </Fade>
      <Fade left>
      <h1>Hey! I'm Anson He</h1>
      </Fade>
      <Fade right>
      <p>I'm an aspiring developer studying Computing and Financial Management at the University of Waterloo.</p>
      </Fade>
      <Fade bottom>
      <>
        <div class='social-icons'>
          <a
            class='social-icon-link email' 
            href='mailto:ansonjwhe@gmail.com' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Email'
          >
            <i class='far fa-envelope' />
          </a>
          <a
            class='social-icon-link linkedin' 
            href='https://www.linkedin.com/in/ansonjwhe/' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </a>
          <a
            class='social-icon-link github' 
            href='https://github.com/ansonjwhe' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
          >
            <i class='fab fa-github' />
          </a>
          <a
            class='social-icon-link instagram' 
            href='https://www.instagram.com/ansonjwhe/' 
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </a>
        </div>
      </>
      </Fade>
    </div>
  );
}