import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { ShopContext } from "../../App";
import { FaShoppingCart ,FaSearch,FaUser } from "react-icons/fa";


const brandsList = ["H&M", "Levi's", "Nike", "Adidas", "Zara", "Puma", "Biba", "FabIndia"];

const Header = () => {
  const { cart } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredBrands([]);
    } else {
      const results = brandsList.filter((brand) => brand.toLowerCase().includes(query));
      setFilteredBrands(results);
    }
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Fashion Logo" className="header__logoImage" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for brands..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="header__searchButton">
          <FaSearch />
        </button>

        {/* Search Dropdown */}
        {filteredBrands.length > 0 && (
          <div className="search-dropdown">
            {filteredBrands.map((brand, index) => (
              <Link key={index} to={`/search/${brand}`} className="search-result">
                {brand}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="header__nav">
        <Link to="/signin" className="header__option">
          <FaUser />
          <span className="header__optionText">Sign In</span>
        </Link>

        <Link to="/orders" className="header__option">
          <span className="header__optionText">Returns & Orders</span>
        </Link>

        <div className="header__basket">
          <Link to="/cart" className="nav-link position-relative btn btn-primary">
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="badge rounded-circle bg-success position-absolute top-0 me-3">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
