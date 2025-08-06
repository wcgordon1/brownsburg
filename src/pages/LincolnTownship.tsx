import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const LincolnTownship = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const neighborhoods = [
    'Clermont Heights',
    'Brownsburg Village',
    'Cardinal Creek',
    'Arbor Farms',
    'Stone Creek',
    'Brownsburg Meadows'
  ];

  const nearbyLandmarks = [
    'Brownsburg High School',
    'Arbuckle Acres Park',
    'Williams Park',
    'Cardinal Elementary School',
    'Brownsburg East Middle School'
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">
              Lincoln Township
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing services for the largest portion of Brownsburg, 
            including the beautiful Clermont Heights community and surrounding neighborhoods.
          </p>
        </div>

        {/* Township Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              About Lincoln Township
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Lincoln Township encompasses about three-quarters of Brownsburg in the southeastern area, 
              making it the largest portion of our service territory. This thriving community includes 
              the prestigious <strong>Clermont Heights</strong> neighborhood and numerous well-established 
              residential areas.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              As the heart of Brownsburg, Lincoln Township features diverse housing styles from historic 
              homes to modern developments, all requiring specialized care to maintain their beauty and value. 
              Our comprehensive services include <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing</Link>, 
              <Link to="/services/driveway-cleaning" className="text-blue-500 hover:text-blue-600 underline mx-1">driveway cleaning</Link>, and 
              <Link to="/services/roof-cleaning" className="text-blue-500 hover:text-blue-600 underline">roof cleaning</Link> tailored to each property's needs.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Many Lincoln Township residents also take advantage of our <Link to="/services/deck-fence-cleaning" className="text-blue-500 hover:text-blue-600 underline">deck and fence cleaning services</Link> to 
              complete their outdoor space maintenance and enhance their property's overall appeal.
            </p>
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
            >
              Get Free Quote in Lincoln Township
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Beautiful residential home in Lincoln Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Service Coverage */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Complete Service Coverage
          </h3>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We proudly serve all neighborhoods and communities throughout Lincoln Township, 
            including these popular areas:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{neighborhood}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 italic">
              Don't see your specific neighborhood? We serve the entire township - just ask!
            </p>
          </div>
        </div>

        {/* Local Landmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Local community center and schools in Lincoln Township"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Near Local Landmarks
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're familiar with all the local landmarks and can easily find your property 
              whether you're near the schools, parks, or community centers. Our team serves 
              properties throughout Lincoln Township and the neighboring 
              <Link to="/brown-township" className="text-blue-500 hover:text-blue-600 underline mx-1">Brown Township</Link>, 
              <Link to="/middle-township" className="text-blue-500 hover:text-blue-600 underline mx-1">Middle Township</Link>, and 
              <Link to="/washington-township" className="text-blue-500 hover:text-blue-600 underline">Washington Township</Link> areas.
            </p>
            <div className="space-y-3">
              {nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{landmark}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services for Lincoln Township */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Popular Services in Lincoln Township
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'House Washing',
                description: 'Perfect for maintaining the diverse home styles in Lincoln Township',
                popular: true,
                link: '/services/house-washing'
              },
              {
                title: 'Driveway Cleaning',
                description: 'Essential for the many concrete driveways throughout the area',
                popular: true,
                link: '/services/driveway-cleaning'
              },
              {
                title: 'Deck & Fence',
                description: 'Keep your outdoor spaces beautiful year-round',
                popular: false,
                link: '/services/deck-fence-cleaning'
              },
              {
                title: 'Roof Cleaning',
                description: 'Protect your investment with professional roof maintenance',
                popular: false,
                link: '/services/roof-cleaning'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                {service.popular && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Most Popular
                  </span>
                )}
                <h4 className="text-lg font-semibold text-navy-900 mb-2">
                  <Link to={service.link} className="text-blue-500 hover:text-blue-600">
                    {service.title}
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <Link to={service.link} className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Service Area Context */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Why Choose Local Service?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fast Response</h4>
              <p className="text-gray-300">
                We're right in your community for quick service and response times.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Local Knowledge</h4>
              <p className="text-gray-300">
                We understand the specific needs of Lincoln Township properties.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Easy Scheduling</h4>
              <p className="text-gray-300">
                Convenient scheduling that works with your township lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Related Areas */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Complete Brownsburg Coverage
          </h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            While Lincoln Township is our largest service area, we also provide comprehensive 
            pressure washing services throughout all Brownsburg townships:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/brown-township" className="text-blue-500 hover:text-blue-600">
                  Brown Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Northern quarter with convenient highway access via I-74, I-65, and SR-267.
              </p>
              <Link to="/brown-township" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/middle-township" className="text-blue-500 hover:text-blue-600">
                  Middle Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Western fringe including the peaceful communities of Tilden and Maplewood.
              </p>
              <Link to="/middle-township" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">
                <Link to="/washington-township" className="text-blue-500 hover:text-blue-600">
                  Washington Township
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Southern edge completing our comprehensive Brownsburg coverage.
              </p>
              <Link to="/washington-township" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Enhance Your Lincoln Township Property?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join your neighbors in Clermont Heights and throughout Lincoln Township 
            who trust us for professional pressure washing services. Learn more about our 
            <Link to="/about" className="text-blue-500 hover:text-blue-600 underline mx-1">professional team</Link> 
            or explore our <Link to="/services" className="text-blue-500 hover:text-blue-600 underline">complete service offerings</Link>.
          </p>
          <button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          >
            Schedule Your Free Estimate Today
          </button>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Lincoln Township Quote"
        description="Fill out the form below for a free estimate on pressure washing services in Lincoln Township, including Clermont Heights and surrounding areas."
      />
    </div>
  );
};

export default LincolnTownship;