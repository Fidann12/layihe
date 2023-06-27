function Footer() {
  return (
    <footer>
      <div className="footer_content container">
        <ul className="foooter_ul">
          <li>
            <div className="footer_wrapper_content">
              <div className="footer_wrapper">
                <div className="footer_wrapper_icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="footer_text">
                  <p>Bakixanov qesebesi, H.Cavid 63</p>
                  <p>MD - 123, AZE.</p>
                </div>
              </div>
              <div className="footer_wrapper">
                <div className="footer_wrapper_icon">
                  <i className="fa-solid fa-phone"></i>{" "}
                </div>
                <div className="footer_text">
                  <p>+994557675439</p>
                  <p>+(012)4275467</p>
                </div>
              </div>
              <div className="footer_wrapper">
                <div className="footer_wrapper_icon">
                  <i className="fa-solid fa-envelope"></i>{" "}
                </div>
                <div className="footer_text">
                  <p>info@Feva.com</p>
                  <p>contact@Feva.com</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <h3>HESAB</h3>
            <ul>
              <li>Hesabım</li>
              <li>Hesab yarat</li>
              <li>Sifarişlər</li>
              <li>Bonuslar</li>
            </ul>
          </li>
          <li>
            <h3>Alıcılar</h3>
            <ul>
              <li>FAQ</li>
              <li>Geri qaytarma</li>
              <li>Şərtlər və Qaydalar</li>
              <li>Gizlilik siyasəti</li>
            </ul>
          </li>
          <li>
            <h3>DƏSTƏK</h3>
            <ul>
              <li>Müştəri xidmətləri</li>
              <li>*1515</li>
              <li>info@feva.az</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer_bottom container">
        <p>Feva - Bütün hüquqlar qorunur 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
