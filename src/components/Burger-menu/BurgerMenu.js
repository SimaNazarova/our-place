import "./BurgerMenu.scss";
import React from "react";

import user from "../../images/user.png";

function BurgerMenu(props) {
  return (
    <div className="burger-menu">
      <div className="burger-menu__icons">
        <div onClick={props.onOpenBurgerMenu} className="burger-menu__btn">
          <div className="burger-menu__btn-line"></div>
          <div className="burger-menu__btn-line"></div>
        </div>
        <button className="burger-menu__account-icon">
          <img src={user} alt="account icon" />
        </button>
      </div>
      <div className="burger-menu__item">shop</div>
      <div className="burger-menu__item">always pan</div>
      <div className="burger-menu__item">mission</div>
      <div className="burger-menu__item">faqs</div>
    </div>
  );
}

export default BurgerMenu;
