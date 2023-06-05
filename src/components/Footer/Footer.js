/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.scss";
import React from "react";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__copyright">&copy; Our Place 2021</div>
        <div className="footer__info">
          <ul className="footer__info-ul">
            <li className="footer__info-li">Copyright 2021</li>
            <a href="#">
              {" "}
              <li className="footer__info-li">Privacy</li>
            </a>
            <a href="#">
              {" "}
              <li className="footer__info-li">Terms</li>
            </a>
            <a href="#">
              {" "}
              <li className="footer__info-li">Return</li>
            </a>
            <li className="footer__info-li">
              {" "}
              <button className="footer__btn"></button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
