import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, CheckCircle, Users, DollarSign, Home, Building, Truck } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Plainfield = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const marketSnapshot = [
    { metric: 'Population', value: '35,800', source: 'datausa.io', icon: Users },
    { metric: 'Home-ownership', value: '63.7%', source: 'datausa.io', icon: Home },
    { metric: 'Median household income', value: '$85,074', source: 'datausa.io', icon: DollarSign },
    { metric: 'Median home value', value: '$264k', source: 'datausa.io', icon: Building }
  ];

  const areasServed = [
    'Saratoga & Willow Pointe',
    'Downtown Plainfield & Historic US-40 Corridor',
    'AirTech & AllPoints Logistics Parks',
    'Splash Island / Recreation Complex Zone'
  ];

  const highDemandServices = [
    'Warehouse loading-dock and fleet-tractor wash-downs',
    'Concrete rust-stain removal (fertilizer & irrigation)',
    'HOA sidewalk and curb mold treatment'
  ];

  const logisticsAdvantages = [
    'Specialized industrial and warehouse cleaning expertise',
    'Understanding of diesel soot and logistics-related grime',
    'Experience with fleet vehicle and heavy equipment washing',
    'Knowledge of fertilizer and irrigation stain removal',
    'Efficient service for high-traffic commercial areas'
  ];

  return (
    <div className="bg-white">
      {/* LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing - Plainfield Service",
          "description": "Professional pressure washing services in Plainfield, IN. Specialized cleaning for logistics facilities, family neighborhoods, and warehouse complexes off I-70.",
          "url": "https://brownsburgpressurewashing.com/plainfield",
          "telephone": "(317) 350-4926",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Plainfield",
            "addressRegion": "IN",
            "postalCode": "46168",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.7042",
            "longitude": "-86.3994"
          },
          "areaServed": [
            {
              "@type": "Place",
              "name": "Plainfield, IN"
            },
            {
              "@type": "Place",
              "name": "Saratoga"
            },
            {
              "@type": "Place",
              "name": "Willow Pointe"
            },
            {
              "@type": "Place",
              "name": "Downtown Plainfield"
            },
            {
              "@type": "Place",
              "name": "AirTech Logistics Park"
            }
          ],
          "serviceType": [
            "Warehouse Cleaning",
            "Fleet Vehicle Washing",
            "Loading Dock Cleaning",
            "Concrete Stain Removal",
            "HOA Maintenance",
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
            "reviewCount": "30",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>

      <Helmet>
        <title>Plainfield, IN Pressure Washing - Logistics Hub Cleaning</title>
        <meta name="description" content="Professional pressure washing services in Plainfield, IN. Specialized cleaning for logistics facilities, family neighborhoods, and warehouse complexes." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/plainfield" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Truck className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Plainfield, IN Pressure Washing
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Keep Logistics-Hub Facilities & Homes Spotless</strong><br />
            Plainfield's mix of family neighborhoods and warehouse complexes off I-70 collects diesel soot fast—we clean it faster.
          </p>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Industrial and residential properties in Plainfield requiring specialized cleaning"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Industrial Strength Meets Residential Care
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Plainfield's strategic location along I-70 has made it a major logistics hub, creating unique 
              cleaning challenges for both industrial facilities and residential communities. Our specialized 
              services address everything from diesel soot accumulation to fertilizer stains.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From the family-friendly neighborhoods of Saratoga and Willow Pointe to the massive logistics 
              parks housing companies like AirTech and AllPoints, we understand the diverse cleaning needs 
              across Plainfield's mixed-use landscape.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We serve the broader region including <Link to="/" className="text-blue-500 hover:text-blue-600 underline">Brownsburg</Link>, 
              <Link to="/danville" className="text-blue-500 hover:text-blue-600 underline mx-1">Danville</Link>, and surrounding communities 
              with the same industrial-strength expertise and residential attention to detail.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Industrial-Strength Quote
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

        {/* Areas Served */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Areas Served
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areasServed.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-navy-900">{area}</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized cleaning services for both residential and industrial properties in this area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* High-Demand Services */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            High-Demand Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highDemandServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{service}</h4>
                <p className="text-gray-600 text-sm">
                  Specialized techniques for Plainfield's unique industrial and logistics challenges.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logistics Hub Expertise */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Logistics Hub Cleaning Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <Truck className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Specialization */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Dual-Focus Service Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Home className="h-6 w-6 text-blue-500 mr-2" />
                Residential Communities
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">HOA sidewalk and curb maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mold and mildew treatment programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fertilizer and irrigation stain removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Splash Island recreation area cleaning</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-blue-500 mr-2" />
                Industrial & Logistics
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Warehouse and loading dock deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fleet vehicle and tractor-trailer washing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Diesel soot and exhaust residue removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Heavy equipment and machinery cleaning</span>
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
            Serving Plainfield and the greater central Indiana logistics corridor:
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
                Historic and suburban community cleaning services
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/services" className="text-blue-500 hover:text-blue-600">
                  All Services
                </Link>
              </h4>
              <p className="text-gray-600 text-sm">
                Industrial, commercial, and residential pressure washing solutions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready for Plainfield's Toughest Cleaning Challenges?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need industrial-strength warehouse cleaning or gentle residential care, 
            our specialized equipment and expertise handle Plainfield's unique mix of logistics 
            and family community needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Plainfield Quote
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
        title="Get Your Plainfield Quote"
        description="Specialized pressure washing services for Plainfield's industrial facilities, logistics hubs, and residential communities."
      />
    </div>
  );
};

export default Plainfield;