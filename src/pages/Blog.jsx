import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:3000/blog", {
      signal: controller.signal,
    })
      .then((b) => b.json())
      .then((b) => {
        setBlog(b);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="Home_blog blog_text_h1">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span className="blog_home_icon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <li>Blog </li>
        </ul>
      </div>
      <div className="blog_text_h1">
        <h1>BLOG</h1>
      </div>

      <section className="BlogPage container">
        {blog && blog.length > 0
          ? blog.map((b) => (
              <div className="blog" key={b.id}>
                <div className="blog-photo">
                  <img src={b.image} alt="" />
                </div>
                <div className="blog-info">
                  <div className="post-meta">
                    <div className="post-year">
                      <p className="text-uppercase ">{b.time}</p>
                    </div>
                  </div>
                  <div className="post-name">
                    <h4 className="post-title">{b.name}</h4>
                  </div>
                  <p className="BlogCartDes">{b.description.slice(0, 120)}</p>

                  <Link
                    to={`/blogdetails/${b.id}`}
                    href="#"
                    className="gotoblog"
                  >
                    <div className="read_more">
                      <p className="BlogToDetails"> Read more...</p>
                    </div>
                    <div className="share_icon">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          : null}
      </section>
    </>
  );
}

const t = (b) => b;
export default connect(t)(Blog);
