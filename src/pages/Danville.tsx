import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Danville = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const quickStats = [
    { metric: 'Population', value: '11,525', source: 'census.gov', icon: Users },
    { metric: 'Owner-occupied homes', value: '70.3%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$93,080', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median property value', value: '$269k', source: 'datausa.io', icon: Building }
  ];

  const neighborhoods = [
    'Historic Downtown & Courthouse Square',
    'Old Farm & Gailcrest Estates',
    'West Lincoln Street Corridor',
    'Danville Community High School Area',
    'Airport Road Industrial Zone'
  ];

  const residentialServices = [
    'House soft-wash & roof algae removal',
    'Driveway, sidewalk & patio brightening',
    'Deck & fence restoration'
  ];

  const commercialServices = [
    'Store-front façade cleaning',
    'Parking-lot & loading-dock degreasing',
    'Fleet & heavy-equipment washing'
  ];

  const whyChooseUs = [
    'Local roots with deep community knowledge',
    'Same-day scheduling for urgent needs',
    'Detergents safe for nearby Twin Bridges Trail waterways',
    'Professional equipment and trained technicians',
    'Competitive pricing for Danville market'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Danville Service",
          "description": "Professional pressure washing services in Danville, IN. House washing, roof cleaning, driveway cleaning, and commercial services for historic downtown and growing subdivisions.",
          "url": "https://brownsburgpressurewashing.com/danville",
          "telephone": "(317) 555-0123",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Danville",
            "addressRegion": "IN",
            "postalCode": "46122",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.7606",
            "longitude": "-86.5267"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Danville, IN"
            },
            {
              "@type": "Place",
              "name": "Historic Downtown Danville"
            },
            {
              "@type": "Place",
              "name": "Old Farm Estates"
            },
            {
              "@type": "Place",
              "name": "Gailcrest Estates"
            }
          ],
          "serviceType": [
            "House Washing",
            "Roof Cleaning",
            "Driveway Cleaning",
            "Deck Cleaning",
            "Fence Cleaning",
            "Commercial Pressure Washing"
          ],
          "openingHours": [
            "Mo-Fr 07:00-19:00",
            "Sa 08:00-17:00",
            "Su emergency service only"
          ],
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "25",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Danville, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Small-Town Charm, Big Curb-Appeal Needs</strong><br />
            Danville's historic courthouse square and fast-growing subdivisions are magnets for algae, pollen, 
            and winter salt. Our professional pressure-washing crew is minutes away to restore that "fresh-paint\" look.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional pressure washing service in Danville, IN"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Serving Historic Danville & Growing Communities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From the charming historic courthouse square to the modern subdivisions spreading across Danville, 
              we understand the unique cleaning challenges this community faces. Our professional pressure washing 
              services protect both historic character and modern investments.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We use eco-friendly cleaning solutions that are safe for the nearby Twin Bridges Trail waterways 
              while effectively removing algae, pollen, winter salt residue, and years of accumulated grime. 
              Our team serves all of Danville with the same quality and care we bring to our 
              <Link to="/" className="text-blue-500 hover:text-blue-600 underline mx-1">Brownsburg operations</Link>.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing</Link>, 
              <Link to="/services/roof-cleaning" className="text-blue-500 hover:text-blue-600 underline mx-1">roof cleaning</Link>, or 
              <Link to="/services/commercial-cleaning" className="text-blue-500 hover:text-blue-600 underline">commercial services</Link>, 
              we're your local pressure washing experts.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Free Danville Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Quick Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
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

        {/* Neighborhoods We Cover */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Neighborhoods We Cover
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{neighborhood}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Professional pressure washing services for all property types in this area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Popular Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Home className="h-6 w-6 text-blue-500 mr-2" />
                Residential
              </h4>
              <ul className="space-y-3">
                {residentialServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Commercial & Municipal
              </h4>
              <ul className="space-y-3">
                {commercialServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Why Choose Us in Danville?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Connection */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Complete Service Coverage
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            In addition to serving Danville, we provide comprehensive pressure washing services throughout the region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/lincoln-township" className="text-blue-500 hover:text-blue-600">
                  Lincoln Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Serving Clermont Heights and southeastern Brownsburg
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/brown-township" className="text-blue-500 hover:text-blue-600">
                  Brown Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Northern Brownsburg with highway access
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/middle-township" className="text-blue-500 hover:text-blue-600">
                  Middle Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Western communities including Tilden and Maplewood
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/washington-township" className="text-blue-500 hover:text-blue-600">
                  Washington Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Southern edge of Brownsburg coverage
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Restore Your Danville Property?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From historic downtown to modern subdivisions, we bring professional pressure washing 
            services to every corner of Danville. Get your free estimate today and see why 
            Danville residents trust us for all their cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Free Danville Quote
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
        title="Get Your Danville Quote"
        description="Professional pressure washing services for Danville, IN. From historic downtown to modern subdivisions, we serve all areas."
      />
    </div>
  );
};

export default Danville;