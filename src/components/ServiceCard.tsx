import React from 'react';
import { Service } from '../types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onBookService: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookService }) => {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <IconComponent className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
          <p className="text-blue-600 font-medium">{service.price}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <button
        onClick={onBookService}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Book Service
      </button>
    </div>
  );
};

export default ServiceCard;