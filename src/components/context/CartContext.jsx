import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    // Favorites
    const [favorites, setFavorites] = useState(() => {
        const savedFav = localStorage.getItem("favoritesItems");
        return savedFav ? JSON.parse(savedFav) : [];
    });

    const addToFavorites = (item) => {
        setFavorites((prev) => {

            if (prev.some((i) => i.id === item.id)) {
                return prev;
            }

            return [...prev, item];
        });
    };

    const removeFromFavorites = (id) => {
        setFavorites((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    useEffect(() => {
        localStorage.setItem(
            "favoritesItems",
            JSON.stringify(favorites)
        );
    }, [favorites]);


    // Cart
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");

        return savedCart
            ? JSON.parse(savedCart)
            : [];
    });


    // Add To Cart
    const addToCart = (item) => {

        setCartItems((prevItems) => {

            const itemExists = prevItems.some(
                (i) => i.id === item.id
            );

            if (itemExists) {

                return prevItems.map((i) =>
                    i.id === item.id
                        ? {
                            ...i,
                            quantity: i.quantity + 1
                        }
                        : i
                );
            }

            return [
                ...prevItems,
                {
                    ...item,
                    quantity: 1
                }
            ];
        });
    };


    // Increase Quantity
    const increaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    };


    // Decrease Quantity
    const decreaseQuantity = (id) => {

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
        );
    };


    // Remove From Cart
    const removeFromCart = (id) => {

        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => item.id !== id
            )
        );
    };


    // Save Cart
    useEffect(() => {

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,

                increaseQuantity,
                decreaseQuantity,
                removeFromCart,

                favorites,
                addToFavorites,
                removeFromFavorites
            }}
        >
            {children}
        </CartContext.Provider>
    );
}