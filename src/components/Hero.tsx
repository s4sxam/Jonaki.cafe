import { motion } from 'motion/react';
import { ArrowRight, Coffee } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-jonaki-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jonaki-glow/10 text-jonaki-glow text-xs font-bold uppercase tracking-wider mb-6 border border-jonaki-glow/20">
            <Coffee className="w-3 h-3" />
            Now Brewing in Krishnanagar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-jonaki-text-primary mb-6">
            Welcome to <span className="text-jonaki-glow drop-shadow-[0_0_10px_rgba(209,255,77,0.5)]">Jonaki Café</span>
          </h1>
          
          <p className="text-lg md:text-xl text-jonaki-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Specialty coffee, delicious food, and a relaxing atmosphere. 
            Crafted with passion for the perfect moment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-jonaki-glow text-jonaki-bg rounded-2xl font-bold hover:bg-jonaki-gold transition-all flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto px-8 py-4 bg-jonaki-surface text-jonaki-text-primary border border-jonaki-glow/30 rounded-2xl font-bold hover:border-jonaki-glow transition-all"
            >
              Explore Menu
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-jonaki-text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-jonaki-glow to-transparent"></div>
      </motion.div>
    </section>
  );
}
