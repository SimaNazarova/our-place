import "./Mass-Media.scss";
import React from "react";

import { logoArray } from "./data";

function MassMedia() {
  return (
    <section className="mass-media">
     <div className="mass-media__container">
        <h2 className="mass-media__text">
          "Doing the job of eight traditional cookware
          <br /> pieces"
        </h2>
        <ul className="mass-media__ul">
          {logoArray.map((item, i) => (
            <li key={i} className="mass-media__li">
              <img src={item} alt="logo" />
            </li>
          ))}
        </ul>
     </div>
    </section>
  );
}

export default MassMedia;
