import React, { useState } from "react";
import "./AllMenu.css";

const AllMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="allMenu">
      {/* All Menu Button */}
      <div className="allMenu__button" onClick={toggleMenu}>
        ☰ All
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="allMenu__dropdown">
          <a href="#" className="allMenu__item">Men</a>
          <a href="#" className="allMenu__item">Women</a>
          <a href="#" className="allMenu__item">Kids</a>
          <a href="#" className="allMenu__item">Home & Living</a>
          <a href="#" className="allMenu__item">Beauty & Personal Care</a>
          <a href="#" className="allMenu__item">Sunglass Frames</a>
        </div>
      )}
    </div>
  );
};

export default AllMenu;
