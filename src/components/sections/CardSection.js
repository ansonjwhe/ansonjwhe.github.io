import React from 'react'
import '../../App.css';
import './CardSection.css';
import CardSlider from '../CardSlider';

export default function CardSection(props) {
    return (
        <div className='container'>
            <h1>{props.header}</h1>
            <CardSlider />
        </div>
    )
}