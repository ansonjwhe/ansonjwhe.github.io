// import Swiper core and required modules
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import Card from './Card'
import './CardSlider.css'

// import 'swiper-bundle.css'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function CardSlider(props) {
  const data = props.data

  const slides = data.map((item) =>
    <SwiperSlide class='swiper-slide'>
      <Card
        header={props.header} 
        name={item.name} 
        imgsrc={item.imgsrc}
        github={item.github}
        devpost={item.devpost}
        desc={item.desc}
      />
    </SwiperSlide>
  )

  return (
    <div id='slider-container'>
      <Swiper
        loop = {true}
        slidesPerView = {3}
        spaceBetween = {10}
        navigation
        pagination = {{ clickable: true }}
        setWrapperSize = {true}
        onSwiper = {(swiper) => console.log(swiper)}
        onSlideChange = {() => console.log('slide change')}
        grabCursor = {true}
      >
        {slides}
      </Swiper>
    </div>
  );
}