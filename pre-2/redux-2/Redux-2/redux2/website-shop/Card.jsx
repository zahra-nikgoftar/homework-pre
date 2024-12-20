import React, { useState } from "react";
import "./card.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import addToCart from "./actions/action-creator"


function Card() {

  const dispatch = useDispatch();
  
  const { products } = useSelector((state) => state); 
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    (alert(`${product.name} added to cart!`));
    
  }; 

  return (
    <div className="cardContainer">
      {products.map((card, index) => (
        <div className="card" key={index} onClick={() => handleAddToCart(card)}>
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
              <button onClick={() => handleAddToCart()}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
