import React from "react";
import "./Header.css"; // Custom CSS for styling

const Header = () => {
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
          <span className="header__optionLineOne">Hello, Sign in</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime Account</span>
        </div>
        <div className="header__basket">
          🛒 {/* Replace with an icon */}
          <span className="header__basketCount">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
