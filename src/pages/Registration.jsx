import { Link } from "react-router-dom";

function Registration() {
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
          <li>Qeydiyyat </li>
        </ul>
      </div>
      <div className="blog_text_h1">
        <h1>Qeydiyyat</h1>
      </div>

      <section>
        <div className="user_login container">
          <div className="right_user_content">
            <h4>Daxil ol</h4>
            <p>Bizimlə hesabınız varsa, daxil olun!</p>
            <form action="">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
            <p>Parolunuzu unutmusunuz?</p>
            <button>Daxil ol</button>
          </div>
          <div className="left_user_content">
            <h4>Qeydiyyat</h4>
            <p>Bizimlə hesabınız varsa, daxil olun!</p>
            <form action="">
              <input type="text" placeholder="Your name here..." />
              <input type="email" placeholder="Email address here..." />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
            </form>
            <div className="form-group">
              <input type="checkbox" id="html" />
              <label for="html">
                {" "}
                <p>Sign up for our newsletter!</p>
              </label>
            </div>
            <button>Qeydiyyatdan keç</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
