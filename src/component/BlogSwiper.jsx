import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function BlogSwiper() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
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
      {blog && blog.length > 0
        ? blog.slice(0, 2).map((b) => (
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

                <Link to={`/blogdetails/${b.id}`} href="#" className="gotoblog">
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
    </>
  );
}

export default BlogSwiper;
