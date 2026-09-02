import React, { useEffect, useState } from "react";
import "./header.css";

import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import { IoSearchSharp, IoCartOutline, IoMenu } from "react-icons/io5";
import { FaRegHeart, FaRegUser, FaUserPlus } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

import logo from "../../images/Logo.jpg";

function Header() {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

//   Get Categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
    }, []);

  // Search
  const handleSearch = () => {
    const value = search.trim();

    if (!value) return;

    navigate(`/shop?search=${encodeURIComponent(value)}`);
  };

  // Category
  const handleCategory = (e) => {
    const category = e.target.value

    if (category === "all") {
        navigate("/shop");
    } else {
        navigate(`/category/${category}`);
    }
  }

  return (
    <header className="header">

      {/* Upper Header */}
      <div className="upper-header">
        <div className="container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Search */}
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />

            <Button
              className="search-btn"
              onClick={handleSearch}
              icon={<IoSearchSharp />}
            />
          </div>

          {/* Header Actions */}
          <div className="header-actions">

            {/* Wishlist */}
            <Link to="/wishlist" className="header-action">
              <div className="action-icon">
                <FaRegHeart />
                <span className="count">0</span>
              </div>

              <span className="action-text">
                Wishlist
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="header-action">
              <div className="action-icon">
                <IoCartOutline />
                <span className="count">0</span>
              </div>

              <span className="action-text">
                Cart
              </span>
            </Link>

            {/* Account */}
            <div className="account-actions">
              <Link to="/login">
                <PiSignInBold />
                <span>Login</span>
              </Link>

              <Link to="/register">
                <FaUserPlus />
                <span>Register</span>
              </Link>
            </div>

          </div>
        </div>
      </div>




        <div className="lower-header">
            <div className="container">
                <div className="category-wrapper">
                    <IoMenu className="menu-icon" />

                    <select
                        className="category-select"
                        defaultValue="all"
                        onChange={handleCategory}
                    >
                        <option value="all">All Categories</option>

                        {
                            categories.map((category) => (
                                <option key={category.slug} value={category.slug}>
                                    {category.name}
                                </option>
                            ))
                        }
                            
                    </select>
                </div>
            </div>
        </div>


    </header>
  );
}

export default Header;