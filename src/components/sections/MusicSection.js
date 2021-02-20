import React from 'react';
import {Fade, Rotate} from 'react-reveal'
import '../../App.css';
import MusicSlider from '../MusicSlider';
import './MusicSection.css';

export default function MusicSection() {

  return (
    <Fade left cascade>
      <div id='music-container'>
          <h1>Musical Compositions</h1>
        <p>I love music! Whether it is listening to music while I work, 
          playing as a percussionist in my highschool band, improvising on my piano at home, 
          or composing my next musical piece—music is more than just a hobby to me. 
          It is how I relax, how I stay motivated, and how I express my creativity!
        </p>
        <p>
          You can find all my compositions and arrangments below or on my musescore profile: <a href='https://musescore.com/user/9899696' target='_blank' rel='noreferrer noopener'>ansonjwhe</a>
        </p>
        <MusicSlider />
      </div>
    </Fade>
  );
}