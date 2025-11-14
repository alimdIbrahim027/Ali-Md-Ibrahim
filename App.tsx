
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import type { Product } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Broccoli',
      price: '$2.99/lb',
      imageUrl: 'https://picsum.photos/id/1080/400/400',
    },
    {
      id: 2,
      name: 'Heirloom Tomatoes',
      price: '$3.49/lb',
      imageUrl: 'https://picsum.photos/id/106/400/400',
    },
    {
      id: 3,
      name: 'Crisp Carrots',
      price: '$1.99/bunch',
      imageUrl: 'https://picsum.photos/id/292/400/400',
    },
    {
      id: 4,
      name: 'Sweet Bell Peppers',
      price: '$2.79/lb',
      imageUrl: 'https://picsum.photos/id/1015/400/400',
    },
    {
      id: 5,
      name: 'Fresh Spinach',
      price: '$2.49/bag',
      imageUrl: 'https://picsum.photos/id/1060/400/400',
    },
    {
      id: 6,
      name: 'Zucchini Squash',
      price: '$1.79/lb',
      imageUrl: 'https://picsum.photos/id/1078/400/400',
    },
    {
      id: 7,
      name: 'Red Onions',
      price: '$1.29/lb',
      imageUrl: 'https://picsum.photos/id/119/400/400',
    },
    {
      id: 8,
      name: 'Avocado',
      price: '$1.99/each',
      imageUrl: 'https://picsum.photos/id/219/400/400',
    },
  ];

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-mint-light font-sans text-mint-deep">
      <Header onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={setCurrentPage} />
            <FeaturedProducts products={featuredProducts} />
            <WhyChooseUs />
            <ContactForm />
          </>
        ) : (
          <ProductPage products={products} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
