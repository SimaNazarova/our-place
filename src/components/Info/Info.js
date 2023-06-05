import "./Info.scss";
import React from "react";
import { listsArray } from "./data";
import usaFlag from "../../images/usa-flag.png";
import canadaFlag from "../../images/canada-flag.png";

function Info({ refProp }) {
  return (
    <section className="info" ref={refProp}>
     <div className="info__container">
        <div className="info__left">
          <h3 className="info__left-title">Keep in touch</h3>
          <p className="info__left-text">
            Be the first to know about new collections, special events, and what’s
            going on at Our Place.
          </p>
          <form className="info__left-form">
            <input
              className="info__left-input"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <button className="info__left-btn">SUBMIT</button>
          </form>
        </div>
        <div className="info__right">
          <div className="info__right-lists">
            {listsArray.map((item, index) => {
              return (
                <ul key={index} className="info__right-ul">
                  <p className="info__right-title">{item.title}</p>
                  {item.list.map((item, index) => {
                    return (
                      <li key={index} className="info__right-li">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="info__right-location">
            <p className="info__right-text">You're In</p>
            <img className="info__right-flag" alt="country" src={usaFlag} />
            <img className="info__right-flag" alt="country" src={canadaFlag} />
          </div>
        </div>
     </div>
    </section>
  );
}

export default Info;
