// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import reactImg from '../../assets/react.png';
import typescriptImg from '../../assets/typescript.png';
import javascriptImg from '../../assets/javascript.png';
import htmlImg from '../../assets/html.png';
import cssImg from '../../assets/css.png';
import materialImg from '../../assets/material.png';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/pagination';
import './stylesBio.css';

function BioSlider() {
  const skills = [reactImg, typescriptImg, javascriptImg, htmlImg, cssImg, materialImg];
  return (
    <Swiper
      autoplay={ { delay: 3000, disableOnInteraction: false } }
      loop
      cssMode
      navigation
      mousewheel
      keyboard
      modules={ [Navigation, Pagination, Mousewheel, Keyboard, Autoplay] }
      className="mySwiper"
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={ index }>
          <img src={ skill } alt={ `image${skill}` } />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BioSlider;
