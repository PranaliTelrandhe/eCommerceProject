import React from "react";
import "./Navbar.css";
import AllMenu from "./AllMenu";
import {Link,Outlet} from 'react-router-dom';


const Navbar = () => {

  
  return (
    <>
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__menu">
         
          <AllMenu />
        </div>
        <div className="navbar__links">
          <Link to="/deal" className="navbar__link">Today's Deals</Link>
          <Link to="/customer" className="navbar__link">Customer Service</Link>
          <Link to="/gift" className="navbar__link">Gift Cards</Link>
          <Link to="/sell" className="navbar__link">Sell</Link>
        </div>
      </div>
    </nav>
    <Outlet /></>
  );
};

export default Navbar;
