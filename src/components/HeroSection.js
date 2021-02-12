import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      <Avatar alt='Profile Photo' id='avatar' src='/images/self.jpg'/>
      <h1>Hey! I'm Anson He</h1>
      <p>I'm an 18-year-old undergraduate student studying Computing and Financial Management at the University of Waterloo.</p>
      <p>Thanks for stopping by!</p>

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
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;