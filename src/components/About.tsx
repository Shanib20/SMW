import React from 'react';
import { MapPin, Clock, Phone, Users, Award, Heart, Star, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Aboobacker Sidheeque",
      role: "Founder & Owner",
      image: "/siddiq.jpg",
      description: "Visionary leader with 10+ years in mobile technology"
    },
    {
      name: "Zainudheen BS",
      role: "Sales Specialist",
      image: "zainu.jpg",
      description: "Expert in customer service and product knowledge"
    },
    {
      name: "Musthak",
      role: "Technical Support",
      image: "musthu.jpg",
      description: "Specialist in mobile repairs and technical solutions"
    }
  ];

  const achievements = [
    { icon: Users, number: "1000+", label: "Happy Customers", color: "blue" },
    { icon: Award, number: "10+", label: "Years Experience", color: "green" },
    { icon: Star, number: "4.9", label: "Customer Rating", color: "yellow" },
    { icon: TrendingUp, number: "500+", label: "Devices Repaired", color: "purple" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100 mb-6">
            <img 
              src="/SMW.jpg" 
              alt="Selection Mobile World" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-bold text-blue-800">About Selection Mobile World</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From a small shop to Kerala's most trusted mobile destination - serving the community 
            with quality products and exceptional service since 2015.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">A Journey of Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in <span className="font-bold text-blue-600">2015</span> with a vision to make quality mobile technology 
                accessible to everyone in Chattanchal and surrounding areas, Selection Mobile World has grown from a 
                small shop to become the most trusted mobile destination in Kasaragod.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a simple belief: every customer deserves the best products, honest pricing, 
                and exceptional service. Today, we're proud to have served over <span className="font-bold text-green-600">1000+ satisfied customers</span> 
                and built lasting relationships in our community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking for the latest flagship phone, an affordable second-hand device, or need 
                professional repair services, our experienced team is committed to providing you with solutions 
                that exceed your expectations.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  >
                    <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${
                      achievement.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      achievement.color === 'green' ? 'from-green-500 to-green-600' :
                      achievement.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                      'from-purple-500 to-purple-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="animate-fade-in-right">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Visit Our Store</h3>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Near Grampanchayat Chattanchal<br />
                      Kasaragod, P.O Thekkil<br />
                      Kerala - 671541, India
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-green-50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-green-600">Open 7 Days a Week</span><br />
                      Daily: 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-purple-50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contact Numbers</h4>
                    <p className="text-gray-700 leading-relaxed">
                      <a href="tel:9447285496" className="hover:text-purple-600 transition-colors">📞 9447285496</a><br />
                      <a href="tel:7994956131" className="hover:text-purple-600 transition-colors">📞 79949 56131</a><br />
                      <span className="text-green-600 font-medium">WhatsApp Available</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <h4 className="font-bold text-gray-900">Our Commitment</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to providing genuine products, transparent pricing, and excellent customer service. 
                  Your satisfaction and trust are our highest priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Selection Mobile World's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Selection Mobile World
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h4>
              <p className="text-gray-600 leading-relaxed">
                We only sell genuine products with proper warranty and quality certification. 
                Every device is thoroughly tested before reaching our customers.
              </p>
            </div>

            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h4>
              <p className="text-gray-600 leading-relaxed">
                Your needs and satisfaction are at the center of everything we do. 
                We build lasting relationships based on trust and exceptional service.
              </p>
            </div>

            <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Community Focus</h4>
              <p className="text-gray-600 leading-relaxed">
                We are proud to serve our local community in Kasaragod and build lasting relationships 
                that go beyond just business transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;