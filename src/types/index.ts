export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'new' | 'second-hand';
  inStock: boolean;
  specifications: {
    storage: string;
    ram: string;
    camera: string;
    battery: string;
    display: string;
  };
  emiAvailable?: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
}

export interface ServiceRequest {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  serviceType: string;
  deviceModel: string;
  issue: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}