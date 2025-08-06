import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, ArrowRight, Shield, Droplets, Star, AlertTriangle, Eye, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../../components/QuoteForm';
import CallbackRequestForm from '../../components/CallbackRequestForm';
import FAQSection from '../../components/FAQSection';
import allServices, { getOtherServices } from '../../data/allServices';

const RoofCleaning = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const benefits = [
    'Removes algae, moss, and lichen safely',
    'Extends roof lifespan by years',
    'Improves energy efficiency',
    'Prevents costly roof replacement',
    'Restores original color and appearance',
    'Increases property value'
  ];

  const roofTypes = [
    { type: 'Asphalt Shingles', description: 'Gentle cleaning that preserves granules and extends life' },
    { type: 'Metal Roofing', description: 'Specialized techniques for steel, aluminum, and copper roofs' },
    { type: 'Tile Roofing', description: 'Careful cleaning for clay and concrete tile systems' },
    { type: 'Slate Roofing', description: 'Expert handling of delicate natural stone materials' },
    { type: 'Cedar Shakes', description: 'Wood-safe methods that prevent damage and splitting' },
    { type: 'Composite Materials', description: 'Appropriate cleaning for synthetic roofing products' }
  ];

  const townships = [
    {
      name: 'Lincoln Township',
      description: 'Serving Clermont Heights and all southeastern Brownsburg neighborhoods',
      coverage: '75% of Brownsburg'
    },
    {
      name: 'Brown Township',
      description: 'Northern quarter with easy I-74, I-65, and SR-267 access',
      coverage: 'Northern Brownsburg'
    },
    {
      name: 'Middle Township',
      description: 'Western communities including Tilden and Maplewood',
      coverage: 'Western fringe'
    },
    {
      name: 'Washington Township',
      description: 'Southern edge completing our comprehensive coverage',
      coverage: 'Southern border'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      location: 'Lincoln Township',
      text: 'Amazing roof cleaning! Removed years of algae stains safely. Our roof looks brand new and we avoided a costly replacement.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Brown Township',
      text: 'Professional team cleaned our metal roof perfectly. No damage and excellent results. Highly recommend their roof cleaning service.',
      rating: 5
    },
    {
      name: 'David Thompson',
      location: 'Middle Township',
      text: 'They cleaned our tile roof with such care. Removed all the moss and stains without breaking a single tile. Outstanding work!',
      rating: 5
    }
  ];

  const warningSignsData = [
    'Dark streaks or stains on roof surface',
    'Green moss or algae growth',
    'Clogged gutters from roof debris',
    'Higher energy bills due to heat absorption',
    'Visible lichen or fungal growth',
    'Premature aging of roofing materials'
  ];

  const trustBadges = [
    { icon: Shield, title: 'Safety First', description: 'Ground-based cleaning methods and professional safety equipment' },
    { icon: Droplets, title: 'No Damage Guarantee', description: 'Low-pressure soft wash method ensures no damage to materials' },
    { icon: CheckCircle, title: 'Long-Lasting Results', description: 'Treatments provide lasting protection against regrowth' }
  ];

  // Get other services to display in the related services section
  const otherServices = getOtherServices('roof-cleaning');

  // FAQ data for roof cleaning
  const roofCleaningFAQs = [
    {
      question: "Why do I need professional roof cleaning?",
      answer: "Professional roof cleaning removes harmful algae, moss, and lichen that can damage your roofing materials over time. These organisms hold moisture against your roof and can lift shingles, causing leaks and reducing your roof's lifespan by 5-10 years. Regular cleaning prevents expensive repairs and premature roof replacement while restoring your home's appearance."
    },
    {
      question: "Is roof cleaning safe for my shingles?",
      answer: "Yes, when done properly. We use a specialized soft wash technique that applies eco-friendly cleaning solutions at low pressure, effectively removing contaminants without damaging your shingles or voiding manufacturer warranties. High-pressure washing (which we don't use for roofs) can damage shingles by removing granules and reducing their lifespan."
    },
    {
      question: "How often should I have my roof cleaned?",
      answer: "Most homes in Brownsburg benefit from roof cleaning every 2-3 years. However, homes in heavily wooded areas or those with significant shade may need more frequent cleaning due to faster algae and moss growth. We can help you determine the ideal schedule for your specific property during our assessment."
    },
    {
      question: "What causes the black streaks on my roof?",
      answer: "Those black streaks are typically caused by Gloeocapsa Magma, a type of blue-green algae that feeds on limestone filler in asphalt shingles. It thrives in humid environments and spreads via airborne spores. The streaks aren't just unsightly—they trap heat and moisture, accelerating shingle deterioration. Our cleaning process eliminates these organisms and the stains they cause."
    },
    {
      question: "Will roof cleaning extend the life of my roof?",
      answer: "Absolutely. Regular professional roof cleaning can extend your roof's lifespan by 5-10 years by removing harmful organisms that hold moisture against roofing materials and cause deterioration. This preventive maintenance is much more cost-effective than premature roof replacement, which can cost thousands of dollars."
    },
    {
      question: "How long does roof cleaning take?",
      answer: "For an average-sized home in Brownsburg, professional roof cleaning typically takes 2-4 hours. Larger homes or those with steep pitches, multiple levels, or extensive contamination may take longer. We'll provide you with a time estimate during your free quote based on your specific roof characteristics."
    },
    {
      question: "Is your roof cleaning process safe for my landscaping?",
      answer: "Yes, we take great care to protect your landscaping during the roof cleaning process. Before we begin, we thoroughly wet down all plants, shrubs, and flowers to dilute any cleaning solution that might come in contact with them. We also use biodegradable, plant-safe cleaning solutions and rinse thoroughly after cleaning."
    },
    {
      question: "How long will the results of roof cleaning last?",
      answer: "Most homeowners enjoy the results of professional roof cleaning for 2-3 years, depending on environmental factors. Homes surrounded by trees, near water, or in humid areas may need more frequent cleaning. Our treatments include preventive agents that help slow the return of algae and moss, extending the time between cleanings."
    }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Service Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Roof Cleaning",
          "description": "Professional roof cleaning that safely removes algae, moss, and stains while extending your roof's lifespan. Protect your investment with our gentle, effective cleaning methods.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Brownsburg Pressure Washing",
            "url": "https://brownsburgpressurewashing.com",
            "telephone": "(317) 350-4926",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brownsburg",
              "addressRegion": "IN",
              "postalCode": "46112",
              "addressCountry": "US"
            }
          },
          "areaServed": [
            "Lincoln Township",
            "Brown Township",
            "Middle Township", 
            "Washington Township",
            "Brownsburg, IN",
            "Hendricks County"
          ],
          "serviceType": "Roof Cleaning",
          "offers": {
            "@type": "Offer",
            "priceRange": "Starting at $300",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "45",
            "bestRating": "5",
            "worstRating": "1",
            "itemReviewed": {
              "@type": "Service",
              "name": "Roof Cleaning"
            }
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
            "width": 800,
            "height": 600
          }
        })}
      </script>

      <Helmet>
        <title>Roof Cleaning Brownsburg IN - Safe Professional Service</title>
        <meta name="description" content="Professional roof cleaning services in Brownsburg, IN. Safe, effective roof washing that removes algae, moss, and stains while protecting your investment." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/services/roof-cleaning" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <Zap className="h-12 w-12 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">Roof Cleaning</h1>
              <p className="text-xl text-blue-500 font-semibold">Starting at $300</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional roof cleaning that safely removes algae, moss, and stains while extending your roof's lifespan. 
            Protect your investment with our gentle, effective cleaning methods.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our Roof Cleaning Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{badge.title}</h3>
                  <p className="text-gray-600 text-sm">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional roof cleaning service removing algae and stains"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Protect Your Biggest Investment
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your roof is one of your home's most important and expensive components. Our professional 
              roof cleaning service uses low-pressure soft wash techniques to safely remove algae, moss, 
              lichen, and stains without damaging your roofing materials.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Regular roof cleaning not only improves your home's appearance but can extend your roof's 
              lifespan by 5-10 years, saving you thousands in premature replacement costs. Many homeowners 
              combine roof cleaning with our <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing service</Link> for 
              complete exterior maintenance.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              After roof cleaning, consider our <Link to="/services/driveway-cleaning" className="text-blue-500 hover:text-blue-600 underline">driveway cleaning</Link> to 
              complete your property's transformation and maximize curb appeal. Learn more about roof safety in our 
              <Link to="/blog/roof-cleaning-safety-guide" className="text-blue-500 hover:text-blue-600 underline mx-1">comprehensive safety guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                Get Free Roof Cleaning Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setIsCallbackFormOpen(true)}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Call Back
              </button>
            </div>
          </div>
        </div>

        {/* Gallery CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Roof Cleaning Transformations
            </h2>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              View dramatic before and after photos of our roof cleaning projects. See how we safely remove 
              algae, moss, and stains to restore roofs to their original appearance.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Roof Cleaning Results
            </Link>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3" />
            <h2 className="text-xl font-semibold text-navy-900">
              Warning Signs Your Roof Needs Cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warningSignsData.map((sign, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
            >
              Schedule Roof Inspection & Cleaning
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Benefits of Professional Roof Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center mx-2 mt-4 sm:mt-0"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Call Back
            </button>
          </div>
        </div>

        {/* Roof Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Safe for All Roofing Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roofTypes.map((roof, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{roof.type}</h3>
                <p className="text-gray-600">{roof.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Our Safe Roof Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Roof Inspection', 
                description: 'We assess roof condition, material type, and identify problem areas safely from the ground' 
              },
              { 
                step: '2', 
                title: 'Safety Setup', 
                description: 'We protect landscaping, set up safety equipment, and prepare specialized cleaning solutions' 
              },
              { 
                step: '3', 
                title: 'Soft Wash Application', 
                description: 'We apply eco-friendly cleaning solutions using low-pressure techniques that won\'t damage materials' 
              },
              { 
                step: '4', 
                title: 'Gentle Rinse', 
                description: 'We carefully rinse all surfaces and inspect results to ensure complete algae and stain removal' 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Schedule Your Roof Cleaning
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="tel:+13173504926" 
              className="bg-white border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center mx-2 mt-4 sm:mt-0"
            >
              <Phone className="mr-2 h-5 w-5" />
                              Call Us: (317) 350-4926
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection 
          faqs={roofCleaningFAQs} 
          title="Frequently Asked Questions About Roof Cleaning"
        />

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Complete Brownsburg Township Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {townships.map((township, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-navy-900">{township.name}</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {township.coverage}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{township.description}</p>
                <Link
                  to={`/service-areas/${township.name.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Learn More About This Area
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Explore All Services Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Explore All Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Discover our complete range of professional pressure washing services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    <Link to={service.link} className="text-blue-500 hover:text-blue-600">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                  <p className="text-blue-500 font-medium text-sm mb-4">{service.price}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium text-sm"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What Our Customers Say About Roof Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-blue-300 text-sm">
                    <Link to={`/service-areas/${testimonial.location.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-200">
                      {testimonial.location}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Extend Your Roof's Life Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait until damage is done. Get a free estimate for professional roof cleaning 
            and protect your investment for years to come. Learn more about our 
            <Link to="/about" className="text-blue-500 hover:text-blue-600 underline mx-1">professional team</Link> 
            or explore our <Link to="/services" className="text-blue-500 hover:text-blue-600 underline">complete service offerings</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Free Quote Today
            </button>
            <a 
              href="tel:+13173504926" 
              className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
                              Call Us: (317) 350-4926
            </a>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Call Back
            </button>
          </div>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Roof Cleaning Quote"
        description="Professional roof cleaning services for all roofing materials. Serving Lincoln, Brown, Middle, and Washington townships."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default RoofCleaning;