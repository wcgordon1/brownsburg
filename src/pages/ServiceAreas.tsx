import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Users, DollarSign, Home, Building, Star, Crown, Waves, Truck, Zap, Compass } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const ServiceAreas = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const brownsburgTownships = [
    {
      name: 'Lincoln Township',
      path: '/service-areas/lincoln-township',
      description: 'About three-quarters of Brownsburg in the southeast, including Clermont Heights.',
      coverage: '75% of Brownsburg',
      icon: MapPin,
      highlights: ['Clermont Heights', 'Brownsburg Village', 'Cardinal Creek']
    },
    {
      name: 'Brown Township',
      path: '/service-areas/brown-township',
      description: 'Northern quarter with easy access via I-74, I-65, and SR-267.',
      coverage: 'Northern Brownsburg',
      icon: MapPin,
      highlights: ['Highway Access', 'Commercial Corridor', 'Industrial District']
    },
    {
      name: 'Middle Township',
      path: '/service-areas/middle-township',
      description: 'Western fringe near Tilden and Maplewood communities.',
      coverage: 'Western Fringe',
      icon: MapPin,
      highlights: ['Tilden', 'Maplewood', 'Rural Properties']
    },
    {
      name: 'Washington Township',
      path: '/service-areas/washington-township',
      description: 'Small southern edge of our comprehensive service area.',
      coverage: 'Southern Border',
      icon: Compass,
      highlights: ['Border Community', 'Newer Developments', 'Complete Coverage']
    }
  ];

  const surroundingCities = [
    {
      name: 'Danville, IN',
      path: '/service-areas/danville',
      tagline: 'Small-Town Charm, Big Curb-Appeal Needs',
      description: 'Historic courthouse square and fast-growing subdivisions with eco-friendly cleaning solutions.',
      stats: { population: '11,525', income: '$93,080', homeValue: '$269k' },
      icon: MapPin,
      highlights: ['Historic Downtown', 'Old Farm Estates', 'Gailcrest']
    },
    {
      name: 'Avon, IN',
      path: '/service-areas/avon',
      tagline: 'Premium Cleaning for Hendricks County\'s Boomtown',
      description: 'Newer vinyl-siding subdivisions and brick estates with specialized low-pressure techniques.',
      stats: { population: '24,231', income: '$97,589', homeValue: '$301k' },
      icon: Star,
      highlights: ['Bridgewater', 'Prestwick Golf', 'Avon Creek']
    },
    {
      name: 'Noblesville, IN',
      path: '/service-areas/noblesville',
      tagline: 'Lakeside Luxury Meets Year-Round Upkeep',
      description: 'Morse Reservoir properties and downtown brick façades requiring expert lakeside care.',
      stats: { population: '71,900', income: '$102,319', homeValue: '$322k' },
      icon: Waves,
      highlights: ['Morse Reservoir', 'Old Town', 'Hazel Dell']
    },
    {
      name: 'Plainfield, IN',
      path: '/service-areas/plainfield',
      tagline: 'Keep Logistics-Hub Facilities & Homes Spotless',
      description: 'Family neighborhoods and warehouse complexes requiring industrial-strength cleaning.',
      stats: { population: '35,800', income: '$85,074', homeValue: '$264k' },
      icon: Truck,
      highlights: ['Saratoga', 'AirTech Parks', 'US-40 Corridor']
    },
    {
      name: 'Carmel, IN',
      path: '/service-areas/carmel',
      tagline: 'White-Glove Exterior Cleaning for Indiana\'s Wealth Hub',
      description: 'Luxury properties demanding perfection with $2 million insurance coverage.',
      stats: { population: '100,501', income: '$134,602', homeValue: '$456k' },
      icon: Crown,
      highlights: ['Village of WestClay', 'Arts District', 'Clay Terrace']
    },
    {
      name: 'Westfield, IN',
      path: '/service-areas/westfield',
      tagline: 'Fast-Growing Suburbs, Faster Service',
      description: 'State\'s highest home-ownership rate with specialized new construction cleaning.',
      stats: { population: '51,109', income: '$119,598', homeValue: '$392k' },
      icon: Zap,
      highlights: ['Grand Park Area', 'Harmony', 'Chatham Hills']
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Service Areas - Pressure Washing Hendricks County IN</title>
        <meta name="description" content="Brownsburg Pressure Washing service areas throughout Hendricks County, IN. Professional cleaning services in all four townships and surrounding cities." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/service-areas" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Our Service Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pressure washing services throughout Brownsburg and surrounding communities. 
            From historic townships to modern developments, we serve them all with expertise and care.
          </p>
        </div>

        {/* Brownsburg Focus Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Brownsburg - Our Home Base
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete coverage across all four Hendricks County townships that make up Brownsburg. 
              This is where we started and where we maintain our highest concentration of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brownsburgTownships.map((township, index) => {
              const IconComponent = township.icon;
              return (
                <Link
                  key={index}
                  to={township.path}
                  className="bg-blue-50 border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
                          {township.name}
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">{township.coverage}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <p className="text-gray-600 mb-4">{township.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {township.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs text-blue-600 font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Surrounding Cities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Surrounding Communities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extending our expertise to neighboring cities throughout central Indiana. 
              Each community has unique characteristics that require specialized approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surroundingCities.map((city, index) => {
              const IconComponent = city.icon;
              return (
                <Link
                  key={index}
                  to={city.path}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900 group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-blue-600 mb-3">{city.tagline}</p>
                  <p className="text-gray-600 mb-4 text-sm">{city.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-navy-900">{city.stats.population}</div>
                      <div className="text-xs text-gray-500">Population</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-navy-900">{city.stats.income}</div>
                      <div className="text-xs text-gray-500">Income</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-navy-900">{city.stats.homeValue}</div>
                      <div className="text-xs text-gray-500">Home Value</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {city.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">Learn More About {city.name}</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Comprehensive Service Coverage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Residential Excellence</h4>
              <p className="text-gray-600">
                From historic homes to new construction, we provide specialized cleaning for every property type.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Commercial Expertise</h4>
              <p className="text-gray-600">
                Professional services for businesses, from small storefronts to large industrial facilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <h4 className="text-lg font-semibold text-navy-900 mb-2">Premium Standards</h4>
              <p className="text-gray-600">
                Luxury service standards with specialized techniques for high-end properties and materials.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No matter which community you're in, we bring the same professional standards 
            and attention to detail to every job. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Free Quote
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
        title="Get Your Service Area Quote"
        description="Professional pressure washing services throughout Brownsburg and surrounding communities. Tell us about your project and we'll provide a detailed estimate."
      />
    </div>
  );
};

export default ServiceAreas;