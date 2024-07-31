import { useState, useEffect, useCallback } from 'react';
import { ProductWithQuantityType } from '../types/apiTypes';

function useCart() {
  const [cart, setCart] = useState<ProductWithQuantityType[]>(() => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  });

  const [cartSize, setCartSize] = useState<number>(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');

    return initialCart
      .reduce((acc: number, curr: ProductWithQuantityType) => acc + curr.quantity, 0);
  });

  const [errorEditCart, setErrorEditCart] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartSize', JSON.stringify(cartSize));
  }, [cart, cartSize]);

  const handleAddToCart = useCallback((product: ProductWithQuantityType) => {
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingCartItemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[existingCartItemIndex] = {
          ...newCart[existingCartItemIndex],
          quantity: newCart[existingCartItemIndex].quantity + 1,
        };
        return newCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }, []);

  const incrementItemQuantity = useCallback((id: string, stock: number) => {
    setErrorEditCart(false);
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity < stock) {
            return { ...item, quantity: item.quantity + 1 };
          }
          setErrorEditCart(true);
          return item;
        }
        return item;
      });
      return updatedCart;
    });
  }, []);

  const decrementItemQuantity = useCallback((id: string) => {
    setCart((prevCart) => prevCart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 1) };
      }
      return item;
    }));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    setCartSize(0);
  }, []);

  useEffect(() => {
    const newCartSize = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartSize(newCartSize);
  }, [cart]);

  return {
    cart,
    cartSize,
    handleAddToCart,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    clearCart,
    errorEditCart,
    setErrorEditCart,
  };
}

export default useCart;
