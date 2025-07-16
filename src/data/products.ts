import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    price: 79999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '256GB',
      ram: '8GB',
      camera: '50MP Triple',
      battery: '4000mAh',
      display: '6.2" Dynamic AMOLED'
    },
    emiAvailable: true
  },
  {
    id: '2',
    name: 'iPhone 15',
    brand: 'Apple',
    price: 79900,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '128GB',
      ram: '6GB',
      camera: '48MP Dual',
      battery: '3349mAh',
      display: '6.1" Super Retina XDR'
    }
  },
  {
    id: '3',
    name: 'Oppo Reno 11',
    brand: 'Oppo',
    price: 32999,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '256GB',
      ram: '8GB',
      camera: '50MP Triple',
      battery: '5000mAh',
      display: '6.7" AMOLED'
    }
  },
  {
    id: '4',
    name: 'Vivo V30',
    brand: 'Vivo',
    price: 41999,
    image: 'https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '256GB',
      ram: '8GB',
      camera: '50MP OIS',
      battery: '5000mAh',
      display: '6.78" AMOLED'
    }
  },
  {
    id: '5',
    name: 'Realme 12 Pro',
    brand: 'Realme',
    price: 25999,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '256GB',
      ram: '8GB',
      camera: '50MP OIS',
      battery: '5000mAh',
      display: '6.7" AMOLED'
    }
  },
  {
    id: '6',
    name: 'Redmi Note 13',
    brand: 'Redmi',
    price: 18999,
    image: 'https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'new',
    inStock: true,
    specifications: {
      storage: '128GB',
      ram: '6GB',
      camera: '108MP Triple',
      battery: '5000mAh',
      display: '6.67" AMOLED'
    }
  },
  {
    id: '7',
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    price: 35999,
    originalPrice: 59999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'second-hand',
    inStock: true,
    specifications: {
      storage: '128GB',
      ram: '8GB',
      camera: '50MP Triple',
      battery: '3700mAh',
      display: '6.1" Dynamic AMOLED'
    }
  },
  {
    id: '8',
    name: 'iPhone 13',
    brand: 'Apple',
    price: 45999,
    originalPrice: 69900,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'second-hand',
    inStock: true,
    specifications: {
      storage: '128GB',
      ram: '6GB',
      camera: '12MP Dual',
      battery: '3240mAh',
      display: '6.1" Super Retina XDR'
    }
  }
];