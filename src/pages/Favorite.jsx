import { connect } from "react-redux";

function Favorite({ products, favorite, dispatch, basket }) {
  const removeItem = (id) => {
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite.filter((a) => a.id !== id)],
    });
  };
  const addItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };

  const changeCount = (id, n) => {
    let favElement = favorite.find((t) => t.id === id);
    favElement.count += n;
    if (!favElement.count) {
      favorite = favorite.filter((a) => a.id !== id);
    }
    dispatch({
      type: "SET_FAVORITE",
      payload: [...favorite],
    });
  };

  return (
    <section className="productsBasket container">
      <table>
        <thead>
          <tr>
            <th>Məhsul</th>
            <th>Qiymət</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {favorite &&
            favorite.length > 0 &&
            favorite.map((favItem) => {
              let product = products.find((t) => t.id === favItem.id);
              return (
                <tr>
                  <td className="product-thumbnail">
                    <div className="single_product" key={t.id}>
                      <div className="product-image">
                        {product &&
                          product.image &&
                          product.image.length > 0 && (
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
                    {product && product.price && <p>{product.price} ₼</p>}
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
    </section>
  );
}

const t = (a) => a;
export default connect(t)(Favorite);
