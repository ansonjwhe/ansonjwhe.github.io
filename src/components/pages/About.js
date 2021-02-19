import React from 'react';
import '../../App.css';
import HeroSection from '../sections/HeroSection';
import CardSection from '../sections/CardSection';
// import Footer from '../Footer';

export default function About() {
  const experiences = [
    {
      name: 'DECA',
      imgsrc: '/images/deca.jpg',
      desc: 'I competed in DECA for all 4 years of high school, qualifying for provincials every year, and finally '
      + 'achieving Provincial Champion status in the STDM event in my last year!'
    },
    {
      name: 'Music Council',
      imgsrc: '/images/music.jpg',
      desc: 'As a 3-time winner of the Best Percussionist award, I was selected as a Music Council Executive '
      + 'and helped organize fun events for my school\'s music department.'
    },
    {
      name: 'Kumon',
      imgsrc: '/images/kumon.jpg',
      desc: 'During my 4 years at Kumon, I served as both a Reading Master and a Primary Instructor, '
      + 'teaching students Math and English and conducting student orientation sessions.'
    },
    {
      name: 'WATonomous',
      imgsrc: '/images/watonomous.gif',
      desc: 'As a core member of external sponsorship, I help raise funding for WATonomous, University of Waterloo\'s '
      + 'one and only autonomous vehicle student design team.'
    },
    {
      name: 'Eco Club',
      imgsrc: '/images/ecoclub.jpg',
      desc: 'As the President of the Eco Club, I helped reestablish the club by attracting over 30 new members '
      + 'and leading weekly eco-friendly initiatives.'
    }
  ]

  return (
    <>
      <HeroSection />
      <div id='experiences'>
        <CardSection header='Experiences' data={experiences}/>
      </div>
      <div id='projects'>
        <CardSection header='Projects' data={experiences}/>
      </div>
    </>
  );
}