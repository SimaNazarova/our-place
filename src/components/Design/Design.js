import "./Design.scss";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import setImg from "../../images/set.png";
import { colorsArray } from "./data";

gsap.registerPlugin(ScrollTrigger);

function Design({ refProp }) {
  const revealRefs = useRef([]);

  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=250",
            toggleActions: "play none none reverse",
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
    <section className="design" ref={refProp}>
     <div className="design__container">
        <h2 className="design__title">Designed for Everything and Always</h2>
        <div className="design__colors">
          <ul className="design__ul">
            {colorsArray.map((item, i) => (
              <li key={i} className="design__li">
                <div
                  style={{ background: item.color }}
                  className="design__circle"
                ></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="design__set">
          <img src={setImg} className="design__set-img" alt="skillet" />
          <p className="design__text design__text_1" ref={addToRefs}>
            Beechwood spatula &<br /> built-in spoon rest
          </p>
          <p className="design__text design__text_2" ref={addToRefs}>
            Modular lid to
            <br /> release & trap steam
          </p>
          <p className="design__text design__text_3" ref={addToRefs}>
            Nesting steamer basket & <br /> colander
          </p>
          <p className="design__text design__text_4" ref={addToRefs}>
            2 easy-pour <br />
            spouts
          </p>
          <p className="design__text design__text_5" ref={addToRefs}>
            Stay cool handle
          </p>
          <p className="design__text design__text_6" ref={addToRefs}>
            Exclusive, ceramic
            <br /> nonstick made without
            <br /> PFOAs & PTFEs
          </p>
        </div>
     </div>
    </section>
  );
}

export default Design;
