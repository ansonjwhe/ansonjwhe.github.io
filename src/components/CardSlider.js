// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './CardSlider.css'

// import 'swiper-bundle.css'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function CardSlider() {
  return (
    <div id='slider-container'>
      <Swiper
        loop = {true}
        centeredSlides = {true}
        slidesPerView = {3}
        spaceBetween = {10}
        navigation
        pagination = {{ clickable: true }}
        setWrapperSize = {true}
        onSwiper = {(swiper) => console.log(swiper)}
        onSlideChange = {() => console.log('slide change')}
      >
        <SwiperSlide class='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide class='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide class='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide class='swiper-slide'>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}