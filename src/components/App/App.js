import "./App.scss";
import React, { useState } from "react";
import Header from "../Header/Header";
import BurgerMenu from "../Burger-menu/BurgerMenu";

function App() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  function onOpenBurgerMenu() {
    setOpenBurgerMenu(!openBurgerMenu);
  }

  return (
    <div className="App">
      <Header onOpenBurgerMenu={onOpenBurgerMenu} />
      {openBurgerMenu && <BurgerMenu onOpenBurgerMenu={onOpenBurgerMenu} />}

      <div className="skillet">
        <div className="skillet__container">
          <p className="skillet__text skillet__text_small">
            Meet The Always Pan
          </p>
          <p className="skillet__text skillet__text_large">Your new</p>
          <p className="skillet__text skillet__text_underline">skillet</p>
          <button className="skillet__button">Shop the Always Pan</button>
        </div>
      </div>
    </div>
  );
}

export default App;
