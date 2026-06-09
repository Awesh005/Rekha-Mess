import { useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Home, Truck, CircleDollarSign } from 'lucide-react';
import WeeklyMenu from './components/WeeklyMenu';

export default function App() {
  const whatsappNumber = "919572278257";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-rekha-gold selection:text-rekha-maroon">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-12 pb-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2000&auto=format&fit=crop" 
            alt="Traditional Indian Food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rekha-maroon/90 via-rekha-maroon/80 to-rekha-cream"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative mb-6 mt-8 md:mb-8 md:mt-12">
            {/* Steam Animation SVGs */}
            <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-10 pointer-events-none transform scale-90 md:scale-100">
              <svg className="animate-steam-1 mt-2" width="12" height="40" viewBox="0 0 12 40" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 38 C 0 28, 12 18, 6 2" />
              </svg>
              <svg className="animate-steam-2" width="12" height="40" viewBox="0 0 12 40" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round">
                <path d="M6 38 C 0 28, 12 18, 6 2" />
              </svg>
              <svg className="animate-steam-3 mt-3" width="12" height="40" viewBox="0 0 12 40" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 38 C 0 28, 12 18, 6 2" />
              </svg>
            </div>

            <div className="w-16 h-16 md:w-32 md:h-32 bg-rekha-cream rounded-full flex items-center justify-center p-2 shadow-2xl border-4 border-rekha-gold relative z-20">
              <span className="text-3xl md:text-7xl text-rekha-maroon" style={{fontFamily: 'sans-serif'}}>ॐ</span>
            </div>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-rekha-cream mb-4 drop-shadow-lg tracking-tight">
            Rekha Mess
          </h1>
          <div className="flex items-center gap-2 text-rekha-gold mb-6 font-medium text-base md:text-xl bg-rekha-maroon-dark/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm border border-rekha-gold/30">
            <MapPin size={18} className="md:w-5 md:h-5" />
            <p>Amar Chowk, Chutia, Ranchi</p>
          </div>

          <p className="font-serif text-xl md:text-3xl text-rekha-cream mb-10 md:mb-12 italic leading-relaxed max-w-2xl text-shadow-sm px-2">
            "Ghar Ka Bana Khana —<br/><span className="text-rekha-gold font-semibold">Swad, Swachh Aur Bharpet</span>"
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={18} className="md:w-6 md:h-6" />
              WhatsApp Order
            </a>
            <a 
              href="#menu" 
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-rekha-gold hover:text-rekha-maroon border-2 border-rekha-gold text-rekha-gold px-5 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg transition-all shadow-lg backdrop-blur-sm"
            >
              See Weekly Menu
            </a>
          </div>
        </div>

        {/* Decorative Bottom Pattern (SVG) */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0yMCAwTDRwIDIwIDIwIDQwIDQwIDIwIDIweiIgZmlsbD0iI2Q0YWYzNyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20 z-10"></div>
      </section>

      {/* 2. About / USP Section */}
      <section className="py-12 md:py-20 px-4 relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="about-card reveal delay-100">
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-xl border-t-8 border-rekha-maroon flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rekha-cream text-rekha-maroon rounded-full flex items-center justify-center mb-3 md:mb-6">
                  <Home size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-lg md:text-2xl font-bold mb-2 md:mb-3">Ghar Jaisa Khana</h3>
                <p className="text-sm md:text-base text-gray-600">Freshly prepared, hygienic home-style meals with the perfect daily rotating menu.</p>
              </div>
            </div>
            
            <div className="about-card reveal delay-200">
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-xl border-t-8 border-rekha-gold flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rekha-cream text-rekha-gold rounded-full flex items-center justify-center mb-3 md:mb-6">
                  <Truck size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-lg md:text-2xl font-bold mb-2 md:mb-3">Free Home Delivery</h3>
                <p className="text-sm md:text-base text-gray-600">Hot meals delivered straight to your door, directly in Ranchi local areas.</p>
              </div>
            </div>

            <div className="about-card reveal delay-300">
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-xl border-t-8 border-rekha-maroon flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-2 h-full">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-rekha-cream text-rekha-maroon rounded-full flex items-center justify-center mb-3 md:mb-6">
                  <CircleDollarSign size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-serif text-lg md:text-2xl font-bold mb-2 md:mb-3">Only ₹2499/month</h3>
                <p className="text-sm md:text-base text-gray-600">Unbeatable value. Two substantial meals a day for the entire month.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Weekly Menu Section */}
      <section id="menu" className="menu-section py-16 md:py-20 px-4 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0yMCAwTDRwIDIwIDIwIDQwIDQwIDIwIDIweiIgZmlsbD0iIzdiMWExYSIvPgo8L3N2Zz4=')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16 reveal delay-100">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-rekha-maroon mb-2 md:mb-4">Our Weekly Menu</h2>
            <div className="w-16 md:w-24 h-1 bg-rekha-gold mx-auto rounded-full mb-3 md:mb-6"></div>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto px-4">Delicious variety every single day. Prepared fresh locally.</p>
          </div>
          
          <div className="reveal delay-200">
            <WeeklyMenu />
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-rekha-maroon relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop" 
            alt="Spices background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto relative z-10 pricing-card reveal delay-100">
          <div className="bg-rekha-cream rounded-3xl p-6 md:p-12 text-center shadow-2xl border border-rekha-gold/20 transform md:scale-105">
            <div className="inline-block bg-rekha-gold/20 text-rekha-maroon font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-xs md:text-base">
              Monthly Subscription
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-rekha-maroon mb-3 md:mb-6">
              Sirf <span className="text-rekha-gold drop-shadow-sm">₹2499</span><span className="text-lg md:text-2xl text-gray-500 font-sans">/Month</span>
            </h2>
            <p className="text-base md:text-2xl font-medium text-gray-700 mb-2">Dinner + Lunch</p>
            <p className="text-sm md:text-lg text-gray-500 mb-6 md:mb-10 flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rekha-gold"></span> Free Delivery
              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rekha-gold ml-2"></span> 7 Days a Week
            </p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle size={20} className="md:w-7 md:h-7" />
              Book Your Tiffin Now
            </a>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-16 reveal delay-100">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-rekha-maroon mb-2 md:mb-4">Contact Us</h2>
            <div className="w-16 md:w-24 h-1 bg-rekha-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4 md:space-y-8 bg-rekha-cream p-5 md:p-10 rounded-2xl reveal delay-200">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3 md:mb-6 text-rekha-maroon">Get in Touch</h3>
              
              <a href="tel:+919572278257" className="flex items-start gap-4 md:gap-5 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-rekha-maroon/10 text-rekha-maroon rounded-full flex items-center justify-center shrink-0 group-hover:bg-rekha-maroon group-hover:text-white transition-colors">
                  <Phone size={18} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-0.5 md:mb-1">Call Us Anywhere</p>
                  <p className="text-base md:text-xl font-bold text-gray-900">+91 9572278257</p>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 md:gap-5 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle size={18} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-0.5 md:mb-1">Send a Message</p>
                  <p className="text-base md:text-xl font-bold text-gray-900">WhatsApp Us</p>
                </div>
              </a>

              <div className="flex items-start gap-4 md:gap-5 p-3 md:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-rekha-gold/20 text-rekha-gold rounded-full flex items-center justify-center shrink-0 group-hover:bg-rekha-gold group-hover:text-white transition-colors">
                  <MapPin size={18} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-0.5 md:mb-1">Visit or Delivery Location</p>
                  <p className="text-sm md:text-lg font-semibold text-gray-800 leading-tight">Amar Chowk, Chutia<br/>Ranchi, Jharkhand</p>
                </div>
              </div>
            </div>

            <div className="h-[250px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-rekha-cream reveal delay-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14652.883907727402!2d85.33418535!3d23.3512301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e3c3ac8ba913%3A0xe67ae05d7621183c!2sChutia%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1709664567280!5m2!1sen!2sin" 
                title="Google Map location for Amar Chowk Chutia Ranchi"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rekha-maroon-dark py-8 px-4 text-center border-t border-rekha-gold/20 text-rekha-cream">
        <p className="font-serif italic mb-2 text-lg">"Swad, Swachh Aur Bharpet"</p>
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Rekha Mess. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="wa-btn-container group relative z-[999]">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          aria-label="Contact on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:left-full before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-l-white">
          Order on WhatsApp
        </span>
      </div>
    </div>
  );
}

