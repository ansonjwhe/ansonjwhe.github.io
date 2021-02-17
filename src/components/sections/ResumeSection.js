import React from 'react';
import '../../App.css';
import './ResumeSection.css';
// import Footer from '../Footer';

export default function ResumeSection() {
  return (
    <div id='resume-container'>
      <h1>My Current Resume</h1>
      <iframe
        title='current resume'
        src='https://drive.google.com/file/d/1Kj5OGoMfIXsr1FeRq8OkJgA4rbITFt_P/preview'
        frameborder='0' 
        allowfullscreen 
        allow='fullscreen'
      >
      </iframe>
    </div>
  );
}