import React from 'react'
import Fade from 'react-reveal'
import './Card.css'


export default function Card(props) {
  let img;
  if (props.header === 'Experiences') {
    img = <img id='card-img' src={props.imgsrc} alt={props.name + ' Image'} />
  } else if (props.header === 'Projects') {
    img =
    <div id='icon-container'>
      {props.devpost && <a href={props.devpost} target='_blank' rel='noopener noreferrer'> 
        <img class='icon-item' src='/images/devpost.png' alt='devpost' />
      </a>}
      <a href={props.github} target='_blank' rel='noopener noreferrer'>
        <img class='icon-item' src='/images/github.png' alt='github' />
      </a>
    </div>
  }


  return (
    <Fade bottom cascade>
    <div id='card-container'>
      <h3 id='card-name'>{props.name}</h3>
      {img}
      <p id='card-desc'>{props.desc}</p>
    </div>
    </Fade>
  )
}