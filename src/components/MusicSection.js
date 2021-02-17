import React from 'react';
import '../App.css';
import './MusicSection.css';
// import Footer from '../Footer';

function MusicSection() {
  return (
    <div id='music-container'>
      <h1>Musical Compositions</h1>
        <p>Below is one of my most recent musical compositions titled <a href="https://musescore.com/user/9899696/scores/6208985/s/2GjHVH" target="_blank" rel="noreferrer noopener">"Chromatic Fur Elise"</a>.
          You can check out the rest of my compositions and arrangements on my musescore profile: <a href="https://musescore.com/user/9899696" target="_blank" rel="noreferrer noopener">ansonjwhe</a>
        </p>
      <iframe 
        title="Chromatic Fur Elise"
        width="80%"
        height="775px" 
        src="https://musescore.com/user/9899696/scores/6208985/embed" 
        frameborder="0" 
        allowfullscreen 
        allow="autoplay; fullscreen"
      >
      </iframe>
    </div>
  );
}

export default MusicSection;