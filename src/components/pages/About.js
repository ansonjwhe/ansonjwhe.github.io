import React from 'react';
import '../../App.css';
import HeroSection from '../sections/HeroSection';
import CardSection from '../sections/CardSection';
// import Footer from '../Footer';

export default function About() {
  return (
    <>
      <HeroSection />
      <div id='experiences'>
        <CardSection header='Experiences'/>
      </div>
      <div id='projects'>
        <CardSection id='projects' header='Projects'/>
      </div>
    </>
  );
}