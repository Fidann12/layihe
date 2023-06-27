import { Link } from "react-router-dom";
// import AboutSlider from "../component/AboutSlider";
function About() {
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
          <li>Əlaqə </li>
        </ul>
      </div>
      <div className="blog_text_h1">
        <h1>Haqqımızda</h1>
      </div>
      <section>
        <div className="about_container container">
          <div className="left_about_wrapper">
            <span>A wayward vision in fashion</span>

            <div className="about_info">
              <p>
                Zoa stands for a personal and obstinate selection. Surprising
                with new designers every season, great
                <br /> attention is given to the unique <br />
                personal identity of all in-store designers. From clothing to
                jewellery, shoes <br /> bags, each piece is chosen with special
                care.
              </p>
              <img
                src="https://landing.engotheme.com/html/zoa/demo/img/about/signature.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="right_about_wrapper">
            <img
              src="https://landing.engotheme.com/html/zoa/demo/img/about/about-2.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="about_wrapper_element container">
          <div className="origin">
            <span>Origin</span>
            <p>
              an aesthetically pleasing name, leaving
              <br /> room for personal interpretation
              <br /> through its actions.
            </p>
          </div>
          <div className="about_team">
            <span>Team</span>
            <p>
              three young individuals, convinced
              <br /> that a lot has yet to be explored
              <br /> in an indispensable and ubiquitous
            </p>
          </div>
          <div className="about_practicality">
            <span>Practicality</span>
            <p>
              garments should look good, and
              <br /> simultaneously making them
              <br />
              versatile is a nice challenge.
            </p>
          </div>
        </div>
      </section>
      <section>
        {/* <AboutSlider /> */}
      </section>
    </>
  );
}

export default About;
