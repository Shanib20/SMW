import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about our products or services? We're here to help! 
            Contact us through any of the methods below or visit our store in Chattanchal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Store Address</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Selection Mobile World<br />
                    Near Grampanchayat Chattanchal<br />
                    Kasaragod, P.O Thekkil<br />
                    Kerala - 671541, India
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone & WhatsApp</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <a href="tel:9447285496" className="hover:text-green-600 transition-colors font-medium">
                        📞 9447285496
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:7994956131" className="hover:text-green-600 transition-colors font-medium">
                        📞 79949 56131
                      </a>
                    </p>
                    <p className="text-green-600 font-medium">💬 WhatsApp Available</p>
                  </div>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:selectionmobileworld@gmail.com" className="hover:text-purple-600 transition-colors font-medium">
                      selectionmobileworld@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg border border-gray-100">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-orange-600">Open 7 Days a Week</span><br />
                    Daily: 9:00 AM - 10:00 PM<br />
                    <span className="text-sm text-gray-500">No lunch break - Continuous service</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center border border-gray-200">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-700 mb-2">Find Us Easily</h4>
              <p className="text-gray-600 mb-4">
                Located in the heart of Chattanchal, easily accessible by all modes of transport
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                Get Directions
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-20 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-blue-200">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">Need Quick Support?</h4>
              <p className="text-gray-600 mb-6">Call us directly for immediate assistance</p>
              <a 
                href="tel:9447285496"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Call Now
              </a>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl text-center hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-green-200">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">WhatsApp Chat</h4>
              <p className="text-gray-600 mb-6">Get instant responses on WhatsApp</p>
              <a 
                href="https://wa.me/919447285496"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl text-center hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-purple-200">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-xl">Visit Our Store</h4>
              <p className="text-gray-600 mb-6">Experience our products in person</p>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 font-semibold">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;