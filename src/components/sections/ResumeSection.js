import React from 'react';
import Fade from 'react-reveal'
import '../../App.css';
import './ResumeSection.css';

export default function ResumeSection() {
  return (
    <div id='resume-container'>
      <Fade top>
        <h1>My Current Resume</h1>
      </Fade>
      <Fade bottom>
      <iframe
        title='current resume'
        src='https://drive.google.com/file/d/1Kj5OGoMfIXsr1FeRq8OkJgA4rbITFt_P/preview'
        frameborder='0' 
        allowfullscreen 
        allow='fullscreen'
      />
      </Fade>
    </div>
  );
}