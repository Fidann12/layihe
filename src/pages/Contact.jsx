import { Link } from "react-router-dom";

function Contact() {
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
        <h1>Əlaqə</h1>
      </div>

      <section className="contact_overlay container">
        <div className="contact_wrapper">
          <div className="contact_left">
            <img
              src="https://landing.engotheme.com/html/zoa/demo/img/slide/slider-1-home-6.png"
              alt=""
            />
          </div>
          <div className="contact_right">
            <span className="contact_title">Əlaqə</span>
            <form className="contact_form">
              <div className="form_email">
                <input type="email" placeholder="E-mail" />
              </div>
              <div className="form_name">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form_surname">
                <input type="text" placeholder="Surname" />
              </div>
              <div className="form_mobile">
                <input type="number" placeholder="Number" />
              </div>
              <div className="submit_button">
                <button type="submit" className="basket_button_total">
                  Send Message{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="about_content container">
        <div className="contact_content">
          <div className="say_hello">
            <span>Say Hello</span>
            <p>fidan.aliyeva03@gamil.com</p>
            <p>support@zoa.vn</p>
          </div>
          <div className="call_me">
            <span>Call Me</span>
            <p>+994552327854</p>
            <p>+994553458765</p>
          </div>
          <div className="address">
            <span>Address</span>
            <p>Hüseyn Cavid 63</p>
            <p>Bakıxanov qəs </p>
          </div>
          <div className="working_on">
            <span>Working on</span>
            <p>Mon - Fri: 9:80am - 6:30pm</p>
            <p>Mon - Fri: 9:80am - 6:30pm</p>
          </div>
        </div>
      </section>
      <section>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24322.387955183232!2d49.9427858!3d40.3579053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1685370111691!5m2!1saz!2saz"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
