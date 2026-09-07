import { useContext } from 'react'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./slideProducts.css"
import { CartContext } from '../context/CartContext';

function Product({ product }) {

    const { cartItems, addToCart } = useContext(CartContext);

    const isInCart = cartItems.some(i => i.id === product.id);

    return (
        <>
            <div className={`product ${isInCart ? "in-cart" : ""}`}>
                {isInCart && (
                    <div className="in-cart-badge">
                        ✓ In Cart
                    </div>
                )}

                <Link to={`/products/${product.id}`}>

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
                </Link>

                <div className="price"><span>${product.price.toFixed(2)}</span></div>
                <div className="icons">

                    <span
                        className={isInCart ? "cart-added" : ""}
                        onClick={() => addToCart(product)}
                    >
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