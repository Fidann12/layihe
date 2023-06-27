import { connect } from "react-redux";
import { useEffect, useState } from "react";
function Basket({ products, basket, dispatch }) {
  const [total, setTotal] = useState(0);
  const removeItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((a) => a.id !== id)],
    }); 
  };
  const changeCount = (id, n) => {
    let basketElement = basket.find((t) => t.id === id);
    basketElement.count += n;
    if (!basketElement.count) {
      basket = basket.filter((a) => a.id !== id);
    }
    dispatch({
      type: "SET_BASKET",
      payload: [...basket],
    });
  };
  // const total = +basket
  //   .reduce(
  //     (acc, item) =>
  //       acc + products.find((t) => t.id === item.id).price * item.count,
  //     0
  //   )
  //   .toFixed(2);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, curr) => {
        const product = products.find((p) => p.id === curr.id);
        return acc + curr?.count * product?.price;
      }, 0)
    );
  }, [basket]);

  return (
    <section className="productsBasket container">
      <table>
        <thead>
          <tr>
            <th>Məhsul</th>
            <th>Qiymət</th>
            <th>Say</th>
            <th>Sil</th>
          </tr>
        </thead> 
        <tbody>
          {basket.map((basketItem) => {
            let product = products.find((t) => t.id === basketItem.id);
            return (
              <tr>
                <td className="product-thumbnail">
                  <div className="single_product">
                    <div className="product-image">
                      {product && product.image && product.image.length > 0 && (
                        <div className="div">
                          <img src={product.image[0]} alt="" />
                        </div>
                      )}
                    </div>
                    <div className="product-info">
                      {" "}
                      {product && product.title && (
                        <div className="div_title">
                          <p>{product.title}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="price_td">
                  {" "}
                  {product && product.price && <p>{product.price} ₼ </p>}
                </td>
                <td>
                  <div className="product-quantity">
                    <button
                      className="minus_button qtybutton"
                      onClick={() => changeCount(basketItem.id, -1)}
                    >
                      -
                    </button>
                    <h4 className="count_h4 qtybutton">{basketItem.count}</h4>
                    <button
                      className="plus_button qtybutton"
                      onClick={() => changeCount(basketItem.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <div
                    className="product-remove"
                    onClick={() => removeItem(product.id)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className="section_basket">
        <div className="cart-summary">
          <h3>Sifarişin Yekunu</h3>
          <ul>
            <li>
              <span>Cəmi Məbləğ</span>
              <p>{total} ₼ </p>
            </li>
            <li>
              <span>Çatdırılma</span>
              <span>Ödənişsiz</span>
            </li>
            <li>
              <span>Yekun</span>
              <p>{total} ₼ </p>
            </li>
          </ul>
          <button className="basket_button_total">Sifarişi tamamla</button>
          <button className="basket_button_total_cart">
            Alış-verişə davam et
          </button>
        </div>
      </section>
    </section>
  );
}
const t = (a) => a;
export default connect(t)(Basket);
