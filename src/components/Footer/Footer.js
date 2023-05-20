import "./Footer.scss";
import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__copyright">&copy; Our Place 2021</div>
      <div className="footer__info">
        <ul className="footer__info-ul">
          <li className="footer__info-li">Copyright 2021</li>
          <li className="footer__info-li">Privacy</li>
          <li className="footer__info-li">Terms</li>
          <li className="footer__info-li">Return</li>
          <li className="footer__info-li">
            {" "}
            <button className="footer__btn"></button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
