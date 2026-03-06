import { Phone, Mail, Facebook, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-jonaki-bg relative">
      <div className="section-divider absolute top-0 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-jonaki-gold mb-6 uppercase tracking-tight">Get in Touch</h2>
            <p className="text-jonaki-text-secondary mb-10 leading-relaxed max-w-lg">
              Have questions or want to host an event? We'd love to hear from you. 
              Visit us or reach out through any of our channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jonaki-surface rounded-2xl flex items-center justify-center border border-jonaki-glow/20">
                  <Phone className="w-5 h-5 text-jonaki-glow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-jonaki-text-muted uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:09339577835" className="text-lg font-bold text-jonaki-text-primary hover:text-jonaki-glow transition-colors">
                    09339577835
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jonaki-surface rounded-2xl flex items-center justify-center border border-jonaki-glow/20">
                  <Mail className="w-5 h-5 text-jonaki-glow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-jonaki-text-muted uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:jonaki.krishnanagar@gmail.com" className="text-lg font-bold text-jonaki-text-primary hover:text-jonaki-glow transition-colors">
                    jonaki.krishnanagar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jonaki-surface rounded-2xl flex items-center justify-center border border-jonaki-glow/20">
                  <Facebook className="w-5 h-5 text-jonaki-glow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-jonaki-text-muted uppercase tracking-wider mb-1">Facebook</p>
                  <a 
                    href="https://www.facebook.com/102547795263995/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-jonaki-text-primary hover:text-jonaki-glow transition-colors"
                  >
                    Jonaki Café Official
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-jonaki-surface p-8 md:p-12 rounded-[32px] border border-jonaki-glow/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-6 h-6 text-jonaki-gold" />
              <h3 className="text-2xl font-sans font-bold text-jonaki-text-primary">Opening Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-jonaki-glow/10">
                <span className="font-bold text-jonaki-text-secondary">Monday - Friday</span>
                <span className="font-mono font-bold text-jonaki-glow text-sm">08:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-jonaki-glow/10">
                <span className="font-bold text-jonaki-text-secondary">Saturday</span>
                <span className="font-mono font-bold text-jonaki-glow text-sm">09:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-jonaki-text-secondary">Sunday</span>
                <span className="font-mono font-bold text-jonaki-glow text-sm">09:00 AM - 09:00 PM</span>
              </div>
            </div>

            <div className="mt-10 p-4 bg-jonaki-glow/5 rounded-2xl border border-jonaki-glow/20">
              <p className="text-jonaki-glow text-sm font-bold text-center">
                Join us for our weekend special brunch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
