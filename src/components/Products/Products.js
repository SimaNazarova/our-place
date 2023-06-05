import "./Products.scss";
import React from "react";
import { productsArray } from "./data";
function Products({ refProp }) {
  return (
    <section className="products">
      <div className="products__container" ref={refProp}>
        <h2 className="products__title">
          From curated essentials to limited-run editions.
        </h2>
        <p className="products__text">
          We make products inspired by traditions – and we're starting with one
          you might be familiar with: Dinner.
        </p>
        <ul className="products__ul">
          {productsArray.map((item, i) => (
            <li key={i} className="products__li">
              <img className="products__img" src={item.img} alt="logo" />
              <p className="products__li-title">{item.title}</p>
              <p className="products__li-price">{item.price}</p>
              <p className="products__li-info">{item.info}</p>
              <ul className="products__colors-ul">
                {item.colors.map((item, i) => (
                  <li key={i} className="products__colors-li">
                    <div
                      style={{ background: item }}
                      className="products__colors-circle"></div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
