import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle, Trees } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from '../components/QuoteForm';

const MiddleTownship = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const communities = ['Tilden', 'Maplewood'];
  
  const serviceAreas = [
    'Western Brownsburg edge',
    'Rural residential properties',
    'Established neighborhoods',
    'Country properties',
    'Semi-rural developments'
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Middle Township Pressure Washing - Central Location Service</title>
        <meta name="description" content="Professional pressure washing services in Middle Township, Hendricks County. Central location serving residential and commercial properties." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/middle-township" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trees className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Middle Township
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing services for Brownsburg's western fringe, 
            including the charming communities of Tilden and Maplewood.
          </p>
        </div>

        {/* Township Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Peaceful Western Communities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Middle Township represents the western fringe of Brownsburg, featuring the 
              peaceful communities of <strong>Tilden</strong> and <strong>Maplewood</strong>. 
              This area combines the convenience of town living with a more rural, 
              spacious atmosphere.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Properties in Middle Township often feature larger lots, mature landscaping, 
              and a mix of architectural styles that benefit from specialized pressure washing 
              techniques to preserve their unique character and charm.
            </p>

            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Key Communities We Serve:</h3>
              <div className="flex space-x-6">
                {communities.map((community, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {community}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Free Quote in Middle Township
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beautiful home in Middle Township near Tilden and Maplewood"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Complete Middle Township Coverage
          </h3>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We serve all areas of Middle Township, from established neighborhoods to rural properties:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="font-semibold text-navy-900">{area}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Tailored cleaning solutions for each unique property type.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rural Property Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Rural property with deck and outdoor spaces in Middle Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Specialized Rural Property Care
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Middle Township's semi-rural setting presents unique cleaning challenges that 
              we're specially equipped to handle. From larger homes to extensive outdoor areas, 
              we provide comprehensive services for:
            </p>
            <div className="space-y-4">
              {[
                'Large residential properties with extensive outdoor areas',
                'Mature homes with unique architectural features',
                'Decks, patios, and outdoor entertainment spaces',
                'Driveways and walkways affected by rural conditions',
                'Fencing and outdoor structures'
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Character */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Preserving Community Character
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Tilden Area</h4>
              <p className="text-gray-600 mb-4">
                The Tilden community features a mix of established homes and newer developments. 
                Our services help maintain the area's well-kept appearance while preserving 
                the natural beauty that makes this location special.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Trees className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Mature tree-lined properties</span>
                </li>
                <li className="flex items-center">
                  <Trees className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Established residential neighborhoods</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Maplewood Area</h4>
              <p className="text-gray-600 mb-4">
                Maplewood offers a peaceful setting with spacious properties that benefit from 
                our comprehensive cleaning services. We understand the unique needs of this 
                community and provide tailored solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Trees className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Larger lots with outdoor amenities</span>
                </li>
                <li className="flex items-center">
                  <Trees className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Semi-rural residential setting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Why Middle Township Residents Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Rural Experience</h4>
              <p className="text-gray-300">
                Specialized knowledge of semi-rural and country property needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Gentle Methods</h4>
              <p className="text-gray-300">
                Safe cleaning techniques that protect mature landscaping and natural features.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Local Understanding</h4>
              <p className="text-gray-300">
                Deep familiarity with Tilden, Maplewood, and surrounding areas.
              </p>
            </div>
          </div>
        </div>

        {/* Service Specialties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Specialized Services for Middle Township
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Large Property Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Extensive house washing for larger homes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Long driveways and multiple walkways</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Multiple outdoor structures and amenities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Comprehensive property maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Preserve Natural Beauty</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Protection of mature landscaping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Careful around natural features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Sustainable cleaning practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Experience the Middle Township Difference
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join your neighbors in Tilden and Maplewood who trust us to maintain 
            their properties while preserving the natural beauty of Middle Township.
          </p>
          <button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Schedule Your Free Middle Township Estimate
          </button>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Middle Township Quote"
        description="Professional pressure washing services for Tilden, Maplewood, and the western areas of Brownsburg."
      />
    </div>
  );
};

export default MiddleTownship;