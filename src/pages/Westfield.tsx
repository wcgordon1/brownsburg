import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building, Zap } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Westfield = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const marketSnapshot = [
    { metric: 'Population', value: '51,109', source: 'datausa.io', icon: Users },
    { metric: 'Home-ownership', value: '79.7%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$119,598', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median home value', value: '$392k', source: 'datausa.io', icon: Building }
  ];

  const neighborhoodsHotspots = [
    'Grand Park-Area Subdivisions (Harmony, Maple Village)',
    'Downtown Westfield Revitalization District',
    'SR-32 & US-31 Commercial Corridor',
    'Chatham Hills Golf-Course Estates'
  ];

  const tailoredServices = [
    'New-construction wash-downs (paint dust & red-clay removal)',
    'HardiePlank / painted-brick soft-wash',
    'Paver sealing & polymeric-sand refresh for outdoor living spaces'
  ];

  const westfieldAdvantages = [
    'Highest home-ownership rate in the state demands quality service',
    'New construction expertise for modern building materials',
    'Understanding of Grand Park area development patterns',
    'Experience with golf course community standards',
    'Specialized techniques for newer home preservation'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Westfield Service",
          "description": "Professional pressure washing services in Westfield, IN. Specialized cleaning for fast-growing suburbs and new construction with the state's highest home-ownership rate.",
          "url": "https://brownsburgpressurewashing.com/westfield",
          "telephone": "(317) 555-0123",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Westfield",
            "addressRegion": "IN",
            "postalCode": "46074",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.0428",
            "longitude": "-86.1275"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Westfield, IN"
            },
            {
              "@type": "Place",
              "name": "Grand Park"
            },
            {
              "@type": "Place",
              "name": "Harmony"
            },
            {
              "@type": "Place",
              "name": "Maple Village"
            },
            {
              "@type": "Place",
              "name": "Chatham Hills"
            }
          ],
          "serviceType": [
            "New Construction Cleaning",
            "HardiePlank Cleaning",
            "Painted Brick Cleaning",
            "Paver Sealing",
            "Outdoor Living Space Cleaning",
            "Commercial Pressure Washing"
          ],
          "openingHours": [
            "Mo-Fr 07:00-19:00",
            "Sa 08:00-17:00",
            "Su emergency service only"
          ],
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "45",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Westfield, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Fast-Growing Suburbs, Faster Service</strong><br />
            With the state's highest home-ownership rate, Westfield residents value their curb appeal—our crew keeps new builds looking brand-new.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="New construction homes in Westfield, IN requiring specialized cleaning"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Specialized Care for Growing Communities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Westfield's remarkable growth and the state's highest home-ownership rate of 79.7% create 
              unique opportunities for specialized cleaning services. Our expertise in new construction 
              cleaning ensures that your investment maintains its pristine appearance from day one.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From the Grand Park area's modern subdivisions like Harmony and Maple Village to the 
              established elegance of Chatham Hills Golf Course Estates, we understand the specific 
              needs of Westfield's diverse communities and newer construction materials.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We serve the broader Hamilton County region including <Link to="/" className="text-blue-500 hover:text-blue-600 underline">Brownsburg</Link>, 
              <Link to="/danville" className="text-blue-500 hover:text-blue-600 underline mx-1">Danville</Link>, and surrounding communities 
              with the same commitment to preserving your property's value and appearance.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Fast Westfield Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Market Snapshot */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Market Snapshot
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketSnapshot.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-navy-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{stat.metric}</div>
                  <div className="text-xs text-gray-500">{stat.source}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Neighborhoods & Hotspots */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Neighborhoods & Hotspots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {neighborhoodsHotspots.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{area}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized cleaning services for new construction and established properties in this area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tailored Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Tailored Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tailoredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{service}</h4>
                <p className="text-gray-600 text-sm">
                  Specialized techniques designed for Westfield's new construction and modern materials.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Westfield Advantages */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Westfield Service Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {westfieldAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <Zap className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* New Construction Focus */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            New Construction Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Home className="h-6 w-6 text-blue-500 mr-2" />
                New Home Specialties
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Paint dust and construction debris removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Red clay and soil stain elimination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HardiePlank and fiber cement cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Painted brick gentle soft-wash techniques</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Outdoor Living Spaces
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Paver sealing and protection services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Polymeric sand refresh and restoration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Outdoor kitchen and entertainment area cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Pool deck and patio maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Home Ownership Focus */}
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-16">
          <div className="flex items-center mb-4">
            <Home className="h-6 w-6 text-green-500 mr-3" />
            <h3 className="text-xl font-semibold text-navy-900">
              State's Highest Home-Ownership Rate: 79.7%
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            Westfield residents have the highest investment in their properties of any community in Indiana. 
            This commitment to homeownership means residents value professional maintenance services that 
            protect and enhance their significant investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Investment Protection</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Curb Appeal Enhancement</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Long-term Value Preservation</span>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Regional Service Network
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Serving Westfield and the greater Hamilton County region with specialized expertise:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/" className="text-blue-500 hover:text-blue-600">
                  Brownsburg
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Complete residential and commercial services across all townships
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/danville" className="text-blue-500 hover:text-blue-600">
                  Danville
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Historic preservation and modern community cleaning
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/services" className="text-blue-500 hover:text-blue-600">
                  All Services
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                New construction and established property maintenance solutions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Keep Your Westfield Investment Looking New
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            With Indiana's highest home-ownership rate, Westfield residents understand the value 
            of professional property maintenance. Let us help you protect your investment with 
            specialized cleaning services designed for new construction and modern materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Westfield Quote
            </button>
            <Link
              to="/services"
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Westfield Quote"
        description="Specialized pressure washing services for Westfield's new construction and established properties. Expert care for modern materials and outdoor living spaces."
      />
    </div>
  );
};

export default Westfield;