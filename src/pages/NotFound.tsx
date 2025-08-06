import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search, Phone, Droplets, MessageSquare } from 'lucide-react';
import CallbackRequestForm from '../components/CallbackRequestForm';

const NotFound = () => {
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const popularPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Return to our homepage' },
    { name: 'Services', path: '/services', icon: Search, description: 'Browse our pressure washing services' },
    { name: 'House Washing', path: '/services/house-washing', icon: Home, description: 'Professional house cleaning services' },
    { name: 'Contact Us', path: '/contact', icon: Phone, description: 'Get your free quote today' }
  ];

  const townships = [
    { name: 'Lincoln Township', path: '/service-areas/lincoln-township', description: 'Serving Clermont Heights and southeastern Brownsburg' },
    { name: 'Brown Township', path: '/service-areas/brown-township', description: 'Northern quarter with highway access' },
    { name: 'Middle Township', path: '/service-areas/middle-township', description: 'Western communities including Tilden and Maplewood' },
    { name: 'Washington Township', path: '/service-areas/washington-township', description: 'Southern edge coverage' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Droplets className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-6xl font-bold text-navy-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-navy-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, 
            deleted, or you may have entered an incorrect URL.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            What would you like to do?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <Link
                  key={index}
                  to={page.path}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-2">{page.name}</h4>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Looking for Services in Your Township?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {townships.map((township, index) => (
              <Link
                key={index}
                to={township.path}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-navy-900 group-hover:text-blue-500 transition-colors">
                    {township.name}
                  </h4>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-gray-600 text-sm">{township.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Popular Searches
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'House Washing',
              'Roof Cleaning', 
              'Driveway Cleaning',
              'Deck Cleaning',
              'Commercial Cleaning',
              'Pressure Washing Prices',
              'Free Quote',
              'Brownsburg Services'
            ].map((term, index) => (
              <Link
                key={index}
                to="/services"
                className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors border border-gray-200"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-navy-900 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help! Contact us directly and we'll get you the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13173504926"
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (317) 350-4926
            </a>
            <a
              href="sms:+13173504926?body=I%20need%20a%20pressure%20washing%20quote%20quick!"
              className="border-2 border-green-500 text-green-400 px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Text for Quick Quote
            </a>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="border-2 border-yellow-500 text-yellow-400 px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Call Back
            </button>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mt-16 text-center">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span>404 - Page Not Found</span>
          </nav>
        </div>
      </div>

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default NotFound;