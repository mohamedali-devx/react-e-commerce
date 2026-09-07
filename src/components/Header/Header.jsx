import { useContext, useEffect, useState } from "react";
import "./header.css";

import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import {
  IoSearchSharp,
  IoCartOutline,
  IoMenu,
  IoChevronDown
} from "react-icons/io5";

import { FaRegHeart, FaRegUser, FaUserPlus } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

import logo from "../../images/Logo.jpg";
import { CartContext } from "../context/CartContext";

function Header() {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Get Categories
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
  const handleCategory = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false);

    if (category === "all") {
      navigate("/shop");
    } else {
      navigate(`/category/${category}`);
    }
  };

  // Selected Category Name
  const selectedCategoryName =
    selectedCategory === "all"
      ? "All Categories"
      : categories.find(
        (category) => category.slug === selectedCategory
      )?.name || "All Categories";



  const { cartItems } = useContext(CartContext);

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
                if (e.key === "Enter") {
                  handleSearch();
                }
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
                <span className="count">{cartItems.length}</span>
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


      {/* Lower Header */}
      <div className="lower-header">
        <div className="container">

          {/* Categories */}
          <div className="category-wrapper">

            <button
              type="button"
              className={`category-btn ${categoryOpen ? "open" : ""}`}
              onClick={() => setCategoryOpen(!categoryOpen)}
            >

              <IoMenu className="menu-icon" />

              <span className="category-title">
                {selectedCategoryName}
              </span>

              <IoChevronDown className="arrow-icon" />

            </button>


            {/* Category Dropdown */}
            <div
              className={`category-dropdown ${categoryOpen ? "show" : ""
                }`}
            >

              {/* All Categories */}
              <button
                className={`category-item ${selectedCategory === "all" ? "active" : ""
                  }`}
                onClick={() => handleCategory("all")}
              >
                All Categories
              </button>


              {/* Categories */}
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.slug}
                  className={`category-item ${selectedCategory === category.slug ? "active" : ""
                    }`}
                  onClick={() => handleCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}

            </div>

          </div>


          {/* Navigation */}
          <nav className="nav">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
              >
                {link.name}
              </Link>
            ))}

          </nav>


          {/* Header Info */}
          <div className="header-info">

            <FaRegUser />

            <span>
              Welcome to Mony
            </span>

          </div>

        </div>
      </div>

    </header>
  );
}

export default Header;