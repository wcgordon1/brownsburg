import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building, Star } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Avon = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const marketSnapshot = [
    { metric: 'Population', value: '24,231', source: 'census.gov', icon: Users },
    { metric: 'Home-ownership', value: '71.6%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$97,589', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median home value', value: '$301k', source: 'datausa.io', icon: Building }
  ];

  const serviceZones = [
    'Bridgewater & Prestwick Golf-Course Communities',
    'Avon Creek & Whispering Pines',
    'US-36 Retail Corridor (big-box storefronts)',
    'County Road 100 S Industrial Parks'
  ];

  const topRequestedJobs = [
    'Soft-wash for newer HardiePlank & EIFS siding',
    'Paver & stamped-concrete sealing',
    'HOA-wide annual maintenance programs'
  ];

  const avonAdvantages = [
    'Higher incomes support premium bundle pricing',
    'Strict HOA guidelines create recurring contract opportunities',
    'Newer construction requires specialized gentle cleaning',
    'Golf course communities value pristine appearance',
    'Premium materials demand expert care and techniques'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Avon Service",
          "description": "Premium pressure washing services in Avon, IN. Specialized cleaning for newer vinyl siding subdivisions and brick estates with low-pressure, high-foam approach.",
          "url": "https://brownsburgpressurewashing.com/avon",
          "telephone": "(317) 350-4926",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Avon",
            "addressRegion": "IN",
            "postalCode": "46123",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.7628",
            "longitude": "-86.3997"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Avon, IN"
            },
            {
              "@type": "Place",
              "name": "Bridgewater Community"
            },
            {
              "@type": "Place",
              "name": "Prestwick Golf Course"
            },
            {
              "@type": "Place",
              "name": "Avon Creek"
            },
            {
              "@type": "Place",
              "name": "Whispering Pines"
            }
          ],
          "serviceType": [
            "House Washing",
            "Roof Cleaning",
            "Driveway Cleaning",
            "Paver Sealing",
            "HOA Maintenance Programs",
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
            "reviewCount": "40",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/avon" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Avon, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Premium Cleaning for Hendricks County's Boomtown</strong><br />
            Avon's newer vinyl-siding subdivisions and brick estates demand a low-pressure, high-foam approach 
            that protects finishes while blasting mildew.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium homes in Avon, IN requiring specialized pressure washing"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Specialized Care for Premium Properties
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Avon's rapid growth has created some of Hendricks County's most desirable communities, 
              featuring newer construction with premium materials that require specialized cleaning approaches. 
              Our low-pressure, high-foam techniques protect delicate finishes while delivering superior results.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From the golf course communities of Bridgewater and Prestwick to the family-friendly 
              neighborhoods of Avon Creek and Whispering Pines, we understand the unique needs of 
              Avon's diverse property types. Our services extend from residential communities to the 
              busy US-36 retail corridor and industrial parks.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We also serve the broader region including <Link to="/" className="text-blue-500 hover:text-blue-600 underline">Brownsburg</Link>, 
              <Link to="/danville" className="text-blue-500 hover:text-blue-600 underline mx-1">Danville</Link>, and surrounding communities 
              with the same premium standards Avon residents expect.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Premium Avon Quote
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

        {/* Service Zones */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Service Zones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceZones.map((zone, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{zone}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized pressure washing services tailored to this area's unique property characteristics.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Requested Jobs */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Top Requested Jobs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRequestedJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{job}</h4>
                <p className="text-gray-600 text-sm">
                  Premium service designed for Avon's high-quality construction and materials.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Avon Advantage */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Avon Advantage
          </h3>
          <p className="text-xl text-gray-300 mb-8 text-center">
            Higher incomes plus strict HOA guidelines mean premium bundle pricing and recurring contracts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avonAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <Star className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Excellence */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Premium Service Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Material Expertise</h4>
              <p className="text-gray-600">
                Specialized knowledge of HardiePlank, EIFS, and premium siding materials common in Avon.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">HOA Compliance</h4>
              <p className="text-gray-600">
                Full understanding of HOA requirements and maintenance standards throughout Avon communities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Premium Results</h4>
              <p className="text-gray-600">
                Exceptional results that meet the high standards expected in Avon's premium communities.
              </p>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Regional Service Coverage
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            In addition to Avon, we provide premium pressure washing services throughout the region:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/" className="text-blue-500 hover:text-blue-600">
                  Brownsburg
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Complete township coverage including Lincoln, Brown, Middle, and Washington townships
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/danville" className="text-blue-500 hover:text-blue-600">
                  Danville
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Historic downtown and growing subdivisions with eco-friendly cleaning solutions
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/services" className="text-blue-500 hover:text-blue-600">
                  All Services
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Complete range of residential and commercial pressure washing services
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready for Premium Avon Service?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference that specialized techniques and premium service standards make. 
            Get your free estimate for professional pressure washing services designed specifically 
            for Avon's high-quality properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Premium Avon Quote
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
        title="Get Your Premium Avon Quote"
        description="Specialized pressure washing services for Avon's premium communities. Low-pressure, high-foam techniques for newer construction and premium materials."
      />
    </div>
  );
};

export default Avon;