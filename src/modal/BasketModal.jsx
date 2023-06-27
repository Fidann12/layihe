import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

function BasketModal({ basketModal, dispatch, products, basket, basketCount }) {
  const removeItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    });
  };

  const showBasketModal = () => {
    dispatch({
      type: "SET_BASKET_MODAL",
      payload: basketModal,
    });
  };

  return (
    <>
      <div
        onClick={showBasketModal}
        className={!basketModal ? `basket_modal` : `basket_modal active`} 
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="basketModal_content"
        >
          <div className="cart_item">
            <p>
              You have
              <span>{basketCount ? `${basketCount}` : null}</span>
              in your basket bag
            </p>

            <i onClick={showBasketModal}>
              <IoCloseOutline />
            </i>
          </div>
          {basket.length > 0 ? (
            basket.slice(0, 4).map((basketItem) => {
              let product = products.find((t) => t.id === basketItem.id);
              return (
                <div className="single_basket_products" key={t.id}>
                  <Link
                    to={`/product/${basketItem.id}`}
                    onClick={showBasketModal}
                  >
                    <div className="left_products">
                      {product && product.image && product.image.length > 0 && (
                        <div className="left_wrapper">
                          <img src={product.image[0]} alt="" />
                        </div>
                      )}
                    </div>
                  </Link>
                  <Link
                    to={`/product/${basketItem.id}`}
                    onClick={showBasketModal}
                  >
                    <div className="right_product_info">
                      {product && product.title && (
                        <p className="infoTitle">{product.title}</p>
                      )}
                      <div className="inner_second">
                        {product && product.sale && <p>{product.sale} ₼ </p>}
                        {product && product.price && <p>{product.price} ₼ </p>}
                      </div>
                    </div>
                  </Link>
                  <div
                    onClick={() => removeItem(product.id)}
                    className="removeBasketProduct"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="empty_basket">
              <div className="empty_basket_icon">
                <SlBasket />
              </div>
              <p> Səbət boşdur</p>
            </div>
          )}
          <Link to={`/basket`}>
            <button className="basket-modal-btn">Səbətə keç</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(BasketModal);
