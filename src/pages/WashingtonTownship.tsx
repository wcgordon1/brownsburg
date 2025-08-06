import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle, Compass } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from '../components/QuoteForm';

const WashingtonTownship = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const serviceAreas = [
    'Southern Brownsburg edge',
    'Border community properties',
    'Rural-suburban transition areas',
    'Newer developments',
    'Established neighborhoods'
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Washington Township Pressure Washing - Professional Service</title>
        <meta name="description" content="Professional pressure washing services in Washington Township, Hendricks County. Expert cleaning for rural and suburban properties throughout the township." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/washington-township" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Compass className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Washington Township
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing services for Brownsburg's southern edge, 
            completing our comprehensive township coverage.
          </p>
        </div>

        {/* Township Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Southern Edge Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Washington Township covers the <strong>small southern edge</strong> of Brownsburg, 
              representing the final piece of our complete township coverage. Though smaller in area, 
              this region features diverse properties that benefit from our full range of 
              professional pressure washing services.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              This area bridges Brownsburg with neighboring communities, creating a unique 
              environment of transitional neighborhoods, newer developments, and established 
              properties that each require specialized cleaning approaches.
            </p>

            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Complete Township Coverage</h3>
              <p className="text-gray-700">
                With Washington Township, we serve all four townships that make up Brownsburg, 
                ensuring no area is left without professional pressure washing services.
              </p>
            </div>

            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Free Quote in Washington Township
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern home in Washington Township, southern Brownsburg"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service Coverage */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Focused Washington Township Service
          </h3>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Despite being the smallest township area we serve, we provide the same comprehensive 
            services to all Washington Township properties:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="font-semibold text-navy-900">{area}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Professional cleaning services with attention to local property characteristics.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Border Community Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Well-maintained neighborhood in Washington Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Border Community Advantages
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Washington Township's position on Brownsburg's southern border creates unique 
              opportunities and challenges that we're specially equipped to address:
            </p>
            <div className="space-y-4">
              {[
                'Quick access from multiple directions for efficient service',
                'Understanding of transitional neighborhood characteristics',
                'Experience with diverse property types and ages',
                'Flexible scheduling to accommodate border community needs',
                'Coordination with neighboring area services when needed'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete Coverage Message */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Completing the Brownsburg Circle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-600 rounded-lg p-6">
              <Compass className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Lincoln Township</h4>
              <p className="text-sm text-gray-300">Southeast (largest area)</p>
            </div>
            <div className="bg-blue-600 rounded-lg p-6">
              <Compass className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Brown Township</h4>
              <p className="text-sm text-gray-300">Northern quarter</p>
            </div>
            <div className="bg-blue-600 rounded-lg p-6">
              <Compass className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Middle Township</h4>
              <p className="text-sm text-gray-300">Western fringe</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-6 border-2 border-white">
              <Compass className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Washington Township</h4>
              <p className="text-sm text-gray-300">Southern edge</p>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-300">
            No matter which township you're in, we provide the same high-quality, 
            professional pressure washing services throughout Brownsburg.
          </p>
        </div>

        {/* Service Excellence */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Washington Township Chooses Professional Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Complete Coverage</h4>
              <p className="text-gray-600">
                Even though it's our smallest service area, we provide the same comprehensive 
                coverage and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Local Knowledge</h4>
              <p className="text-gray-600">
                Deep understanding of border community needs and property characteristics 
                unique to this area.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Quick Response</h4>
              <p className="text-gray-600">
                Strategic positioning allows for quick response times and efficient 
                service delivery throughout the township.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Full Service Menu for Washington Township
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Residential Services</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Complete house washing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Driveway and walkway cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Deck and fence restoration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Roof cleaning and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Additional Services</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Concrete sealing and protection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Window and gutter cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Pool deck and patio cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-700">Custom property maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Complete Your Washington Township Property Care
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the complete Brownsburg community in trusting us for professional 
            pressure washing services. No area too small, no job too big.
          </p>
          <button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Get Your Washington Township Quote Today
          </button>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Washington Township Quote"
        description="Professional pressure washing services for the southern edge of Brownsburg. Complete township coverage with local expertise."
      />
    </div>
  );
};

export default WashingtonTownship;