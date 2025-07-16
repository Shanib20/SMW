import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Filter } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'new' | 'second-hand'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of new and pre-owned smartphones from top brands with 
            competitive prices and EMI options.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Filter by:</span>
          </div>
          
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="new">New Phones</option>
            <option value="second-hand">Pre-owned Phones</option>
          </select>

          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand === 'all' ? 'All Brands' : brand}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your filters.
            </p>
          </div>
        )}

        {/* EMI Info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">EMI Options Available</h3>
            <p className="text-lg text-gray-700 mb-6">
              Make your dream phone affordable with our flexible EMI plans through Samsung Finance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-blue-600 mb-2">6 Months EMI</h4>
                <p className="text-gray-600">Low interest rates</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-blue-600 mb-2">12 Months EMI</h4>
                <p className="text-gray-600">Easy monthly payments</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-blue-600 mb-2">24 Months EMI</h4>
                <p className="text-gray-600">Minimal monthly burden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;