import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, menuData } from '../data/menuData';

interface CartItem {
  itemId: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, delta: number) => void;
  totalPrice: number;
  totalItems: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (itemId: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.itemId === itemId);
      if (existing) {
        return prev.map((item) =>
          item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { itemId, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((item) => item.itemId !== itemId));
  };

  const updateQuantity = (itemId: number, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.itemId === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const totalPrice = cart.reduce((sum, item) => {
    const menuItem = menuData.find((m) => m.id === item.itemId);
    return sum + (menuItem?.price || 0) * item.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
