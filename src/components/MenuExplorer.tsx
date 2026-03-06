import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Droplet, Utensils, Cake, GlassWater } from 'lucide-react';
import { menuData } from '../data/menuData';
import MenuItem from './MenuItem';

const categories = [
  { name: 'Coffee', icon: Coffee },
  { name: 'Brews', icon: Droplet },
  { name: 'Mocktails', icon: GlassWater },
  { name: 'Food', icon: Utensils },
  { name: 'Desserts', icon: Cake },
];

export default function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-jonaki-bg relative">
      <div className="section-divider absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-jonaki-gold mb-4 uppercase tracking-tight">Our Menu</h2>
          <p className="text-jonaki-text-secondary max-w-xl mx-auto">
            From artisanal brews to gourmet bites, discover our carefully curated selection.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all border
                  ${isActive 
                    ? 'bg-jonaki-surface text-jonaki-glow border-jonaki-glow shadow-[0_0_15px_rgba(209,255,77,0.2)]' 
                    : 'bg-jonaki-surface/50 text-jonaki-text-muted border-transparent hover:border-jonaki-glow/30 hover:text-jonaki-text-secondary'
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-jonaki-glow' : ''}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MenuItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
