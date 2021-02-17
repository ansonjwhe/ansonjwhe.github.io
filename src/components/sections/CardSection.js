import React from 'react'
import '../../App.css';
import './CardSection.css';
import CardSlider from '../CardSlider';

export default function CardSection() {
    return (
        <div className='container'>
            <h1>Experiences</h1>
            <CardSlider />
        </div>
    )
}