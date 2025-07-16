import React from 'react';
import { Product } from '../types';
import { ShoppingCart, CreditCard, Tag, Star, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-blue-200">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
            product.category === 'new' 
              ? 'bg-green-100/90 text-green-800 border-green-200' 
              : 'bg-orange-100/90 text-orange-800 border-orange-200'
          } transform group-hover:scale-110 transition-transform duration-300`}>
            {product.category === 'new' ? '✨ New' : '💎 Pre-owned'}
          </span>
        </div>

        {/* EMI Badge */}
        {product.emiAvailable && (
          <div className="absolute top-4 right-4">
            <span className="bg-blue-100/90 text-blue-800 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 backdrop-blur-sm border border-blue-200 transform group-hover:scale-110 transition-transform duration-300">
              <CreditCard className="h-3 w-3" />
              <span>EMI</span>
            </span>
          </div>
        )}

        {/* Stock Status Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
              Out of Stock
            </span>
          </div>
        )}

        {/* Hover Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Brand and Name */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-600 font-bold uppercase tracking-wide">{product.brand}</p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
        </div>

        {/* Specifications */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600 font-medium">Storage</span>
              </div>
              <p className="font-bold text-gray-900 mt-1">{product.specifications.storage}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600 font-medium">RAM</span>
              </div>
              <p className="font-bold text-gray-900 mt-1">{product.specifications.ram}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-600 font-medium">Camera</span>
            </div>
            <p className="font-bold text-gray-900 mt-1">{product.specifications.camera}</p>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.originalPrice && (
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded-lg">
                Save ₹{(product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button 
            className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 ${
              product.inStock
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            {product.inStock && <Zap className="h-4 w-4" />}
          </button>
          
          {product.emiAvailable && product.inStock && (
            <button className="w-full py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              EMI from ₹{Math.round(product.price / 12).toLocaleString()}/month
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;