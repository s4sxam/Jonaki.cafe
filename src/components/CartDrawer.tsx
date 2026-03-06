import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import { formatCurrency } from '../utils/formatCurrency';
import { generateWhatsAppLink } from '../utils/whatsappOrder';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-jonaki-bg z-[70] shadow-2xl border-l border-jonaki-glow/10 flex flex-col"
          >
            <div className="p-6 border-b border-jonaki-glow/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-jonaki-glow" />
                <h2 className="text-xl font-sans font-bold text-jonaki-text-primary">Your Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-jonaki-surface rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-jonaki-text-muted" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-jonaki-surface rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-jonaki-text-muted" />
                  </div>
                  <div>
                    <p className="text-jonaki-text-primary font-bold">Your cart is empty</p>
                    <p className="text-jonaki-text-muted text-sm">Add some items from our menu to get started.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-jonaki-glow font-bold text-sm hover:underline"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const menuItem = menuData.find((m) => m.id === item.itemId);
                  if (!menuItem) return null;
                  return (
                    <div key={item.itemId} className="flex gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-jonaki-text-primary">{menuItem.name}</h4>
                        <p className="text-jonaki-text-muted text-sm mb-2">{formatCurrency(menuItem.price)}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-jonaki-glow/20 rounded-lg bg-jonaki-surface">
                            <button 
                              onClick={() => updateQuantity(item.itemId, -1)}
                              className="p-1 hover:text-jonaki-glow text-jonaki-text-muted"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-jonaki-text-primary">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.itemId, 1)}
                              className="p-1 hover:text-jonaki-glow text-jonaki-text-muted"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.itemId)}
                            className="text-xs text-jonaki-text-muted hover:text-jonaki-gold font-bold"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-bold text-jonaki-glow">
                          {formatCurrency(menuItem.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-jonaki-glow/10 bg-jonaki-surface space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-jonaki-text-secondary font-bold">Total Amount</span>
                  <span className="text-2xl font-mono font-bold text-jonaki-gold">{formatCurrency(totalPrice)}</span>
                </div>
                <a
                  href={generateWhatsAppLink(cart, menuData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-jonaki-glow text-jonaki-bg rounded-2xl font-bold hover:bg-jonaki-gold transition-all flex items-center justify-center gap-2 shadow-lg shadow-jonaki-glow/10"
                >
                  <MessageCircle className="w-5 h-5" />
                  Checkout via WhatsApp
                </a>
                <p className="text-[10px] text-jonaki-text-muted text-center uppercase tracking-wider font-bold">
                  Secure checkout via WhatsApp Business
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
