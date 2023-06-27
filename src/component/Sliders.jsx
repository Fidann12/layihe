import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import PreviewModal from "../modal/PreviewModal";
import "swiper/css/pagination";
export default function App({ data }) {
  return (
    <>
      <PreviewModal />
      <Swiper
        className="container  "
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {data &&
          data.slice(0, 9).map((a) => (
            <SwiperSlide key={a.id}>
              <div className="slider_products">
                <div className="slider_image_DIV">
                  <div className="basket_slider_products">
                    <h1>Səbətə at</h1>
                  </div>
                  <div className="product_icons">
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-regular fa-eye"></i>
                  </div>
                  <Link to={`/product/${a.id}`}>
                    <img src={a.image[0]} alt="" />
                  </Link>
                  <div className="productNew">
                    <p className="discountIcon_s2">Yeni</p>
                  </div>
                </div>
                <div className="product-wrap">
                  <p>{a.title}</p>
                  <p>{a.sale} ₼</p>
                  <p>{a.price} ₼</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper> 
    </>
  );
}
