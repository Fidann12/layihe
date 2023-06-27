import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function BlogDetails() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`http://localhost:3000/blog/${id}`, {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => {
        setData(a);
      });
    return () => {
      controller.abort();
    };
  }, []);

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
          <li>Blog Details</li>
        </ul>
      </div>
      <div>
        <h1 className="blog_text_h1">BLOG DETAILS</h1>
      </div>
      <section>
        <div className="BlogDetailsPage">
          <div className="blog_details">
            <div className="data_image">
              <img src={data.image} alt="" />
            </div>

            <div className="data_des">
              <div className="data_title">
                <p>Diam Arcu</p>
                <h1>{data.name}</h1>
                <span>{data.time}</span>
                <div className="share_iconss">
                  <i className="fa-solid fa-share-nodes">SHARE</i>
                  <i className="fa-solid fa-right-left">COMPARE</i>
                  <i className="fa-solid fa-heart">ADD TO WISHLIST</i>
                </div>
              </div>
              <p>{data.description}</p>
              <div className="des_share">
                <div className="des_media">
                  <div className="share_icon">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
}
export default BlogDetails;
