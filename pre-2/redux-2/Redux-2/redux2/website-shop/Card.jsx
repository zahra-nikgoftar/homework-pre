import React, { useState } from "react";
import "./card.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import addToCart from "./actions/action-creator"
import { products } from "./data-product";


function Card({ shawModalMessage }) {

  const dispatch = useDispatch();
  const handlModalMessage = () => {
    shawModalMessage("Added  to cart!");
  };
  const handleAddToCart = (products) => {
    dispatch(addToCart(products));
  };

  return (
    <div className="cardContainer">
      {products.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.src} alt={card.name} />
          <div className="cardInner">
            <div className="cardInfoTop deemphasise">{card.type}</div>
            <h4>{card.name}</h4>

            <div className="cardInfoBottom emphasise">
              {[...Array(5)].map((star, i) => (
                <AiFillStar key={i} color={i < card.stars ? "gold" : "gray"} />
              ))}{" "}
            </div>
            <div className="cardInfoMiddle">
              <span className="price">
                ${card.offPrice ? card.offPrice : card.price}
              </span>
              {card.offPrice && <span className="offPrice">${card.price}</span>}
            </div>
            <div className="add-to-card">
              <button onClick={(handleAddToCart, handlModalMessage)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
