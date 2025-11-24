'use client';
import React, { createContext, useContext, useState } from 'react';

// ✅ Define product and cart item types
// types.ts

export interface Product {
  id: number | string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image?: string;
  description?: string;
  [key: string]: unknown; // 👈 safer than 'any'
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ClickedCard extends Product {
  count: number;
}


// ✅ Define context type
interface CardContextType {
  clickedCards: ClickedCard[];
  toggleCard: (product: ClickedCard) => void;
  removeCards: (id: number | string) => void;
  isActive: string | number | null;
  setIsActive: React.Dispatch<React.SetStateAction<string | number | null>>;
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  total: number;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clickedCards, setClickedCards] = useState<ClickedCard[]>([]);
  const [isActive, setIsActive] = useState<string | number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Track clicked cards and count clicks
  const toggleCard = (product: ClickedCard) => {
    setClickedCards((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  // ✅ Remove clicked card
  const removeCards = (id: number | string) => {
    setClickedCards((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Add to cart
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (id: number | string) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ Update quantity
  const updateQuantity = (id: number | string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(quantity, 1) } : p
      )
    );
  };

  // ✅ Calculate total
  const total = cartItems.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <CardContext.Provider
      value={{
        clickedCards,
        toggleCard,
        removeCards,
        isActive,
        setIsActive,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// ✅ Custom hook
export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
};
