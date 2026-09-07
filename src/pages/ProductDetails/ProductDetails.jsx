import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
    FaStar,
    FaRegStarHalfStroke,
    FaRegHeart,
    FaShare
} from "react-icons/fa6";

import { TiShoppingCart } from 'react-icons/ti';

import './productDetails.css';
import Button from '../../components/Button/Button';
import SlideProducts from '../../components/SlideProducts/SlideProducts';
import LoadingSkeleton from '../../components/LoadingSkeleton/LoadingSkeleton';

import { CartContext } from '../../components/context/CartContext';


function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);


    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);


    // Get Product
    useEffect(() => {

        const fetchProduct = async () => {

            try {

                const res = await fetch(
                    `https://dummyjson.com/products/${id}`
                );

                const data = await res.json();

                setProduct(data);
                setLoading(false);

            } catch (error) {

                console.error("Error fetching product:", error);
                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);


    // Get Related Products
    useEffect(() => {

        if (!product) return;

        const fetchRelatedProducts = async () => {

            try {

                setLoadingRelatedProducts(true);

                const res = await fetch(
                    `https://dummyjson.com/products/category/${product.category}`
                );

                const data = await res.json();

                setRelatedProducts(data.products);

            } catch (error) {

                console.error("Error fetching related products:", error);

            } finally {

                setLoadingRelatedProducts(false);

            }

        };

        fetchRelatedProducts();

    }, [product]);


    // Add To Cart
    const handleAddToCart = () => {

        addToCart(product);

        navigate("/cart");

    };


    if (loading) {
        return <LoadingSkeleton />;
    }


    if (!product) {
        return <p>Product not found</p>;
    }


    return (
        <>

            <div className="item-details">

                <div className="container">

                    {/* Images */}

                    <div className="imgs-item">

                        <div className="main-img">

                            <img
                                id="main-img"
                                src={product.images[0]}
                                alt={product.title}
                            />

                        </div>


                        <div className="other-imgs">

                            {product.images.map((item, i) => (

                                <img
                                    key={i}
                                    src={item}
                                    alt={product.title}
                                    onClick={() => {
                                        document.getElementById("main-img").src = item;
                                    }}
                                />

                            ))}

                        </div>

                    </div>


                    {/* Product Details */}

                    <div className="details-item">

                        <h1 className="name">
                            {product.title}
                        </h1>


                        <div className="stars">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />

                        </div>


                        <div className="price">

                            <span>
                                ${product.price.toFixed(2)}
                            </span>

                        </div>


                        <h5>
                            Availability:
                            <span>
                                {product.availabilityStatus}
                            </span>
                        </h5>


                        <h5>
                            Brand:
                            <span>
                                {product.brand}
                            </span>
                        </h5>


                        <p className="desc">
                            Description: {product.description}
                        </p>


                        <h5 className="stock">
                            Stock:
                            <span>
                                {product.stock}
                            </span>
                        </h5>


                        <Button
                            txt="Add To Cart"
                            icon={<TiShoppingCart />}
                            onClick={handleAddToCart}
                        />


                        <div className="icons">

                            <span>
                                <FaRegHeart />
                            </span>

                            <span>
                                <FaShare />
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* Related Products */}

            {loadingRelatedProducts ? (

                <div>loading...</div>

            ) : (

                <SlideProducts
                    title={product.category.replace("-", " ")}
                    data={relatedProducts}
                />

            )}

        </>
    );
}

export default ProductDetails;