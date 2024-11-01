import "./header.css";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Header = () => {
   const dispatch = useDispatch();
const {  total } = useSelector((state) => state);



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
          {total}
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
