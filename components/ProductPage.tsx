
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductPageProps {
  products: Product[];
}

const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  return (
    <section id="products-page" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mint-deep font-serif">Our Products</h2>
          <p className="text-lg text-gray-600 mt-2">Fresh, organic, and ready for your kitchen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
