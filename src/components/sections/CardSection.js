import React from 'react'
import {Flip, Zoom} from 'react-reveal';
import '../../App.css';
import './CardSection.css';
import CardSlider from '../CardSlider';

export default function CardSection(props) {
    return (
        <div className='container'>
            <Flip right cascade>
                <h1>{props.header}</h1>
            </Flip>
            {/* <Flip bottom> */}
                <CardSlider header={props.header} data={props.data}/>
            {/* </Flip> */}
        </div>
    )
}