import { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle, Car } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from '../components/QuoteForm';

const BrownTownship = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const highways = ['I-74', 'I-65', 'SR-267'];
  
  const neighborhoods = [
    'North Brownsburg',
    'Highway Corridor',
    'Industrial District',
    'County Line Area',
    'Commercial Zone'
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Brown Township Pressure Washing - Local Expert Service</title>
        <meta name="description" content="Professional pressure washing services in Brown Township, Hendricks County. Local experts providing quality cleaning for homes and businesses." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas/brown-township" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Brown Township
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing services for North Brownsburg with convenient access 
            via major highways I-74, I-65, and SR-267.
          </p>
        </div>

        {/* Township Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Strategic Northern Location
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Brown Township covers the northern quarter of Brownsburg, positioned perfectly with 
              easy access via three major transportation arteries: <strong>I-74, I-65, and SR-267</strong>. 
              This strategic location makes us highly accessible to serve your property quickly and efficiently.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              The area features a mix of residential neighborhoods, commercial properties, and 
              industrial facilities, all benefiting from our comprehensive pressure washing services.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Highway Access Points:</h3>
              <div className="grid grid-cols-3 gap-4">
                {highways.map((highway, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {highway}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Free Quote in Brown Township
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Commercial and residential properties in Brown Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Service Coverage */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Comprehensive Brown Township Coverage
          </h3>
          <p className="text-lg text-gray-700 mb-8 text-center">
            From residential homes to commercial facilities, we serve all areas of Brown Township:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="font-semibold text-navy-900">{neighborhood}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Professional cleaning services for all property types in this area.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Commercial building cleaning in Brown Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Commercial & Industrial Services
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Brown Township's commercial and industrial zones require specialized cleaning services. 
              We provide professional pressure washing for:
            </p>
            <div className="space-y-4">
              {[
                'Office buildings and commercial complexes',
                'Industrial facilities and warehouses',
                'Retail storefronts and shopping centers',
                'Parking lots and loading docks',
                'Fleet vehicles and equipment'
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us for Brown Township */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Why Brown Township Chooses Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Easy Highway Access</h4>
              <p className="text-gray-300">
                Quick response times thanks to convenient I-74, I-65, and SR-267 access.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Commercial Experience</h4>
              <p className="text-gray-300">
                Specialized knowledge of both residential and commercial cleaning needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Local Presence</h4>
              <p className="text-gray-300">
                Based right in Brownsburg with deep knowledge of the local area.
              </p>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Popular Services in Brown Township
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Residential Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">House washing and siding cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Driveway and sidewalk cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Deck and fence restoration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Roof cleaning and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold text-navy-900 mb-4">Commercial Services</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Building exterior cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Parking lot maintenance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Fleet and equipment cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-700">Scheduled maintenance programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Serve Brown Township
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a homeowner or business owner in Brown Township, 
            we're just minutes away via major highway access.
          </p>
          <button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Get Your Free Brown Township Quote
          </button>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Brown Township Quote"
        description="Professional pressure washing services for North Brownsburg. Easy access via I-74, I-65, and SR-267."
      />
    </div>
  );
};

export default BrownTownship;