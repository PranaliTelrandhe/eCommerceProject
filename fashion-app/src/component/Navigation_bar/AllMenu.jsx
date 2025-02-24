import React, { useState } from "react";
import "./AllMenu.css";
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../../App';
import { useContext } from 'react';


const AllMenu = () => {
  const {cart}= useContext(ShopContext)
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
          <Link to="/men" className="allMenu__item">Men</Link>
          <Link to="/women" className="allMenu__item">Women</Link>
          <Link to="/kids" className="allMenu__item">Kids</Link>
          <Link to="/home-living" className="allMenu__item">Home & Living</Link>
          <Link to="/beauty-personal-care" className="allMenu__item">Beauty & Personal Care</Link>
        </div>
      )}
    </div>
  );
};

export default AllMenu;
