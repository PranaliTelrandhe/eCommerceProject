import React from "react";
import { Link } from 'react-router-dom'; 
import "./Header.css"; // Custom CSS for styling
import { ShopContext } from '../../App';
import { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  const {cart}= useContext(ShopContext)

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header__logo">
        <img
          src="../assets"
          alt="Fashion Logo"
          className="header__logoImage"
        />
      </div>

      {/* Search Bar Section */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Fashion-Pro"
        />
        <button className="header__searchButton">
          🔍 {/* Replace with an icon */}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne nav-link">Hello, Sign in</span>
          <span className="header__optionLineTwo nav-link">Account & Lists</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne nav-link">Returns</span>
          <span className="header__optionLineTwo nav-link">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne nav-link">Your</span>
          <span className="header__optionLineTwo nav-link">Prime Account</span>
        </div>
        <div className="header__basket">
        {/*  🛒 */}{/* Replace with an icon */}
        {/*  <Link  title="view cart" className='nav-link header_basketcount' to="/cart">0{/*<FaCartShopping size={24}/>*/}
       {/* <span className='badge 
        rounded-circle bg-success
        position-absolute top-0 me-3'>{cart.lenght}</span> </Link>*/}
        <Link  title="view cart" className='nav-link position-relative  btn btn-primary' to="/cart"><FaCartShopping size={24}/>
        <span className='badge 
        rounded-circle bg-success
        position-absolute top-0 me-3'>{cart.lenght}</span> </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
