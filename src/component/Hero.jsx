import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Hero() {
  const [activeSwp, setActiveSwp] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  const b = {
    hero: [
      {
        id: 1,
        hero_image:
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-knitwear/subhome-xmedia-24-2//w/1920/IMAGE-landscape-default-fill-56c22222-74cf-436b-ae43-48adf9e9d5c2-default_0.jpg?ts=1686817957817",
        hero_text1: "Wear Them Now!",
        hero_text2: "Plan Cotton",
        hero_text3: "Smart simple & clean",
        hero_button: "Shopping Now",
      },
      {
        id: 2,
        hero_image:
          "https://staticpages.mngbcn.com/homes/images/ss23/she/junio/she_rebajas_1206.jpg?imwidth=1519&imdensity=2",
        hero_text1: "Wear Them Now!",
        hero_text2: "Plan Cotton",
        hero_text3: "Smart simple & clean",
        hero_button: "Shopping Now",
      },
      {
        id: 3,
        hero_image:
          "https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-24//w/1920/IMAGE-landscape-fill-9d535ee8-5bef-4ab5-b340-dfb274e96dbb-default_0.jpg?ts=1686843456784",
        hero_text1: "Wear Them Now!",
        hero_text2: "Plan Cotton",
        hero_text3: "Smart simple & clean",
        hero_button: "Shopping Now",
      },
    ],
  };
  
  const detectChange = (e) => {
    setActiveSwp(e.activeIndex);
  };
  return (
    <>
      <section className="hero">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={detectChange}
        >
          {b.hero.map((heroItem, index) => (
            <SwiperSlide key={heroItem.id}>
              <div className="sw-content">
                <img src={heroItem.hero_image} alt="Hero" />
                <div className="hero_content"> 
                  <p className={activeSwp === index ? "anim" : ""}>
                    {heroItem.hero_text1}
                  </p>
                  <h1 className={activeSwp === index ? "anim" : ""}>
                    {heroItem.hero_text2}
                  </h1>
                  <h1 className={activeSwp === index ? "anim" : ""}>
                    {heroItem.hero_text3}
                  </h1>
                  <Link>
                    <button className="learn-more">İNDİ BAŞLA</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
