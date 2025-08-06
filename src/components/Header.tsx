import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Smartphone, Mail } from 'lucide-react';
import QuoteForm from './QuoteForm';
import CallbackRequestForm from './CallbackRequestForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Service Areas', 
      href: '/service-areas',
      submenu: [
        { name: 'Lincoln Township', href: '/service-areas/lincoln-township' },
        { name: 'Brown Township', href: '/service-areas/brown-township' },
        { name: 'Middle Township', href: '/service-areas/middle-township' },
        { name: 'Washington Township', href: '/service-areas/washington-township' },
        { name: 'Danville, IN', href: '/service-areas/danville' },
        { name: 'Avon, IN', href: '/service-areas/avon' },
        { name: 'Noblesville, IN', href: '/service-areas/noblesville' },
        { name: 'Plainfield, IN', href: '/service-areas/plainfield' },
        { name: 'Carmel, IN', href: '/service-areas/carmel' },
        { name: 'Westfield, IN', href: '/service-areas/westfield' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Mobile Contact Banner */}
      <div className="md:hidden bg-blue-500 py-1">
        <div className="mx-auto max-w-7xl px-4 flex justify-center space-x-10">
          <a 
            href="tel:+13175550123" 
            className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Call us</span>
          </a>
          <a
            href="sms:+13175550123?body=I need a pressure wash!"
            className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors"
            aria-label="Send text message"
          >
            <Smartphone className="h-4 w-4" />
            <span className="text-sm font-medium">Text us</span>
          </a>
          <a
            href="mailto:service@brownsburgpressurewashing.com?subject=I need a pressure wash!"
            className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors"
            aria-label="Email us"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Email us</span>
          </a>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - serves as home link */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/mml.jpeg" alt="Brownsburg Pressure Washing Logo" className="h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-navy-900">Brownsburg</span>
              <span className="text-sm font-semibold text-blue-500 -mt-1">Pressure Washing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      to={item.href}
                      className={`text-navy-900 hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.href || location.pathname.startsWith('/service-areas')
                          ? 'text-blue-500'
                          : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-navy-900 hover:bg-blue-50 hover:text-blue-500"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-500'
                        : 'text-navy-900 hover:text-blue-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact Options */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="tel:+13175550123" 
              className="text-navy-900 hover:text-blue-500 transition-colors flex items-center text-sm"
            >
              <Phone className="h-4 w-4 mr-1" />
              (317) 555-0123
            </a>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded text-base"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy-900 hover:text-blue-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <Link
                        to={item.href}
                        className={`text-navy-900 block px-3 py-2 text-base font-medium ${
                          location.pathname === item.href || location.pathname.startsWith('/service-areas')
                            ? 'text-blue-500'
                            : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-600 block px-6 py-2 text-sm hover:text-blue-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-500'
                          : 'text-navy-900 hover:text-blue-500'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex items-center px-3">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCallbackFormOpen(true);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium text-blue-500 hover:text-blue-600"
                  >
                    Request Call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Quote Form Modal */}
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />

      {/* Callback Request Form Modal */}
      <CallbackRequestForm
        isOpen={isCallbackFormOpen}
        onClose={() => setIsCallbackFormOpen(false)}
      />
    </header>
  );
};

export default Header;