import React, { useState } from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import ServiceForm from './ServiceForm';

const Services: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceRequest = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowForm(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mobile repair services with genuine parts and expert technicians. 
            We handle all types of mobile issues with care and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBookService={() => handleServiceRequest(service.id)}
            />
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Service Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Diagnosis</h4>
              <p className="text-gray-600 text-sm">Free diagnosis and cost estimation</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Approval</h4>
              <p className="text-gray-600 text-sm">Get approval before starting repair</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Repair</h4>
              <p className="text-gray-600 text-sm">Professional repair with genuine parts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">Quick delivery with warranty</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Service?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6">
              <div className="text-blue-600 text-3xl mb-4">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Turnaround</h4>
              <p className="text-gray-600 text-sm">Most repairs completed within 24 hours</p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-3xl mb-4">🔧</div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Technicians</h4>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-3xl mb-4">✅</div>
              <h4 className="font-semibold text-gray-900 mb-2">Genuine Parts</h4>
              <p className="text-gray-600 text-sm">Only original and high-quality replacement parts</p>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-3xl mb-4">🛡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Warranty</h4>
              <p className="text-gray-600 text-sm">Warranty on all repairs and parts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Form Modal */}
      {showForm && (
        <ServiceForm
          selectedServiceId={selectedService}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
};

export default Services;