import React, { useEffect, useState } from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import one from '../componets/Imags/ImgSlider/1.jpg'
import two from '../componets/Imags/ImgSlider/2.jpg'
import three from '../componets/Imags/ImgSlider/3.jpg'
import four from '../componets/Imags/ImgSlider/4.jpg'
import five from '../componets/Imags/ImgSlider/5.jpg'
import six from '../componets/Imags/ImgSlider/6.jpg'


export default function Slider() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 700) {
          setSlidesPerView(1);
        } 
        else if (window.innerWidth <= 900 & window.innerWidth >= 700){
          setSlidesPerView(2);

        }
        else {
          setSlidesPerView(3);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      // Call handleResize initially to set the correct slidesPerView based on the initial window width
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className="Slider" id="EVENT">
        <h2><span>EVENT</span>  & CATERING</h2>
         <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={one}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={two}/>
        </SwiperSlide>  
        <SwiperSlide>
            <img src={three}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={four}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={five}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={six}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
