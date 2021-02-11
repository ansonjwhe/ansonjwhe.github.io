import React from 'react'
import Avatar from '@material-ui/core/Avatar'   

export default function IntroPanel() {
    return (
        <div id="intro">
            <Avatar alt="Profile Photo" id="avatar" src='/images/self.jpg'/>
            <div id="intro-text">
                <h1>Hey! I'm Anson He</h1>
                <h2>I'm an 18-year-old undergraduate student studying
                    Computing and Financial Management at the University of Waterloo.</h2>
                <h2>Find out more about me below!</h2>
            </div>
        </div>
      )
}