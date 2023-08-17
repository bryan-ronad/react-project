import { createContext, useState } from "react";

export const PriceContext = createContext();

export const PriceProvider = ({ ...props }) => {
  const [prices, setPrices] = useState({});

  const setMealPrice = (mealId, price) => {
    let pricesObj = prices;
    pricesObj[mealId] = price;
    setPrices(pricesObj);
  };

  return <PriceContext.Provider value={{ prices, setMealPrice }} {...props} />;
};
