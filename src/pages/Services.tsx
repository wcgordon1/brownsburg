import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Zap, Building, Fence, Eye, Shield, Clock, Star, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import CallbackRequestForm from '../components/CallbackRequestForm';

const Services = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: 'House Washing',
      description: 'Complete exterior cleaning for your home',
      features: [
        'Gentle soft wash technique',
        'Removes dirt, mold, and mildew',
        'Safe for all siding materials',
        'Restores curb appeal',
        'Protects your investment'
      ],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting at $200',
      link: '/services/house-washing'
    },
    {
      icon: Zap,
      title: 'Roof Cleaning',
      description: 'Professional roof cleaning and maintenance',
      features: [
        'Low-pressure soft wash method',
        'Removes algae and moss',
        'Extends roof lifespan',
        'Prevents damage',
        'Improves energy efficiency'
      ],
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting at $300',
      link: '/services/roof-cleaning'
    },
    {
      icon: ArrowRight,
      title: 'Driveway Cleaning',
      description: 'Deep cleaning for concrete and asphalt surfaces',
      features: [
        'Removes oil stains',
        'Eliminates dirt and grime',
        'Hot water treatment',
        'Restores original appearance',
        'Increases property value'
      ],
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting at $150',
      link: '/services/driveway-cleaning'
    },
    {
      icon: Fence,
      title: 'Deck & Fence Cleaning',
      description: 'Restore and protect your outdoor living spaces',
      features: [
        'Wood-safe cleaning solutions',
        'Removes weathering and stains',
        'Prepares for staining/sealing',
        'Extends material lifespan',
        'Enhances outdoor enjoyment'
      ],
      image: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Starting at $175',
      link: '/services/deck-fence-cleaning'
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional services for businesses',
      features: [
        'Scheduled maintenance programs',
        'Strip mall and office cleaning',
        'Parking lot maintenance',
        'Storefront restoration',
        'Flexible scheduling'
      ],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Custom pricing',
      link: '/services/commercial-cleaning'
    }
  ];

  const additionalServices = [
    'Concrete sealing',
    'Gutter cleaning',
    'Window washing',
    'Sidewalk cleaning',
    'Pool deck cleaning',
    'Graffiti removal'
  ];

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete liability and workers compensation coverage' },
    { icon: Star, title: 'Satisfaction Guaranteed', description: '100% satisfaction or we make it right' },
    { icon: Clock, title: 'Reliable Service', description: 'On-time service with respect for your schedule' }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional Pressure Washing Services",
          "description": "Comprehensive pressure washing services including house washing, roof cleaning, driveway cleaning, deck & fence cleaning, and commercial cleaning in Brownsburg, IN.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Brownsburg Pressure Washing",
            "url": "https://brownsburgpressurewashing.com",
            "telephone": "(317) 350-4926",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brownsburg",
              "addressRegion": "IN",
              "postalCode": "46112",
              "addressCountry": "US"
            }
          },
          "areaServed": [
            "Lincoln Township",
            "Brown Township",
            "Middle Township", 
            "Washington Township",
            "Brownsburg, IN",
            "Hendricks County"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pressure Washing Services",
            "itemListElement": services.map(service => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "image": service.image
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": service.price.includes('$') ? service.price.replace(/[^\d]/g, '') : "0",
                "priceCurrency": "USD"
              }
            }))
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Brownsburg Pressure Washing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive pressure washing services to meet all your property maintenance needs. 
            Each service is performed with the highest standards of quality and care.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{badge.title}</h3>
                  <p className="text-gray-600 text-sm">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Services */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">{service.title}</h2>
                      <p className="text-blue-500 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={service.link}
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium inline-flex items-center justify-center"
                    >
                      Learn More About This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setIsQuoteFormOpen(true)}
                      className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    >
                      Get Quote for This Service
                    </button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={`Professional ${service.title.toLowerCase()} service results`}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white my-20">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              See Our Amazing Results
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't just take our word for it. View our before and after gallery to see the dramatic 
              transformations we achieve with our professional pressure washing services.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Before & After Gallery
            </Link>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Additional Services We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Ask about additional services in your quote →
            </button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Our Professional Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Estimate', description: 'We assess your property and provide a detailed quote' },
              { step: '2', title: 'Preparation', description: 'We protect your landscaping and prepare the work area' },
              { step: '3', title: 'Professional Cleaning', description: 'We use the right techniques and equipment for each surface' },
              { step: '4', title: 'Final Inspection', description: 'We ensure everything meets our high standards' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy-900 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free estimate on any of our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Free Quote
            </button>
            <a 
              href="tel:+13173504926" 
              className="bg-white text-navy-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
                              Call Us: (317) 350-4926
            </a>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Call Back
            </button>
          </div>
        </div>
      </div>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
      <CallbackRequestForm isOpen={isCallbackFormOpen} onClose={() => setIsCallbackFormOpen(false)} />
    </div>
  );
};

export default Services;