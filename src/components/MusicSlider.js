import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './MusicSlider.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function MusicSlider(props) {
  const scores = [
    {
      title: 'Chromatic Fur Elise',
      embed: 'https://musescore.com/user/9899696/scores/6208985/embed',
      link: 'https://musescore.com/user/9899696/scores/6208985/s/2GjHVH'
    },
    {
      title: 'Frostlands',
      embed: 'https://musescore.com/user/9899696/scores/6208986/embed',
      link: 'https://musescore.com/user/9899696/scores/6208986/s/Z39qz_'
    },
    {
      title: 'A Rainy Day',
      embed: 'https://musescore.com/user/9899696/scores/5525729/embed',
      link: 'https://musescore.com/user/9899696/scores/5525729/s/KqZ1rj'
    },
    {
      title: 'Autumn Breeze',
      embed: 'https://musescore.com/user/9899696/scores/6112041/embed',
      link: 'https://musescore.com/user/9899696/scores/6112041/s/4g8OPw'
    },
    {
      title: 'Whistle in the Drizzle',
      embed: 'https://musescore.com/user/9899696/scores/6112082/embed',
      link: 'https://musescore.com/user/9899696/scores/6112082/s/7UpS3M'
    },
    {
      title: 'Studio Ghibli Mallet Quartet',
      embed: 'https://musescore.com/user/9899696/scores/5101227/embed',
      link: 'https://musescore.com/user/9899696/scores/5101227/s/qaMtMr'
    }
  ]
  const slides = scores.map((score) => 
    <SwiperSlide class='swiper-slide'>
      <iframe 
        title={score.title}
        src={score.embed}
        frameborder='0'
        allowfullscreen 
        allow='fullscreen'
      />
    </SwiperSlide>
  )

  return (
    <div id='music-slider-container'>
      <Swiper
        loop = {true}
        slidesPerView = {1}
        navigation
        pagination = {{ clickable: true }}
        setWrapperSize = {true}
        onSwiper = {(swiper) => console.log(swiper)}
        onSlideChange = {() => console.log('slide change')}
      >
        {slides}
      </Swiper>
    </div>
  );
}