import React from "react";
import "./Navbar.css";
import AllMenu from "./AllMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__menu">
         
          <AllMenu />
        </div>
        <div className="navbar__links">
          <a href="#" className="navbar__link">Today's Deals</a>
          <a href="#" className="navbar__link">Customer Service</a>
          <a href="#" className="navbar__link">Registry</a>
          <a href="#" className="navbar__link">Gift Cards</a>
          <a href="#" className="navbar__link">Sell</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
