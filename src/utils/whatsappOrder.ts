import { MenuItem } from "../data/menuData";

interface CartItem {
  itemId: number;
  quantity: number;
}

export const generateWhatsAppLink = (cart: CartItem[], menu: MenuItem[]): string => {
  const phoneNumber = "919339577835";
  let message = "Hello, I would like to order:\n\n";
  let total = 0;

  cart.forEach((item) => {
    const menuItem = menu.find((m) => m.id === item.itemId);
    if (menuItem) {
      message += `${menuItem.name} x${item.quantity}\n`;
      total += menuItem.price * item.quantity;
    }
  });

  message += `\nTotal ₹${total}`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
