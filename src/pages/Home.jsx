import Sliders from "../component/Sliders";
import Hero from "../component/Hero";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogSwiper from "../component/BlogSwiper";
import PreviewModal from "../modal/PreviewModal";

function Home({ products, basket, dispatch, favorite, previewModal }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [search, setSearchState] = useState("");

  const removeItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    });
  };
  const addItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };
  const addFavItem = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite, { id: id, count: 1 }],
    });
  };
  const showPreviewModal = () => {
    dispatch({
      type: "SET_PREVIEW_MODAL",
      payload: previewModal,
    });
  };
  return (
    <>
      <Hero />
      <PreviewModal />
      <section>
        <div className="category container">
          <h1 className="categoryh1">KATAQORİYA</h1>
        </div>
        <div className="col-lg  ">
          <div className="card-product container">
            <figure>
              <div className="card-image">
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-1.jpg"
                  alt=""
                  className="image-back"
                />
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-1-2.jpg"
                  alt=""
                  className="image-front"
                />
                <div className="basket_slider_products">
                  <a href="">PENCƏK</a>
                </div>
              </div>
            </figure>
            <figure>
              <div className="card-image">
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-3.jpg"
                  alt=""
                  className="image-back"
                />
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-3-1.jpg"
                  alt=""
                  className="image-front"
                />
                <div className="basket_slider_products">
                  <a href="">AKSESUAR</a>
                </div>
              </div>
            </figure>
            <figure>
              <div className="card-image">
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-2.jpg"
                  alt=""
                  className="image-back"
                />
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-2-1.jpg"
                  alt=""
                  className="image-front"
                />
                <div className="basket_slider_products">
                  <a href="">KÖYNƏK</a>
                </div>
              </div>
            </figure>
            <figure>
              <div className="card-image">
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-4.jpg"
                  alt=""
                  className="image-back"
                />
                <img
                  src="https://demo.htmlhunters.com/shopy/assets/images/demo/look-4-1.jpg"
                  alt=""
                  className="image-front"
                />
                <div className="basket_slider_products">
                  <a href="">EYNƏK</a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section className="newproductsec container">
        <div className="newProduct">
          <p>YENİ MƏHSULLAR</p>
        </div>
        <Sliders data={products} /> 
      </section>
      <section className="home_wrapper">
        <div className="wrap-content">
          <h1>
            Yeni Məhsullarda<span className="redSpan"> 20% </span>Endirim
          </h1>
          <button className="learn-more">İNDİ BAŞLA</button>
        </div>
      </section>
      <section className="allproduct-sec container">
        <div className="allproduct">
          <p>Bütün Məhsullar</p>
          <span className="button-28">Bütün məhsulları gör</span>
        </div>
        <div className="product">
          {products
            .filter((a) =>
              activeCategory === 0 ? a : a.category_id === activeCategory
            )
            .slice(0, 9)
            .filter((a) => a.title.toLowerCase().includes(search))
            .map((a) => {
              let check = basket.find((t) => t.id === a.id);
              return (
                <div className="products" key={a.id}>
                  <div className="imageDiv">
                    <Link to={`/product/${a.id}`}>
                      <img src={a.image[0]} alt="" />
                    </Link>

                    <div className="basket_slider_products">
                      {check ? (
                        <button
                          className="btn"
                          onClick={() => removeItem(a.id)}
                        >
                          Səbətdən sil
                        </button>
                      ) : (
                        <button className="btn" onClick={() => addItem(a.id)}>
                          Səbətə at
                        </button>
                      )}
                    </div>
                    <div className="product_icons-all">
                      <i
                        onClick={() => addFavItem(a.id)}
                        className="fa-solid fa-heart"
                      ></i>
                      <i
                        onClick={() => showPreviewModal(a.id)}
                        className="fa-regular fa-eye"
                      ></i>
                    </div>
                  </div>
                  <div className="titleDiv">
                    <ul>
                      <li>{a.title}</li>
                      <li>{a.sale} ₼</li>
                      <li>{a.price} ₼ </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className="home_blog_page container">
        <div className="blog_text">
          <p>BLOG</p>
        </div>
        <div className="blog_wrapper">
          <BlogSwiper />
        </div>
        <Link to={`/blog`}>
          <button className="learn-more">Blogları gör</button>
        </Link>
      </section>
    </>
  );
}
const t = (a) => a;

export default connect(t)(Home);
