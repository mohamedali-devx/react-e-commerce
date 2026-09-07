import React, { useContext } from 'react'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./slideProducts.css"

function Product({ product }) {
    return (
        <>
            <div className="product">
                <div className="img-product">
                    <img src={product.images[0]} alt={product.name} />
                </div>

                <p className="name-product">{product.name}</p>

                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />
                </div>

                <div className="price"><span>${product.price.toFixed(2)}</span></div>
                <div className="icons">
                    <span>
                        <FaCartArrowDown />
                    </span>
                    <span>
                        <FaRegHeart />
                    </span>
                    <span>
                        <FaShare />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Product