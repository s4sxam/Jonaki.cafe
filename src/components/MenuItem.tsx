import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';
import { formatCurrency } from '../utils/formatCurrency';
import { useCart } from '../context/CartContext';

interface Props {
  item: MenuItemType;
}

export default function MenuItem({ item }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="bg-jonaki-surface p-5 rounded-2xl border border-jonaki-glow/10 hover:border-jonaki-glow/40 transition-all group h-full flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-sans font-bold text-jonaki-text-primary group-hover:text-jonaki-glow transition-colors">
          {item.name}
        </h3>
        <span className="font-mono text-sm font-bold text-jonaki-gold">
          {formatCurrency(item.price)}
        </span>
      </div>
      <p className="text-jonaki-text-muted text-sm mb-6 leading-relaxed flex-1">
        {item.description}
      </p>
      <button
        onClick={() => addToCart(item.id)}
        className="w-full py-2.5 bg-jonaki-glow text-jonaki-bg rounded-xl font-bold hover:bg-jonaki-gold transition-all flex items-center justify-center gap-2 shadow-sm"
      >
        <Plus className="w-4 h-4" />
        Add to cart
      </button>
    </div>
  );
}
