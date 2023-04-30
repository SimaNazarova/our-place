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
    </div>
  );
}

export default App;
