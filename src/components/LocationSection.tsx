export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-jonaki-bg relative">
      <div className="section-divider absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-jonaki-gold mb-4 uppercase tracking-tight">Visit Us</h2>
          <p className="text-jonaki-text-secondary max-w-xl mx-auto">
            Located in the heart of Krishnanagar, we're the perfect spot for your daily caffeine fix.
          </p>
        </div>

        <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden border border-jonaki-glow/20 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.61869385627!2d88.4975231!3d23.2387777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e30029e247c7%3A0x88989504870586f4!2sJonaki%20Cafe!5e0!3m2!1sen!2sin!4v1709690000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Jonaki Cafe Location"
          ></iframe>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-jonaki-surface rounded-3xl border border-jonaki-glow/10">
          <div>
            <h4 className="font-bold text-jonaki-text-primary mb-1">Jonaki Café</h4>
            <p className="text-jonaki-text-muted">Krishnanagar, West Bengal, India</p>
          </div>
          <a 
            href="https://maps.app.goo.gl/ikXEMnJWkPz9ddqt9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-jonaki-surface text-jonaki-glow border border-jonaki-glow/30 rounded-xl font-bold hover:bg-jonaki-glow hover:text-jonaki-bg transition-all flex items-center gap-2"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
