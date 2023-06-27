import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function PreviewModal({
  dispatch,
  previewModal,
  products,
  viewModalProdId,
  basket,
  favorite,
}) {
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState(0);
  const [sizeActiveIndex, setSizeActiveIndex] = useState(0);
  const product = products.find((a) => a.id === viewModalProdId);

  if (!product || !product.image) {
    return null;
  }
  useEffect(() => {
    setTotal(
      basket.reduce((acc, curr) => {
        const product = products.find((p) => p.id === curr.id);
        return acc + curr?.count * product?.price;
      }, 0)
    );
  }, [basket]);

  let check = basket.find((t) => t.id === product.id);
  let checkFav = favorite.find((t) => t.id === product.id);
  const showPreviewModal = () => {
    dispatch({
      type: "SET_PREVIEW_MODAL",
      payload: previewModal,
    });
  };
  const handleTab = (index) => {
    setActive(index);
  };
  const sizeIndex = (index) => {
    setSizeActiveIndex(index);
  };
  return (
    <>
      <div
        onClick={showPreviewModal}
        className={!previewModal ? `preview_modal` : `preview_modal active`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="preview_modal_content"
        >
          <div className="details_div">
            <div className="details">
              <div className="big_image">
                <img src={product.image[sizeActiveIndex]} alt="" />
                <div className="thumb">
                  {product.image &&
                    product.image.length > 0 &&
                    product.image.map((img, index) => (
                      <img
                        className={active === index ? "active" : ""}
                        src={img}
                        alt=""
                        key={index}
                        onClick={() => handleTab(index)}
                      />
                    ))}{" "}
                </div>
              </div>

              <div className="box">
                <div className="row">
                  {product && product.title && <p>{product.title}</p>}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <span className="price_color"> ₼ {products.price} </span>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi, mollitia! Nulla qui, dolores possimus corrupti
                    reprehenderit soluta vel quasi delectus
                  </p>
                </div>
                <div className="colors">
                  <h5>Rəng</h5>
                  {product &&
                    product.colors &&
                    product.colors.map((color, index) => (
                      <button
                        style={{ background: color }}
                        key={index}
                      ></button>
                    ))}
                </div>

                <div className="size-btn">
                  <div className="countDiv">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                  <h5>Ölçü</h5>
                  {product.size &&
                    product.size.map((size, index) => (
                      <button
                        onClick={() => sizeIndex(index)}
                        className={sizeActiveIndex === index ? "active" : ""}
                        key={size.id}
                      >
                        {size}
                      </button>
                    ))}
                </div>

                <button className="cart">Səbətə əlavə et</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const t = (a) => a;

export default connect(t)(PreviewModal);
