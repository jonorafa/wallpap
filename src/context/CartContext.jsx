'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'reka_cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCart(JSON.parse(saved));
    } catch {
      // ignore invalid/unavailable storage
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Skip until the initial load above has run, otherwise this overwrites
    // the saved cart with the empty initial state before it's read back.
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore unavailable storage
    }
  }, [cart, isLoaded]);

  const addToCart = (pack) => {
    setCart((prev) => [...prev, { id: pack.id, title: pack.title, price: pack.price, image: pack.images[0] }]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
