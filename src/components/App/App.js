import "./App.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useState, useRef, useEffect } from "react";
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

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  function onOpenBurgerMenu() {
    setOpenBurgerMenu(!openBurgerMenu);
  }

  const revealRefs = useRef([]);

  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 0.5,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            toggleActions: "play none none none",
            // markers: true,
          },
        }
      );
    });
  });

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      <Header onOpenBurgerMenu={onOpenBurgerMenu} />
      {openBurgerMenu && <BurgerMenu onOpenBurgerMenu={onOpenBurgerMenu} />}

      <Skillet />
      <MassMedia />
      <Place refProp={addToRefs} />
      <Design refProp={addToRefs} />
      <Products refProp={addToRefs} />
      <Follow refProp={addToRefs} />
      <Info refProp={addToRefs} />
      <Footer />
    </div>
  );
}

export default App;
