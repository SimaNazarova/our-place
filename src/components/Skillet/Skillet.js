import "./Skillet.scss";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Skillet() {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const underlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      text1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.3 }
    )
      .fromTo(
        text2Ref.current,
        { y: "40px", opacity: 0 },
        { y: "0px", opacity: 1, duration: 1 },
        "-=0.2"
      )
      .fromTo(
        text3Ref.current,
        { y: "40px", opacity: 0 },
        { y: "0px", opacity: 1, duration: 1 },
        "-=0.2"
      )
      .fromTo(
        underlineRef.current,
        { width: 0 },
        { width: "138px", duration: 1 },
        "-=0.2"
      )
      .fromTo(
        buttonRef.current,
        { x: "40px", opacity: 0 },
        { x: "0px", opacity: 1, duration: 1 },
        "-=0.2"
      );

    tl.play();
  }, []);

  return (
    <section className="skillet">
      <div className="skillet__container">
        <h1 className="skillet__text skillet__text_small" ref={text1Ref}>
          Meet The Always Pan
        </h1>
        <p className="skillet__text skillet__text_large" ref={text2Ref}>
          Your new
        </p>
        <p className="skillet__text skillet__text_underline" ref={text3Ref}>
          skillet
        </p>
        <span className="skillet__underline" ref={underlineRef}></span>
        <button className="skillet__button" ref={buttonRef}>
          Shop the Always Pan
        </button>
      </div>
    </section>
  );
}

export default Skillet;
