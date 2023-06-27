import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { IoHeartDislikeOutline } from "react-icons/io5";

function FavModal({ favoriteModal, dispatch, products, favorite, favCount }) {
  const removeItem = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite.filter((a) => a.id !== id)],
    });
  };
  const showFavoriteModal = () => {
    dispatch({
      type: "SET_FAVORITE_MODAL",
      payload: favoriteModal,
    });
  };

  return (
    <>
      <div
        onClick={showFavoriteModal}
        className={!favoriteModal ? `favorite_modal` : `favorite_modal active`}
      >
        <div onClick={(e) => e.stopPropagation()} className="FavModal_content">
          <div className="cart_item">
            <p>
              You have
              <span>{favCount ? `${favCount}` : null} </span>
              in your favorite bag
            </p>
            <i onClick={showFavoriteModal}>
              <IoCloseOutline />
            </i>
          </div>
          {favorite.length > 0 ? (
            favorite.slice(0, 5).map((favItem) => {
              let product = products.find((t) => t.id === favItem.id);
              return (
                <div className="single_fav_products" key={t.id}>
                  <Link
                    to={`/product/${favItem.id}`}
                    onClick={showFavoriteModal}
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
                    to={`/product/${favItem.id}`}
                    onClick={showFavoriteModal}
                  >
                    <div className="right_product_info">
                      {product && product.title && (
                        <p className="infoTitle">{product.title}</p>
                      )}
                      <div className="inner_second">
                        {product && product.sale && <p>{product.sale} ₼ </p>}
                        {product && product.price && <p>{product.price} ₼ </p>}
                      </div>
                      <Link to={`/basket`}>
                        <button className="basket_add_btn">
                          Səbətə əlavə et
                        </button>
                      </Link>
                    </div>
                  </Link>
                  <div
                    onClick={() => removeItem(product.id)}
                    className="removeFavoriteProduct"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <IoHeartDislikeOutline />
            </div>
          )}
          <Link to={`/favorite`}>
            <button className="basket-modal-btn">Favorilərə keç</button>
          </Link>
        </div>
      </div>
    </>
  );
}

const t = (a) => a;
export default connect(t)(FavModal);
