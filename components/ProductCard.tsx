
import React from 'react';
import type { Product } from '../types';
import { CartIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-mint-deep mb-2">{product.name}</h3>
        <p className="text-gray-500 font-bold mb-4">{product.price}</p>
        <button className="w-full flex items-center justify-center bg-mint text-mint-deep font-bold py-2 px-4 rounded-full hover:bg-mint-dark hover:text-white transition-colors duration-300">
          <CartIcon className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
