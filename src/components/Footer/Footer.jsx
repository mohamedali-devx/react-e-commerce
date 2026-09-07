import React from "react";
import { Link } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhone
} from "react-icons/fa";

import logo from "../../images/Logo.jpg";

import "./footer.css";

function Footer() {

    return (
        <footer className="footer">

            <div className="container">

                {/* Footer Top */}
                <div className="footer-top">

                    {/* Logo & About */}
                    <div className="footer-about">

                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Logo" />
                        </Link>

                        <p>
                            Your trusted online store for quality
                            products and a simple shopping experience.
                        </p>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>
                            Quick Links
                        </h3>

                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/shop">
                            Shop
                        </Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>

                    </div>


                    {/* Customer Service */}
                    <div className="footer-column">

                        <h3>
                            Customer Service
                        </h3>

                        <Link to="/cart">
                            Cart
                        </Link>

                        <Link to="/wishlist">
                            Wishlist
                        </Link>

                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/register">
                            Register
                        </Link>

                    </div>


                    {/* Contact */}
                    <div className="footer-column contact-column">

                        <h3>
                            Contact Us
                        </h3>

                        <p>
                            <FaEnvelope />
                            example@gmail.com
                        </p>

                        <p>
                            <FaPhone />
                            +20 100 000 0000
                        </p>


                        {/* Social */}
                        <div className="social-icons">

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>

                        </div>

                    </div>

                </div>


                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <p>
                        © 2026 Mony. All Rights Reserved.
                    </p>

                    <p>
                        Made with love by
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;