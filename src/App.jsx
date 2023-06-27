import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Basket = lazy(() => import("./pages/Basket"));
const Details = lazy(() => import("./pages/Details"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Registration = lazy(() => import("./pages/Registration"));
const AllProduct = lazy(() => import("./pages/AllProduct"));
import Loading from "./component/Loading";
import "./Responsive.css";
import { connect } from "react-redux";
import Footer from "./component/Footer";
function App({ dispatch }) {
  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:3000/products", {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a,
        });
      });
    return () => {
      controller.abort();
    };
  });
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/basket",
      element: <Basket />,
    },
    {
      path: "/product/:id",
      element: <Details />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blogdetails/:id",
      element: <BlogDetails />,
    },
    {
      path: "/contact/",
      element: <Contact />,
    },
    {
      path: "/about/",
      element: <About />,
    },
    {
      path: "/registration/",
      element: <Registration />,
    },
    {
      path: "/allProduct/",
      element: <AllProduct />,
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        {routes.map((a) => (
          <Route
            key={a.path}
            path={a.path}
            element={<Suspense fallback={<Loading />}>{a.element}</Suspense>}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}
const t = (a) => {
  return {
    basketCount: a.basket.length,
  };
};
export default connect(t)(App);
