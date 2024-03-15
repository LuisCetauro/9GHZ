import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartContextType {
  cart: number[];
  addToCart: (number: number) => void;
  setCart: React.Dispatch<React.SetStateAction<number[]>>;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  setCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (number: number) => {
    setCart((prevCart) => [...prevCart, number]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
