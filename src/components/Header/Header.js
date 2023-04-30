import "./Header.scss";
import React, { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user.png";

function Header(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <header className="header">
      <div className="header__up">
        <p className="header__up-text">
          SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS
        </p>
      </div>
      <div className="header__bottom">
        {windowWidth > 750 ? (
          <div className="header__bottom-menu">
            <div className="header__bottom-menu-left">
              <p className="header__bottom-text">shop</p>
              <p className="header__bottom-text">always pan</p>
            </div>
            <div className="header__bottom-menu-middle">
              <img className="header__bottom-logo" src={logo} alt="logo" />
            </div>
            <div className="header__bottom-menu-right">
              <p className="header__bottom-text">mission</p>
              <p className="header__bottom-text">faqs</p>
              <button className="header__bottom-account-icon">
                <img src={user} alt="account icon" />
              </button>
            </div>
          </div>
        ) : (
          <div className="header__bottom-menu">
            <div
              onClick={props.onOpenBurgerMenu}
              className="header__bottom-menu-burger-btn">
              <div className="header__bottom-menu-burger-btn-line"></div>
              <div className="header__bottom-menu-burger-btn-line"></div>
              <div className="header__bottom-menu-burger-btn-line"></div>
            </div>
            <button className="header__bottom-account-icon">
              <img src={user} alt="account icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
