import "./header.css";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

//   const cartCount = cart.length;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="../src/assets/APSDark-BHi096m8 (1).png" alt="logo" />
        </div>

        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li className="menu-item">Home</li>
          <li className="menu-item">About Us</li>
          <li className="menu-item">Contact Us</li>
        </ul>
        <div className="price">
          {/* <p>${totalPrice.toFixed(2)}</p> */}
          {/* {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )} */}
          <a href="#">
            <MdOutlineShoppingCart />
          </a>
        </div>
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className={`hamburger-icon ${isOpen ? "open" : ""}`} />
        </button>
      </nav>
      <section>
        <div className="image-hero">
          <div className="text-hero">
            <p>Best Quality Plants</p>
            <h1>
              Amazing Variety <br />
              Of Plants Starting <br />
              Just $12
            </h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
