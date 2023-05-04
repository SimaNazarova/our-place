import "./Mass-Media.scss";
import React from "react";

import { logoArray } from "./data";

function MassMedia() {
  return (
    <section className="mass-media">
      <p className="mass-media__text">
        "Doing the job of eight traditional cookware
        <br /> pieces"
      </p>
      <ul className="mass-media__ul">
        {logoArray.map((item, i) => (
          <li key={i} className="mass-media__li">
            <img src={item} alt="logo" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MassMedia;