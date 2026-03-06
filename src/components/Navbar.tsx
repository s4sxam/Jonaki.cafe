import { motion } from 'motion/react';
import { ShoppingCart, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-jonaki-bg/80 backdrop-blur-md border-b border-jonaki-glow/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Coffee className="w-6 h-6 text-jonaki-glow" />
          <span className="font-sans font-bold text-xl tracking-tight text-jonaki-text-primary">Jonaki Café</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-jonaki-text-secondary">
          <button onClick={() => scrollToSection('menu')} className="hover:text-jonaki-glow transition-colors">Menu</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-jonaki-glow transition-colors">Contact</button>
          <button onClick={() => scrollToSection('location')} className="hover:text-jonaki-glow transition-colors">Location</button>
        </div>

        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-jonaki-surface rounded-full transition-colors group"
        >
          <ShoppingCart className="w-6 h-6 text-jonaki-text-secondary group-hover:text-jonaki-glow" />
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 bg-jonaki-glow text-jonaki-bg text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-jonaki-bg"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </div>
    </nav>
  );
}
