import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building, Waves } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Noblesville = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const marketSnapshot = [
    { metric: 'Population', value: '71,900', source: 'datausa.io', icon: Users },
    { metric: 'Home-ownership', value: '72.5%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$102,319', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median home value', value: '$322k', source: 'datausa.io', icon: Building }
  ];

  const coverageAreas = [
    'Morse Reservoir Shoreline & Dock Communities',
    'Old Town Noblesville & Hamilton County Courthouse District',
    'Hazel Dell & Union Chapel Estates',
    'Corporate Campus & SR-37 Retail Strip'
  ];

  const signatureServices = [
    'Dock, seawall & composite-deck brightening',
    'Multi-story brick & limestone soft-wash',
    'Restaurant patio degreasing before patio-season rush'
  ];

  const lakesideAdvantages = [
    'Specialized dock and waterfront cleaning expertise',
    'Understanding of lake spray and moisture challenges',
    'Experience with composite decking and marine materials',
    'Seasonal patio preparation for restaurant industry',
    'Historic building preservation techniques'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Noblesville Service",
          "description": "Professional pressure washing services in Noblesville, IN. Specialized lakeside cleaning for Morse Reservoir properties, downtown brick facades, and restaurant patios.",
          "url": "https://brownsburgpressurewashing.com/noblesville",
          "telephone": "(317) 555-0123",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Noblesville",
            "addressRegion": "IN",
            "postalCode": "46060",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.0456",
            "longitude": "-86.0086"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Noblesville, IN"
            },
            {
              "@type": "Place",
              "name": "Morse Reservoir"
            },
            {
              "@type": "Place",
              "name": "Old Town Noblesville"
            },
            {
              "@type": "Place",
              "name": "Hazel Dell"
            },
            {
              "@type": "Place",
              "name": "Union Chapel"
            }
          ],
          "serviceType": [
            "House Washing",
            "Dock Cleaning",
            "Composite Deck Cleaning",
            "Brick & Limestone Cleaning",
            "Restaurant Patio Cleaning",
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
            "reviewCount": "35",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Waves className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Noblesville, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Lakeside Luxury Meets Year-Round Upkeep</strong><br />
            From Morse Reservoir docks to downtown's brick façades, Noblesville properties need expert care 
            to combat lake spray, pollen, and winter grime.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Lakeside properties and downtown Noblesville requiring specialized cleaning"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Expert Care for Lakeside & Historic Properties
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Noblesville's unique combination of lakeside luxury and historic charm creates distinctive 
              cleaning challenges. From Morse Reservoir's waterfront properties dealing with lake spray 
              and moisture to downtown's historic brick and limestone buildings, we provide specialized 
              solutions for every property type.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our expertise extends from residential dock and composite deck cleaning to commercial 
              restaurant patio preparation for the busy patio season. We understand the seasonal 
              demands of lakeside living and the preservation needs of historic downtown properties.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We serve the greater Hamilton County area including <Link to="/" className="text-blue-500 hover:text-blue-600 underline">Brownsburg</Link>, 
              <Link to="/danville" className="text-blue-500 hover:text-blue-600 underline mx-1">Danville</Link>, and surrounding communities 
              with the same expertise and attention to detail.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Lakeside Cleaning Quote
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

        {/* Coverage Map */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Coverage Map
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{area}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized cleaning services tailored to the unique characteristics of this area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Signature Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-6 w-6 text-blue-500" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{service}</h4>
                <p className="text-gray-600 text-sm">
                  Specialized techniques designed for Noblesville's unique lakeside and historic properties.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lakeside Expertise */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Lakeside & Historic Property Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lakesideAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <Waves className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Services */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Seasonal Service Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Waves className="h-6 w-6 text-blue-500 mr-2" />
                Spring/Summer Lakeside
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Dock and seawall cleaning and brightening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Composite deck restoration and protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Restaurant patio preparation for season</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Year-Round Historic
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gentle brick and limestone facade cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Historic building preservation techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Downtown courthouse district maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Regional Service Network
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Serving Noblesville and the greater central Indiana region with specialized expertise:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/" className="text-blue-500 hover:text-blue-600">
                  Brownsburg
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Complete township coverage with residential and commercial services
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/danville" className="text-blue-500 hover:text-blue-600">
                  Danville
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Historic downtown and growing suburban communities
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/services" className="text-blue-500 hover:text-blue-600">
                  All Services
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Comprehensive pressure washing and specialty cleaning services
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready for Expert Noblesville Service?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need lakeside dock cleaning, historic building preservation, or seasonal 
            patio preparation, our specialized techniques deliver exceptional results for 
            Noblesville's unique properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Noblesville Quote
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
        title="Get Your Noblesville Quote"
        description="Specialized pressure washing services for Noblesville's lakeside properties, historic buildings, and commercial establishments."
      />
    </div>
  );
};

export default Noblesville;