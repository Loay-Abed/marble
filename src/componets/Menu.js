import React from "react";
import "../componets/styles/menu.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Navigation]);

function Menu() {
  return (
    <>
      <div id="MENU" className="menuSection">
        <div className="MenuTag">MENU</div>

        <Swiper
          className="menuphoto"
          spaceBetween={20}
          slidesPerView={1}
          //   onSlideChange={() => console.log('slide change')}
          //   onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3000 }} // Set the delay between slides in milliseconds
          navigation // Enable navigation arrows
        >
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/Cover (1).png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/9.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/8.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/6.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/Cover (2).png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/2.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/1.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/3.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/4.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={require("../componets/Imags/MenuImg/5.png")} alt="Menu" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/10.png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/11.png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/12.png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/13.1.png")}
              alt="Menu"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={require("../componets/Imags/MenuImg/14.png")}
              alt="Menu"
            />
          </SwiperSlide>
        </Swiper>
  
      </div>
    </>
  );
}

export default Menu;
