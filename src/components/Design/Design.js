import "./Design.scss";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import setImg from "../../images/set.png";
import { colorsArray } from "./data";

gsap.registerPlugin(ScrollTrigger);

function Design() {
  const text_1Ref = useRef(null);
  const text_2Ref = useRef(null);
  const text_3Ref = useRef(null);
  const text_4Ref = useRef(null);
  const text_5Ref = useRef(null);
  const text_6Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        text_1Ref.current,
        text_2Ref.current,
        text_3Ref.current,
        text_4Ref.current,
        text_5Ref.current,
        text_6Ref.current,
      ],
      {
        opacity: 0,
        y: 30,
      },
      {
        scrollTrigger: text_1Ref.current,
        opacity: 1,
        duration: 1,
        stagger: 0.9,
        y: 0,
        ease: "linear",
      }
    );
  });
  return (
    <div className="design">
      <p className="design__title">Designed for Everything and Always</p>
      <div className="design__colors">
        <ul className="design__ul">
          {colorsArray.map((item, i) => (
            <li key={i} className="design__li">
              <div
                style={{ background: item.color }}
                className="design__circle"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="design__set">
        <img src={setImg} className="design__set-img" alt="skillet" />
        <p className="design__text design__text_1" ref={text_1Ref}>
          Beechwood spatula &<br /> built-in spoon rest
        </p>
        <p className="design__text design__text_2" ref={text_2Ref}>
          Modular lid to
          <br /> release & trap steam
        </p>
        <p className="design__text design__text_3" ref={text_3Ref}>
          Nesting steamer basket & <br /> colander
        </p>
        <p className="design__text design__text_4" ref={text_4Ref}>
          2 easy-pour <br />
          spouts
        </p>
        <p className="design__text design__text_5" ref={text_5Ref}>
          Stay cool handle
        </p>
        <p className="design__text design__text_6" ref={text_6Ref}>
          Exclusive, ceramic
          <br /> nonstick made without
          <br /> PFOAs & PTFEs
        </p>
      </div>
    </div>
  );
}

export default Design;
