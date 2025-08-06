import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building, Crown } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Carmel = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const marketSnapshot = [
    { metric: 'Population', value: '100,501', source: 'datausa.io', icon: Users },
    { metric: 'Home-ownership', value: '74.6%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$134,602', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median home value', value: '$456k', source: 'datausa.io', icon: Building }
  ];

  const premiumDistricts = [
    'Village of WestClay & West 116th Luxury Enclaves',
    'Arts & Design District Storefronts',
    'Clay Terrace Retail / Office Parks',
    'Brookshire & Prairie View Golf Communities'
  ];

  const conciergeOfferings = [
    'Roof-wash + paver-sealing bundles (HOA-approved)',
    'Annual maintenance contracts with photo reports',
    'Safe low-pressure cleaning for painted brick & cedar shake'
  ];

  const luxuryAdvantages = [
    'White-glove service standards for luxury properties',
    '$2 million insurance policy for complete peace of mind',
    'HOA-approved cleaning methods and scheduling',
    'Photo documentation and detailed service reports',
    'Specialized techniques for premium materials',
    'Concierge-level customer service and communication'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Carmel Service",
          "description": "White-glove exterior cleaning for Carmel, IN luxury properties. Specialized soft-wash techniques and $2 million insurance for Indiana's wealth hub.",
          "url": "https://brownsburgpressurewashing.com/carmel",
          "telephone": "(317) 350-4926",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Carmel",
            "addressRegion": "IN",
            "postalCode": "46032",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.9784",
            "longitude": "-86.1180"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Carmel, IN"
            },
            {
              "@type": "Place",
              "name": "Village of WestClay"
            },
            {
              "@type": "Place",
              "name": "Arts & Design District"
            },
            {
              "@type": "Place",
              "name": "Clay Terrace"
            },
            {
              "@type": "Place",
              "name": "Brookshire Golf Community"
            }
          ],
          "serviceType": [
            "Luxury House Washing",
            "Roof Cleaning",
            "Paver Sealing",
            "Cedar Shake Cleaning",
            "Painted Brick Cleaning",
            "Premium Commercial Cleaning"
          ],
          "openingHours": [
            "Mo-Fr 07:00-19:00",
            "Sa 08:00-17:00",
            "Su emergency service only"
          ],
          "priceRange": "$$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      <Helmet>
        <title>Carmel, IN Pressure Washing - Luxury Home Cleaning</title>
        <meta name="description" content="Professional pressure washing services in Carmel, IN. Specialized cleaning for luxury homes, upscale neighborhoods, and premium properties." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/carmel" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Carmel, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>White-Glove Exterior Cleaning for Indiana's Wealth Hub</strong><br />
            Carmel homeowners expect perfection—our soft-wash tech and $2 million insurance policy deliver it.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury homes in Carmel, IN requiring premium pressure washing services"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Perfection-Level Service for Luxury Properties
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Carmel's status as Indiana's premier luxury community demands the highest standards of 
              exterior cleaning. Our white-glove service approach combines advanced soft-wash technology 
              with meticulous attention to detail that Carmel homeowners expect and deserve.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From the exclusive Village of WestClay to the sophisticated Arts & Design District, 
              we understand the unique requirements of premium materials like painted brick, cedar shake, 
              and custom architectural features. Our $2 million insurance policy provides complete 
              peace of mind for your valuable investment.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We extend our luxury service standards throughout the region, serving 
              <Link to="/" className="text-blue-500 hover:text-blue-600 underline mx-1">Brownsburg</Link>, 
              <Link to="/danville" className="text-blue-500 hover:text-blue-600 underline">Danville</Link>, and surrounding 
              communities with the same commitment to excellence.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get White-Glove Quote
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

        {/* Premium Service Districts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Premium Service Districts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumDistricts.map((district, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <Crown className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{district}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  White-glove cleaning services tailored to the luxury standards of this exclusive area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concierge Offerings */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Concierge Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conciergeOfferings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-yellow-500" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{offering}</h4>
                <p className="text-gray-600 text-sm">
                  Premium service packages designed specifically for Carmel's luxury property standards.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Luxury Service Standards */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Luxury Service Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <Crown className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Excellence */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Premium Material Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Home className="h-6 w-6 text-blue-500 mr-2" />
                Luxury Residential
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Painted brick and limestone gentle cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cedar shake and premium wood preservation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Custom architectural feature protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Paver sealing and restoration services</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Commercial & Retail
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Arts & Design District storefront cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Clay Terrace retail and office maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Golf club and country club facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">High-end restaurant and hospitality venues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Insurance & Guarantees */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center mb-4">
            <Crown className="h-6 w-6 text-yellow-500 mr-3" />
            <h3 className="text-xl font-semibold text-navy-900">
              $2 Million Insurance Policy
            </h3>
          </div>
          <p className="text-gray-700 mb-4">
            Our comprehensive $2 million insurance policy provides complete protection for your luxury property, 
            giving you peace of mind that your valuable investment is fully covered during all cleaning services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">General Liability Coverage</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Property Damage Protection</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">Workers Compensation</span>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Luxury Service Network
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Extending our white-glove standards throughout central Indiana's premium communities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/" className="text-blue-500 hover:text-blue-600">
                  Brownsburg
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Premium residential and commercial services across all townships
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
                Complete luxury cleaning and maintenance solutions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Experience Carmel's Premier Cleaning Service
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your luxury property deserves nothing less than perfection. Experience the difference 
            that white-glove service, advanced soft-wash technology, and $2 million insurance 
            protection make for your valuable investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Luxury Service Quote
            </button>
            <Link
              to="/services"
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
            >
              View Premium Services
            </Link>
          </div>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Luxury Carmel Quote"
        description="White-glove pressure washing services for Carmel's luxury properties. Advanced soft-wash technology with $2 million insurance protection."
      />
    </div>
  );
};

export default Carmel;