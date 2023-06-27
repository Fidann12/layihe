import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function FilterPanel({ products, basket, dispatch }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [category, setCategory] = useState([]);
  const controller = new AbortController();

  const getCategories = () => {
    fetch("http://localhost:3000/categories", {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => {
        setCategory(a);
      });
  };
  useEffect(() => {
    getCategories();
    return () => {
      controller.abort();
    };
  });
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
  return (
    <>
      {/* <ul className="categories_buttons  ">
        {category.map((a) => (
          <li onClick={() => setActiveCategory(a.id)}>
            <button key={a.id}>{a.name}</button>
          </li>
        ))}
      </ul> */}
      <section className="product container ">
        {products
          .filter((a) =>
            activeCategory === 0 ? a : a.category_id === activeCategory
          )
          .slice(0, 9)
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
                      <button className="btn" onClick={() => removeItem(a.id)}>
                        Səbətdən sil
                      </button>
                    ) : (
                      <button className="btn" onClick={() => addItem(a.id)}>
                        Səbətə at
                      </button>
                    )}
                    <div className="product_icons">
                      <i
                        onClick={() => addFavItem(a.id)}
                        class="fa-solid fa-heart"
                      ></i>
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </div>
                </div>
                <div className="titleDiv">
                  <ul>
                    <li>{a.title}</li>
                    <li>{a.price}</li>
                  </ul>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

const t = (a) => a;

export default connect(t)(FilterPanel);
