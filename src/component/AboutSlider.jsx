
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default function AboutSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
 
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="about_slide_swiper">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in ab culpa
              qui officia deserunt mollit anim eaque ipsa quae illo . Excepteur
              sint occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo .
            </p>
            <div className="swiper_info">
              <img
                src="https://templates.hibootstrap.com/xton/default/assets/img/user4.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="about_slide_swiper">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in ab culpa
              qui officia deserunt mollit anim eaque ipsa quae illo . Excepteur
              sint occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo .
            </p>
            <div className="swiper_info">
              <img
                src="https://templates.hibootstrap.com/xton/default/assets/img/user4.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="about_slide_swiper">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in ab culpa
              qui officia deserunt mollit anim eaque ipsa quae illo . Excepteur
              sint occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo .
            </p>
            <div className="swiper_info">
              <img
                src="https://templates.hibootstrap.com/xton/default/assets/img/user4.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="about_slide_swiper">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in ab culpa
              qui officia deserunt mollit anim eaque ipsa quae illo . Excepteur
              sint occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo . Excepteur sint
              occaecat cupidatat non proident, sunt in ab culpa qui officia
              deserunt mollit anim eaque ipsa quae illo .
            </p>
            <div className="swiper_info">
              <img
                src="https://templates.hibootstrap.com/xton/default/assets/img/user4.jpg"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
