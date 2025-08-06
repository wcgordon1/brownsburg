import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Fence, CheckCircle, ArrowRight, Shield, Droplets, Star, TreePine, Eye, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../../components/QuoteForm';
import CallbackRequestForm from '../../components/CallbackRequestForm';
import FAQSection from '../../components/FAQSection';
import allServices, { getOtherServices } from '../../data/allServices';

const DeckFenceCleaning = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const benefits = [
    'Removes dirt, mildew, and weathering stains',
    'Restores natural wood color and grain',
    'Prepares surfaces for staining or sealing',
    'Extends the lifespan of wood materials',
    'Eliminates slippery algae and moss',
    'Enhances outdoor living space appeal'
  ];

  const materialTypes = [
    { type: 'Pressure-Treated Wood', description: 'Gentle cleaning that preserves treatment while removing stains' },
    { type: 'Cedar & Redwood', description: 'Specialized care for premium wood species to maintain natural beauty' },
    { type: 'Composite Decking', description: 'Safe cleaning methods for synthetic and composite materials' },
    { type: 'Vinyl Fencing', description: 'Effective cleaning that restores original color without damage' },
    { type: 'Chain Link Fencing', description: 'Thorough cleaning of metal surfaces and removal of rust stains' },
    { type: 'Wrought Iron', description: 'Careful cleaning and rust prevention for decorative metal work' }
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
      name: 'Sarah Davis',
      location: 'Lincoln Township',
      text: 'They restored our weathered deck beautifully! The wood looks like new and they were so careful around our plants.',
      rating: 5
    },
    {
      name: 'Michael Thompson',
      location: 'Brown Township',
      text: 'Excellent fence cleaning service. Removed years of dirt and mildew from our vinyl fence. Looks brand new again!',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Middle Township',
      text: 'Professional deck cleaning that prepared our wood perfectly for staining. Great communication and results.',
      rating: 5
    }
  ];

  const seasonalTips = [
    { season: 'Spring', tip: 'Perfect time for deep cleaning after winter weather damage' },
    { season: 'Summer', tip: 'Regular maintenance cleaning to prevent mold and mildew buildup' },
    { season: 'Fall', tip: 'Pre-winter cleaning and preparation for staining or sealing' },
    { season: 'Winter', tip: 'Light maintenance and inspection for damage prevention' }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Wood Protection', description: 'Gentle pressure and wood-safe cleaners ensure no damage' },
    { icon: Droplets, title: 'Plant-Safe Solutions', description: 'Biodegradable cleaners that won\'t harm landscaping' },
    { icon: CheckCircle, title: 'Staining Preparation', description: 'Perfect surface preparation for optimal stain adhesion' }
  ];

  // Get other services to display in the related services section
  const otherServices = getOtherServices('deck-fence-cleaning');

  // FAQ data for deck and fence cleaning
  const deckFenceCleaningFAQs = [
    {
      question: "How often should I have my deck and fence cleaned?",
      answer: "Most wooden decks and fences in Brownsburg benefit from professional cleaning once a year, typically in spring. Composite decking and vinyl fencing may need less frequent cleaning, usually every 1-2 years. Regular cleaning prevents deep-set mold and mildew, extends the life of your outdoor structures, and maintains their appearance and safety."
    },
    {
      question: "Will pressure washing damage my wooden deck?",
      answer: "When done properly by professionals, pressure washing will not damage your wooden deck. We use lower pressure settings specifically calibrated for wood surfaces and maintain the proper distance from the surface. Our technicians are trained to clean with the grain of the wood to prevent fuzzing or splintering that can occur with improper pressure washing techniques."
    },
    {
      question: "Can you clean composite decking like Trex or TimberTech?",
      answer: "Yes, we specialize in cleaning composite decking materials including Trex, TimberTech, Azek, and other brands. These materials require specific cleaning approaches different from natural wood. We use manufacturer-approved cleaning methods and solutions that effectively remove dirt and mold without damaging the composite material or voiding warranties."
    },
    {
      question: "Do I need to stain my deck after cleaning?",
      answer: "While not immediately necessary, staining after cleaning is highly recommended for wooden decks. Cleaning removes the old, deteriorated stain and prepares the wood for new protection. We recommend waiting 2-3 days after cleaning (depending on weather conditions) before applying a new stain or sealant. We can provide recommendations for quality stain products suitable for your specific wood type."
    },
    {
      question: "Is your deck and fence cleaning process safe for my plants and landscaping?",
      answer: "Absolutely. We take great care to protect your landscaping during the cleaning process. Before we begin, we thoroughly wet down surrounding plants and use biodegradable, environmentally friendly cleaning solutions. Our technicians are trained to control overspray and runoff to minimize impact on your garden, flowers, and shrubs."
    },
    {
      question: "How long does deck and fence cleaning take?",
      answer: "For an average-sized deck (300-400 square feet) or fence (100 linear feet), professional cleaning typically takes 2-4 hours. Larger structures, those with extensive mold or mildew, or special materials may take longer. We'll provide you with a time estimate during your free quote based on your specific deck or fence characteristics."
    },
    {
      question: "Can you remove gray weathering from my wooden fence?",
      answer: "Yes, we can remove the gray weathering from wooden fences and restore them to a more natural appearance. This graying is caused by UV damage and surface oxidation. Our cleaning process removes the damaged wood fibers and exposes fresh wood beneath. For best results and long-term protection, we recommend applying a quality stain or sealant after cleaning to prevent rapid re-graying."
    },
    {
      question: "How long should I stay off my deck after cleaning?",
      answer: "We recommend keeping foot traffic off your freshly cleaned deck for at least 24 hours to allow for proper drying. If you're planning to stain or seal afterward, you'll need to ensure the wood is completely dry, which typically takes 2-3 days of good weather (sunny, low humidity). We'll provide specific recommendations based on your deck material and local weather conditions."
    }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Service Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Deck & Fence Cleaning",
          "description": "Professional deck and fence cleaning that restores natural beauty and extends the life of your outdoor structures. Safe for all materials with expert preparation for staining and sealing.",
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
          "serviceType": "Deck & Fence Cleaning",
          "offers": {
            "@type": "Offer",
            "priceRange": "Starting at $175",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "35",
            "bestRating": "5",
            "worstRating": "1"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=800",
            "width": 800,
            "height": 600
          }
        })}
      </script>

      <Helmet>
        <title>Deck & Fence Cleaning Brownsburg IN - Wood Restoration</title>
        <meta name="description" content="Professional deck and fence cleaning services in Brownsburg, IN. Restore and protect your wood surfaces with our specialized cleaning techniques." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/services/deck-fence-cleaning" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <Fence className="h-12 w-12 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">Deck & Fence Cleaning</h1>
              <p className="text-xl text-blue-500 font-semibold">Starting at $175</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional deck and fence cleaning that restores natural beauty and extends the life of your outdoor structures. 
            Safe for all materials with expert preparation for staining and sealing.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our Deck & Fence Cleaning Service
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
              src="https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional deck and fence cleaning service"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Restore Your Outdoor Living Spaces
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your deck and fence are significant investments that enhance your outdoor living experience. 
              Our professional cleaning service removes years of weathering, dirt, mildew, and stains to 
              restore the natural beauty of your wood and other materials.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We use wood-safe cleaning solutions and appropriate pressure levels to clean effectively 
              without damaging delicate wood fibers or surface treatments. Perfect preparation for 
              staining, sealing, or simply enjoying your outdoor spaces. Many homeowners combine this service 
              with our <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing</Link> for 
              complete property transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Consider adding our <Link to="/services/driveway-cleaning" className="text-blue-500 hover:text-blue-600 underline">driveway cleaning service</Link> to 
              complete your outdoor renovation project and maximize your property's appeal. Check out our 
              <Link to="/blog/seasonal-pressure-washing-guide" className="text-blue-500 hover:text-blue-600 underline mx-1">seasonal cleaning guide</Link> 
              for optimal timing tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                Get Free Deck & Fence Quote
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
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Deck & Fence Transformations
            </h2>
            <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto">
              View dramatic before and after photos of our deck and fence cleaning projects. See how we restore 
              weathered wood and other materials to their natural beauty.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Deck & Fence Results
            </Link>
          </div>
        </div>

        {/* Seasonal Care */}
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Year-Round Deck & Fence Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalTips.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.season}</h3>
                <p className="text-gray-600 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Schedule Your Seasonal Cleaning
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Benefits of Professional Deck & Fence Cleaning
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

        {/* Material Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Safe for All Deck & Fence Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialTypes.map((material, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{material.type}</h3>
                <p className="text-gray-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Our Deck & Fence Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Material Assessment', 
                description: 'We identify wood type, condition, and previous treatments to determine the safest approach' 
              },
              { 
                step: '2', 
                title: 'Plant Protection', 
                description: 'We carefully protect surrounding landscaping and apply pre-treatment solutions' 
              },
              { 
                step: '3', 
                title: 'Gentle Cleaning', 
                description: 'We use appropriate pressure and wood-safe cleaners to remove stains without damage' 
              },
              { 
                step: '4', 
                title: 'Preparation Finish', 
                description: 'We ensure surfaces are properly prepared for staining, sealing, or natural weathering' 
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
              Schedule Your Deck & Fence Cleaning
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
          faqs={deckFenceCleaningFAQs} 
          title="Frequently Asked Questions About Deck & Fence Cleaning"
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

        {/* Before/After Comparison */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Dramatic Transformation Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Before Cleaning</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Gray, weathered appearance</li>
                <li>• Mold and mildew stains</li>
                <li>• Slippery, unsafe surfaces</li>
                <li>• Poor preparation for staining</li>
                <li>• Reduced outdoor enjoyment</li>
              </ul>
            </div>
            <div className="bg-green-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">After Cleaning</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Natural wood color restored</li>
                <li>• Clean, fresh appearance</li>
                <li>• Safe, non-slip surfaces</li>
                <li>• Ready for staining/sealing</li>
                <li>• Enhanced outdoor living</li>
              </ul>
            </div>
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-white text-navy-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Get Your Transformation Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            What Our Customers Say About Deck & Fence Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-blue-500 text-sm">
                    <Link to={`/service-areas/${testimonial.location.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600">
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
            Ready to Restore Your Outdoor Spaces?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your weathered deck and fence into beautiful outdoor living spaces. 
            Get a free estimate for professional cleaning today. Learn more about our 
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
        title="Get Your Deck & Fence Cleaning Quote"
        description="Professional deck and fence cleaning services for all materials. Serving Lincoln, Brown, Middle, and Washington townships."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default DeckFenceCleaning;