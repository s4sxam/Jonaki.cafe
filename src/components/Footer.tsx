import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jonaki-bg text-jonaki-text-primary py-16 relative">
      <div className="section-divider absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-jonaki-glow" />
              <span className="font-sans font-bold text-2xl tracking-tight">Jonaki Café</span>
            </div>
            <p className="text-jonaki-text-muted max-w-sm leading-relaxed">
              Your neighborhood sanctuary for specialty coffee and artisanal food. 
              We believe in quality ingredients and the art of slow brewing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-jonaki-text-muted mb-6">Quick Links</h4>
            <ul className="space-y-4 text-jonaki-text-secondary">
              <li><a href="#menu" className="hover:text-jonaki-glow transition-colors">Menu</a></li>
              <li><a href="#contact" className="hover:text-jonaki-glow transition-colors">Contact</a></li>
              <li><a href="#location" className="hover:text-jonaki-glow transition-colors">Location</a></li>
              <li><a href="#" className="hover:text-jonaki-glow transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-jonaki-text-muted mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-jonaki-surface flex items-center justify-center hover:bg-jonaki-glow hover:text-jonaki-bg transition-all border border-jonaki-glow/10">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-jonaki-surface flex items-center justify-center hover:bg-jonaki-glow hover:text-jonaki-bg transition-all border border-jonaki-glow/10">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/102547795263995/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-jonaki-surface flex items-center justify-center hover:bg-jonaki-glow hover:text-jonaki-bg transition-all border border-jonaki-glow/10">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-jonaki-glow/10 flex flex-col md:flex-row justify-between items-center gap-6 text-jonaki-text-muted text-sm">
          <p>© {currentYear} Jonaki Café. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-jonaki-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
