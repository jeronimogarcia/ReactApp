import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, counter) => {
    const findProductIndex = products.findIndex(
      (productFind) => product.id === productFind.id
    );
    if (findProductIndex !== -1) {
      products[findProductIndex].quantity = counter;
    } else {
      products.push({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
        img: product.img,
        rate: product.rate,
        stock: product.stock,
        quantity: counter,
      });
    }
    setProducts([...products]);
  };

  const deleteProduct = (product) => {
    const updateProducts = products.filter(
      (productFilter) => product.id !== productFilter.id
    );
    setProducts(updateProducts);
  };

  const deleteCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ products, addProduct, deleteProduct, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
