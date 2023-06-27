import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Details({ basket, dispatch, products }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);  
  const [sizeActiveIndex, setSizeActiveIndex] = useState(0);
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const addItem = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };
  function sizeIndex(index) {
    setSizeActiveIndex(index);
  }
  useEffect(() => {
    const controller = new AbortController();

    fetch(`http://localhost:3000/products/${id}`, {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => {
        setProduct(a);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/comments`)
      .then((res) => res.json())
      .then((a) => {
        setComments(a);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      surname,
      comment,
    };

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setComments([...comments, newComment]);
    setName("");
    setSurname("");
    setComment("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const visibleProduct = product.id;

  function handleTab(index) {
    setActive(index);
  }
  return !loading ? (
    <div className="details_div">
      <div className="Home_blog">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span className="blog_home_icon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <li>Basket</li>
        </ul>
      </div>
      <div className="details">
        <div className="big_image">
          <img src={product.image[active]} alt="" />

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
            <h2>{product.title}</h2>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span className="price_color"> ₼ {product.price} </span>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              mollitia! Nulla qui, dolores possimus corrupti reprehenderit
              soluta vel quasi delectus
            </p>
          </div>
          <div className="colors">
            <h5>Rəng</h5>
            {product.color.map((color, index) => (
              <button style={{ background: color }} key={index}></button>
            ))}
          </div>

          <div className="size-btn">
            <div className="countDiv">
              <button onClick={decrement}>-</button>
              <button>{count}</button>
              <button onClick={increment}>+</button>
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
          <button onClick={() => addItem()} className="cart">
            Səbətə əlavə et
          </button>
        </div>
        <section className="details-slider container">
          <p className="same_product">OXŞAR MƏHSULLAR</p>
          <Slider {...settings}>
            {products &&
              products
                .filter((product) => product.id !== id)
                .slice(0, 11)
                .map((a) => {
                  if (a.id === visibleProduct) {
                    return null;
                  }
                  let check = basket.find((b) => b.id === a.id);
                  return (
                    <div className="slider_products">
                      <div className="slider_image_DIV">
                        <div className="basket_slider_products">
                          <h1>Səbətə at</h1>
                        </div>
                        <div className="product_icons">
                          <i className="fa-solid fa-heart"></i>
                          <i className="fa-regular fa-eye"></i>
                        </div>
                        <img src={a.image[0]} alt="" />
                        <div className="productNew">
                          <p className="discountIcon_s2">Yeni</p>
                        </div>
                      </div>
                      <div className="product-wrap">
                        <Link to={`/product/${a.id}`}>
                          <p>{a.title}</p>
                          <p>{a.sale} ₼</p>
                          <p>{a.price} ₼</p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </Slider>
          <div className="blog-comment">
            <p className="comment_user">COMMENT</p>
            <div className="product-comment">
              {comments.length
                ? comments.map((comment) => (
                    <div className="comment-area" key={comment.id}>
                      <div className="user-image">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1684869602~exp=1684870202~hmac=ee7e6e352bd3541c966694304541ff02d93543b88dbdb9f8ac36da9dfcbca575"
                          alt=""
                        />
                      </div>
                      <div className="user-data">
                        <div className="rating">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star-half-stroke"></i>
                          <i className="fa-solid fa-star-half-stroke"></i>
                          <p className="commnet-hsitory">June 9, 2022</p>
                        </div>
                        <div className="comment">
                          <p>{comment.name}</p>
                          <span>{comment.surname}</span>

                          <p className="user-comment">{comment.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="BlogWriter">
            <div className="writer_image">
              <img src={data.blog_writer_image} alt="" />
            </div>
          </div>
          <div className="PostAComment">
            <div className="comment_heading">
              <span>POST A COMMENT</span>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            <div className="comment_area">
              <textarea
                onChange={handleCommentChange}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Comment"
              ></textarea>
              <div className="area_input">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  placeholder="Surname"
                  onChange={handleSurnameChange}
                />
              </div>
            </div>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label for="html">
                {" "}
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </label>
            </div>
            <button onClick={handleSubmit} className="post_comment_data">
              Post Comment
            </button>
          </div>
        </section>
      </div>
    </div>
  ) : (
    <span className="loader"></span>
  );
}
const t = (a) => a;
export default connect(t)(Details);
