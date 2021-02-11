import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      <Avatar alt="Profile Photo" id="avatar" src='/images/self.jpg'/>
      <h1>Hey! I'm Anson He</h1>
      <p>I'm an 18-year-old undergraduate student studying Computing and
          Financial Management at the University of Waterloo.</p>
      <p>Thanks for stopping by!</p>

      
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