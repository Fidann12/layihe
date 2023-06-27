import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import FavModal from "../modal/FavModal";
import BasketModal from "../modal/BasketModal";
import { BsBasket3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
function Header({
  basketCount,
  dispatch,
  favCount,
  products,
  basket,
  favorite,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalSearch, setSearch] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [openBarsModal, setOpenBarsModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [totalFavItems, setTotalFavItems] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const showFavoriteModal = () => {
    dispatch({
      type: "SET_FAVORITE_MODAL",
      payload: FavModal,
    });
  };
  const showBasketModal = () => {
    dispatch({
      type: "SET_BASKET_MODAL",
      payload: BasketModal,
    });
  };

  const openModall = () => {
    setOpenBarsModal(!openBarsModal);
  };

  const openModal = () => {
    setModalShow(!modalShow);
  };
  const closeModal = () => {
    setModalShow(false);
  };
  const openSeacrhModal = () => {
    setSearch(!modalSearch);
  };
  const closeSearchModal = () => {
    setSearch(false);
  };

  useEffect(() => {
    setTotalItems(basket?.reduce((total, current) => total + current.count, 0));
  }, [basket]);

  useEffect(() => {
    setTotalFavItems(
      favorite?.reduce((total, current) => total + current.count, 0)
    );
  }, [favorite]);
  return (
    <>
      <BasketModal />
      <FavModal />
      <header>
        <div className="container">
          <div className="headerContent">
            <div className="logoDiv">
              <Link to={"/"}>FEVA</Link>
            </div>
            <div className="ulDiv">
              <ul>
                <li>
                  <Link to={"/"}>Ana Səhifə</Link>
                </li>
                <li>
                  <Link to={"/about "}>Haqqımızda</Link>
                </li>{" "}
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Əlaqə</Link>
                </li>
              </ul>
            </div>

            <div className="header_right">
              <button className="searchh_icon" onClick={openSeacrhModal}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button
                onClick={() => showFavoriteModal()}
                className="heart_icon"
              >
                <span className="FavLength">
                  {totalFavItems ? <p>{totalFavItems}</p> : null}
                </span>
                <FaRegHeart />
              </button>

              <button onClick={() => showBasketModal()} className="add_basket">
                <span className="BasketLength">
                  {totalItems ? <p>{totalItems}</p> : null}
                </span>
                <BsBasket3 />
              </button>

              <button className="userr_icon">
                <Link to={"/registration"}>
                  <i className="fa-regular fa-user"></i>
                </Link>
              </button>
              <div onClick={openModall} className="menu_bars">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </div>

        <div className={`modal__container ${modalShow ? "active" : ""}`}>
          <div onClick={closeModal} className="closeX">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div className={`searchModal ${modalSearch ? "active" : ""}`}>
          <form
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <input
              className="searchInput"
              type="text"
              placeholder="Axtar"
              onChange={handleInputChange}
            />
          </form>
          <div onClick={closeSearchModal} className="searchCloseX">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="searchContent">
            {searchTerm.length > 0 ? (
              products.length > 0 ? (
                products
                  .filter((product) => {
                    const title = product.title.toLowerCase();
                    const searchTermLower = searchTerm.toLowerCase();
                    const hasNumber = /\d/.test(searchTermLower);
                    return !hasNumber && title.includes(searchTermLower);
                  })
                  .map((product) => (
                    <Link key={product.id}>
                      <div className="search-content">
                        <div className="search-image">
                          <img src={product.image[0]} alt="" />
                        </div>
                        <div className="search-product-content">
                          <span>{product.title.slice(0, 30)}</span>
                          <p>{product.sale} ₼</p>
                          <p>{product.price} ₼</p>
                        </div>
                      </div>
                    </Link>
                  ))
              ) : (
                <p className="not-found">Not Found</p>
              )
            ) : (
              <p className="not-found"></p>
            )}
          </div>
        </div>
        <div className={`burger_navbar ${openBarsModal ? "active" : ""}`}>
          <ul>
            <li className="burger_dropdown">
              Kişi
              <ul className="dropdown">
                <li>Köynək</li>
                <li>Şalvar</li>
                <li>Çanta</li>
                <li>Ayaqqabı</li>
                <li>Pencək</li>
                <li>Palto</li>
                <li>Qalustuk</li>
                <li>Bel çantası</li>
                <li>Jilet</li>
              </ul>
            </li>
            <li>Qadın</li>
            <li>Yeni sezon</li>
            <li>Endirimli mallar</li>
          </ul>
        </div>
      </header>
      {/* <section>
          <Slider />
        </section> */}
    </>
  );
}
const t = (a) => a;
export default connect(t)(Header);
