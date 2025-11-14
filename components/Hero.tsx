
import React from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 leading-tight">
          Freshness Delivered to Your Doorstep
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Experience the taste of nature with our hand-picked, farm-fresh vegetables. Healthy living starts here.
        </p>
        <button
          onClick={() => onNavigate('products')}
          className="bg-mint-dark text-white font-bold py-3 px-8 rounded-full hover:bg-mint-deep transition-transform duration-300 transform hover:scale-105"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
