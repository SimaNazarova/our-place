import "./Place.scss";
import React from "react";

function Place({ refProp }) {
  return (
    <section className="place" ref={refProp}>
      <h2 className="place__title">
        Welcome to Our
        <br /> Place
      </h2>
      <p className="place__text">
        At Our Place, we believe in the power of home-cooking to bring people
        together. Our collections are new heirlooms from the cultures and places
        that make up the fabric of the modern multi-ethnic kitchen. We design
        thoughtfully, source ethically, and produce sustainably because what we
        make is connected to one another and the earth we share.
      </p>
    </section>
  );
}

export default Place;
