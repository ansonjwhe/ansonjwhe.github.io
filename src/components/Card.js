

import './Card.css'


export default function Card(props) {
  return (
    <div id='card-container'>
    <h3 id='card-name'>{props.name}</h3>
    <img id='card-img' src={props.imgsrc} alt={props.name + ' Image'} />
    <p id='card-desc'>{props.desc}</p>
    {/* <a href={this.props.linktodev} target="_blank" rel="noopener noreferrer"> 
    <img src={require("../../images/Devpost.png")} alt="devpost" class="hover-item"/>
    </a>
    <a href={this.props.linktogit} target="_blank" rel="noopener noreferrer">
    <img src={require("../../images/github-logo.png")} alt="github" class = "hover-item"/>
    </a> */}
    </div>
  )
}