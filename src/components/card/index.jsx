import React from "react";
import Button from "../Button";
import "./index.css";

import save from "./img/save.svg";

const Card = ({
  id,
  name,
  price,
  discount,
  wight,
  description,
  isFavorite,
  isCart,
  available,
  stock,
  picture,
}) => {
  const Price = ({ price, discount }) => {
    if (discount) {
      const discount_price = Math.round(price - (price * discount) / 100);
      return (
        <>
          <div className="card__old-price">{price}</div>
          <div className="card__price">{discount_price}</div>
        </>
      );
    } else {
      return <div className="card__price">{price}</div>;
    }
  };

  return (
    <div className="card">
      <div className="card_img">
        {discount > 0 && <div className="card__label">{discount}</div>}
        <img
          src={save}
          className={isFavorite ? "card__favourite checked" : "card__favourite"}
        ></img>
      </div>
      <a href="/product" className="card__link">
        <img src={picture} alt={name} className="card__image" />
        <div className="card__description">
          <Price price={price} discount={discount} />
          <div className="card__wight">{wight}</div>
          <div className="card__info">{name}</div>
        </div>
      </a>
      <Button text={"В корзину"} onClick={() => console.log("buy this")} />
    </div>
  );
};

export default Card;
