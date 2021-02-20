import React from 'react';
import '../../App.css';
import HeroSection from '../sections/HeroSection';
import CardSection from '../sections/CardSection';
import Footer from '../Footer';

export default function About() {
  const experiences = [
    {
      name: 'Eco Club',
      imgsrc: '/images/ecoclub.jpg',
      desc: 'As the President of the Eco Club, I helped reestablish the club by attracting over 30 new members '
      + 'and leading weekly eco-friendly initiatives.'
    },
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
      imgsrc: '/images/watonomous.jpg',
      desc: 'As a core member of external sponsorship, I help raise funding for WATonomous, University of Waterloo\'s '
      + 'one and only autonomous vehicle student design team.'
    }
  ]

  const projects = [
    {
      name: 'BadGIF',
      github: 'https://github.com/ansonjwhe/BadGIF',
      devpost: 'https://devpost.com/software/badgif',
      desc: 'I helped develop a discord bot that analyzes the sentiment of user messages using GCP\'s NL API '
      + 'to send a GIF of the opposite emotion and track and display user sentiment data through a MERN Stack application.'
    },
    {
      name: 'ohmi',
      github: 'https://github.com/ansonjwhe/ohmi',
      devpost: 'https://devpost.com/software/ohmi',
      desc: 'I helped build a web app using React that allows users to synchronously send, receive, and claim '
      + 'favours from friends in real time using Firebase\'s Cloud Firestore and authentication features.'
    },
    {
      name: 'MazeTD',
      github: 'https://github.com/ansonjwhe/MazeTD',
      desc: 'I designed and created a maze-building tower defense game in Java, where enemy pathing is dynamically '
      + 'determined by the maze created with user-placed towers using the breadth-first search algorithm.'
    },
    {
      name: 'Bomberman',
      github: 'https://github.com/ansonjwhe/NESBomberman',
      desc: 'Inspired by the original NES Bomberman (1983), I created my own Bomberman Game in Turing with '
      + 'seamless frame-by-frame sprite animation to scratch that nostalgic itch.'
    },
  ]

  return (
    <>
      <HeroSection />
      <div id='experiences'>
        <CardSection header='Experiences' data={experiences}/>
      </div>
      <div id='projects'>
        <CardSection header='Projects' data={projects}/>
      </div>
      <Footer />
    </>
  );
}