import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Droplets, Shield, Clock, MessageSquare, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import QuoteForm from '../components/QuoteForm';
import CallbackRequestForm from '../components/CallbackRequestForm';

const Home = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const services = [
    {
      title: 'House Washing',
      description: 'Complete exterior cleaning that restores your home\'s beauty and curb appeal.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '/services/house-washing'
    },
    {
      title: 'Roof Cleaning',
      description: 'Safe, gentle cleaning that removes stains and extends your roof\'s lifespan.',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '/services/roof-cleaning'
    },
    {
      title: 'Driveway Cleaning',
      description: 'Deep cleaning that removes oil stains, dirt, and grime from concrete surfaces.',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '/services/driveway-cleaning'
    },
    {
      title: 'Deck & Fence',
      description: 'Restore and protect your outdoor living spaces with professional cleaning.',
      image: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '/services/deck-fence-cleaning'
    }
  ];

  const townships = [
    {
      name: 'Lincoln Township',
      description: 'About three-quarters of Brownsburg in the southeast, including Clermont Heights.',
      link: '/service-areas/lincoln-township'
    },
    {
      name: 'Brown Township',
      description: 'Northern quarter with easy access via I-74, I-65, and SR-267.',
      link: '/service-areas/brown-township'
    },
    {
      name: 'Middle Township',
      description: 'Western fringe near Tilden and Maplewood communities.',
      link: '/service-areas/middle-township'
    },
    {
      name: 'Washington Township',
      description: 'Small southern edge of our comprehensive service area.',
      link: '/service-areas/washington-township'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Amazing work! Our house looks brand new. Professional, punctual, and reasonably priced.',
      location: 'Lincoln Township'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'Best pressure washing service in Brownsburg. They restored our deck beautifully.',
      location: 'Brown Township'
    },
    {
      name: 'Lisa Williams',
      rating: 5,
      text: 'Highly recommend! Great communication and fantastic results on our driveway.',
      location: 'Middle Township'
    }
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>Brownsburg Pressure Washing - Professional Cleaning Services</title>
        <meta name="description" content="Professional pressure washing services in Brownsburg, IN. House washing, roof cleaning, driveway cleaning, and commercial services. Serving all Hendricks County townships." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brownsburg Pressure Washing",
            "description": "Professional pressure washing services in Brownsburg, IN",
            "url": "https://brownsburgpressurewashing.com",
            "telephone": "(317) 350-4926",
            "email": "info@brownsburgpressurewashing.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brownsburg",
              "addressRegion": "IN",
              "postalCode": "46112",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.8434",
              "longitude": "-86.3950"
            },
            "areaServed": [
              "Lincoln Township",
              "Brown Township", 
              "Middle Township",
              "Washington Township",
              "Hendricks County"
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
            "sameAs": [
              "https://brownsburgpressurewashing.com/about",
              "https://brownsburgpressurewashing.com/contact"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight">
                Professional <span className="text-blue-500">Pressure Washing</span> in Brownsburg
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Transform your property with our expert cleaning services. We serve all Hendricks, Marion, & Hamilton County townships 
                with safe, effective, and affordable pressure washing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center"
                >
                  Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsCallbackFormOpen(true)}
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Back
                </button>
                <Link
                  to="/services"
                  className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                >
                  Services
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">Same Day Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600">100% Satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <a href="tel:+13173504926" className="text-sm text-blue-500 hover:text-blue-700 transition-colors">
                    (317) 350-4926
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/7078619/pexels-photo-7078619.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional pressure washing service cleaning a house"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive pressure washing services to keep your property looking its absolute best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-blue-500 hover:text-blue-600 font-medium flex items-center"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              Complete Hendricks County Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Brownsburg lies mostly in three Hendricks County townships (plus a slice of a fourth), 
              and we serve them all with professional pressure washing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {townships.map((township, index) => (
              <div 
                key={index}
                className="bg-blue-50 rounded-lg p-8 hover:bg-blue-100 transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">{township.name}</h3>
                <p className="text-gray-700 mb-6">{township.description}</p>
                <Link
                  to={township.link}
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn More About This Area
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across Brownsburg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get your free estimate today and see why Brownsburg homeowners trust us 
            for all their pressure washing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Get Your Free Quote Now
            </button>
            <a 
              href="tel:+13173504926"
              className="bg-white text-navy-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (317) 350-4926
            </a>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Request Call Back
            </button>
          </div>
        </div>
      </section>

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
      <CallbackRequestForm isOpen={isCallbackFormOpen} onClose={() => setIsCallbackFormOpen(false)} />
    </div>
  );
};

export default Home;