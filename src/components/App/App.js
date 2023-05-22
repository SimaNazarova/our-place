import "./App.scss";
import React, { useState } from "react";
import Header from "../Header/Header";
import BurgerMenu from "../Burger-menu/BurgerMenu";
import Skillet from "../Skillet/Skillet";

import MassMedia from "../Mass-Media/Mass-Media";
import Place from "../Place/Place";
import Design from "../Design/Design";
import Products from "../Products/Products";
import Follow from "../Follow/Follow";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";

function App() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  function onOpenBurgerMenu() {
    setOpenBurgerMenu(!openBurgerMenu);
  }

  return (
    <div className="App">
      <Header onOpenBurgerMenu={onOpenBurgerMenu} />
      {openBurgerMenu && <BurgerMenu onOpenBurgerMenu={onOpenBurgerMenu} />}

      <Skillet />
      <MassMedia />
      <Place />
      <Design />
      <Products />
      <Follow />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
