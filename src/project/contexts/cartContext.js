import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ ...props }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (mealObj, qty) => {
    if (cart.some((meal) => meal.idMeal === mealObj.idMeal))
      return console.log("Item already in cart!");
    setCart([...cart, { ...mealObj, qty }]);
  };

  const removeFromCart = (mealObj) => {
    let existingCart = cart;
    let updatedCart = existingCart.filter(
      (meal) => meal.idMeal !== mealObj.idMeal
    );
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeFromCart, cart }}
      {...props}
    />
  );
};
