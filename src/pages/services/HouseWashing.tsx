import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, ArrowRight, Shield, Droplets, Star, Eye, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../../components/QuoteForm';
import CallbackRequestForm from '../../components/CallbackRequestForm';
import FAQSection from '../../components/FAQSection';
import allServices, { getOtherServices } from '../../data/allServices';

const HouseWashing = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const benefits = [
    'Removes dirt, mold, mildew, and algae',
    'Restores original color and appearance',
    'Increases property value and curb appeal',
    'Prevents long-term damage to siding',
    'Prepares surfaces for painting or staining',
    'Eliminates allergens and health hazards'
  ];

  const sidingTypes = [
    { type: 'Vinyl Siding', description: 'Gentle cleaning that won\'t damage or fade vinyl materials' },
    { type: 'Brick & Stone', description: 'Specialized techniques for masonry surfaces' },
    { type: 'Wood Siding', description: 'Careful pressure control to protect wood grain' },
    { type: 'Fiber Cement', description: 'Safe cleaning for Hardie board and similar materials' },
    { type: 'Stucco & EIFS', description: 'Low-pressure methods for textured surfaces' },
    { type: 'Metal Siding', description: 'Effective cleaning without scratching or denting' }
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
      name: 'Jennifer Martinez',
      location: 'Lincoln Township',
      text: 'Our vinyl siding looked brand new after their house washing service. Professional team and amazing results!',
      rating: 5
    },
    {
      name: 'Robert Chen',
      location: 'Brown Township',
      text: 'They cleaned our brick home perfectly. Removed years of dirt and stains without any damage.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      location: 'Middle Township',
      text: 'Excellent service on our wood siding. Very careful and thorough. Highly recommend!',
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete liability and workers compensation coverage' },
    { icon: Droplets, title: 'Eco-Friendly', description: 'Safe, biodegradable cleaning solutions' },
    { icon: CheckCircle, title: 'Satisfaction Guaranteed', description: '100% satisfaction or we make it right' }
  ];

  // Get other services to display in the related services section
  const otherServices = getOtherServices('house-washing');

  // FAQ data for house washing
  const houseWashingFAQs = [
    {
      question: "How often should I have my house washed?",
      answer: "Most homes in Brownsburg benefit from annual house washing. However, homes in heavily wooded areas or those with significant shade may need cleaning every 6-9 months due to faster mold and mildew growth. We can help you determine the ideal schedule for your specific property during our initial assessment."
    },
    {
      question: "Is your house washing process safe for my landscaping?",
      answer: "Absolutely. We take great care to protect your landscaping during the house washing process. Before we begin, we thoroughly wet down all plants, shrubs, and flowers to dilute any cleaning solution that might come in contact with them. We also use biodegradable, plant-safe cleaning solutions that won't harm your landscaping when used properly."
    },
    {
      question: "What's the difference between pressure washing and soft washing?",
      answer: "Pressure washing uses high-pressure water to blast away dirt and grime, which can damage many home exterior surfaces. Soft washing, which we use for house washing, combines low pressure with specialized cleaning solutions to safely remove contaminants without risking damage to your siding, trim, windows, or other exterior elements. It's effective yet gentle on your home's surfaces."
    },
    {
      question: "Can you remove black streaks and green algae from my siding?",
      answer: "Yes, our house washing service is specifically designed to eliminate black streaks (which are often caused by mold) and green algae growth from all types of siding. Our specialized cleaning solutions kill these organisms at their roots and remove the unsightly discoloration they cause, restoring your home's clean appearance."
    },
    {
      question: "Will house washing damage my vinyl siding?",
      answer: "When done properly, house washing will not damage vinyl siding. We use a soft wash approach with appropriate pressure levels and cleaning solutions specifically formulated for vinyl siding. This ensures effective cleaning without risking damage to the material, fasteners, or seals. Our technicians are trained to recognize and accommodate the specific needs of different siding materials."
    },
    {
      question: "How long does house washing take?",
      answer: "The time required depends on the size of your home, the level of dirt and contamination, and the accessibility of all exterior surfaces. For an average-sized home in Brownsburg, house washing typically takes 2-4 hours. Larger homes or those with extensive contamination may take longer. We'll provide you with a time estimate during your free quote."
    },
    {
      question: "Do I need to be home during the house washing service?",
      answer: "While it's not absolutely necessary for you to be present during the service, we recommend being home at least when we arrive to discuss any specific concerns or areas that need special attention. If you can't be present, we can make arrangements to complete the work in your absence once we've established the scope of work and any special requirements."
    },
    {
      question: "How long will the results of house washing last?",
      answer: "Most homeowners enjoy the results of professional house washing for 1-2 years, depending on environmental factors. Homes surrounded by trees, near water, or in humid areas may need more frequent cleaning. Regular maintenance washing can extend the life of your siding and maintain your home's appearance and value."
    }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Service Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "House Washing",
          "description": "Professional exterior house cleaning that restores your home's beauty and protects your investment. Safe for all siding materials with guaranteed results.",
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
          "serviceType": "House Washing",
          "offers": {
            "@type": "Offer",
            "priceRange": "Starting at $200",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
            "width": 800,
            "height": 600
          }
        })}
      </script>

      <Helmet>
        <title>House Washing Brownsburg IN - Professional Exterior Cleaning</title>
        <meta name="description" content="Professional house washing services in Brownsburg, IN. Safe, effective exterior cleaning that restores your home's beauty and protects your investment." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/services/house-washing" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <Home className="h-12 w-12 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">House Washing</h1>
              <p className="text-xl text-blue-500 font-semibold">Starting at $200</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional exterior house cleaning that restores your home's beauty and protects your investment. 
            Safe for all siding materials with guaranteed results.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our House Washing Service
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
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional house washing service cleaning home exterior"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Transform Your Home's Appearance
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our professional house washing service uses advanced soft wash techniques to safely clean 
              your home's exterior without damage. We remove years of built-up dirt, mold, mildew, and 
              algae to restore your home's original beauty.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Using eco-friendly cleaning solutions and the proper pressure for each surface type, 
              we ensure your siding, trim, and architectural features are thoroughly cleaned while 
              being completely protected. Many homeowners combine house washing with our <Link to="/services/driveway-cleaning" className="text-blue-500 hover:text-blue-600 underline">driveway cleaning service</Link> for 
              complete exterior transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              After house washing, consider our <Link to="/services/roof-cleaning" className="text-blue-500 hover:text-blue-600 underline">roof cleaning service</Link> to 
              complete your home's exterior maintenance and maximize curb appeal. Read our comprehensive guide in our 
              <Link to="/blog/ultimate-guide-house-washing" className="text-blue-500 hover:text-blue-600 underline mx-1">house washing blog post</Link> 
              for expert tips and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                Get Free House Washing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setIsCallbackFormOpen(true)}
                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Call Back
              </button>
            </div>
          </div>
        </div>

        {/* Gallery CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See House Washing Transformations
            </h2>
            <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
              View dramatic before and after photos of our house washing projects. See how we restore 
              homes to their original beauty with our professional cleaning techniques.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View House Washing Results
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Benefits of Professional House Washing
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

        {/* Siding Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Safe for All Siding Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sidingTypes.map((siding, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{siding.type}</h3>
                <p className="text-gray-600">{siding.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Our House Washing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Property Assessment', 
                description: 'We inspect your home to identify siding type, problem areas, and special requirements' 
              },
              { 
                step: '2', 
                title: 'Surface Preparation', 
                description: 'We protect landscaping, cover electrical outlets, and prepare the cleaning area' 
              },
              { 
                step: '3', 
                title: 'Soft Wash Cleaning', 
                description: 'We apply eco-friendly cleaning solutions and use appropriate pressure for each surface' 
              },
              { 
                step: '4', 
                title: 'Final Rinse & Inspection', 
                description: 'We thoroughly rinse all surfaces and inspect to ensure complete satisfaction' 
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center justify-center w-full sm:w-auto"
              >
                Schedule Your House Washing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="tel:+13173504926" 
                className="bg-white border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us: (317) 350-4926
              </a>
            </div>
          </div>
        </div>

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

        {/* FAQ Section */}
        <FAQSection 
          faqs={houseWashingFAQs} 
          title="Frequently Asked Questions About House Washing"
        />

        {/* Testimonials */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What Our Customers Say About House Washing
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
            Ready to Restore Your Home's Beauty?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free estimate for professional house washing services. 
            Serving all Brownsburg townships with guaranteed results. Learn more about our 
            <Link to="/about" className="text-blue-500 hover:text-blue-600 underline mx-1">company story</Link> 
            or explore our <Link to="/services" className="text-blue-500 hover:text-blue-600 underline">complete service offerings</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold w-full sm:w-auto"
            >
              Get Your Free Quote Today
            </button>
            <a 
              href="tel:+13173504926" 
              className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (317) 555-0123
            </a>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center w-full sm:w-auto"
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
        title="Get Your House Washing Quote"
        description="Professional house washing services for all siding types. Serving Lincoln, Brown, Middle, and Washington townships."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default HouseWashing;