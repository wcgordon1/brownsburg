import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Droplets, Star, Zap, Eye, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../../components/QuoteForm';
import CallbackRequestForm from '../../components/CallbackRequestForm';
import FAQSection from '../../components/FAQSection';
import allServices, { getOtherServices } from '../../data/allServices';

const DrivewayCleaning = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const benefits = [
    'Removes oil stains, grease, and tire marks',
    'Eliminates dirt, grime, and mildew',
    'Restores original concrete color',
    'Increases property value and curb appeal',
    'Prevents long-term surface damage',
    'Creates safer, non-slip surfaces'
  ];

  const surfaceTypes = [
    { type: 'Concrete Driveways', description: 'Deep cleaning that removes embedded stains and restores original color' },
    { type: 'Asphalt Driveways', description: 'Gentle cleaning that preserves surface integrity while removing stains' },
    { type: 'Paver Driveways', description: 'Specialized techniques for brick, stone, and interlocking pavers' },
    { type: 'Stamped Concrete', description: 'Careful cleaning that preserves decorative patterns and textures' },
    { type: 'Exposed Aggregate', description: 'Professional methods that clean without damaging aggregate stones' },
    { type: 'Gravel Driveways', description: 'Surface cleaning and weed removal for loose stone surfaces' }
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
      name: 'Amanda Wilson',
      location: 'Lincoln Township',
      text: 'Incredible results! They removed oil stains I thought were permanent. Our concrete driveway looks brand new again.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      location: 'Brown Township',
      text: 'Professional driveway cleaning service. Removed years of stains and grime. Very satisfied with the results.',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      location: 'Middle Township',
      text: 'They cleaned our paver driveway perfectly. Removed all the weeds and stains without damaging the pavers. Excellent work!',
      rating: 5
    }
  ];

  const commonStains = [
    { stain: 'Oil & Grease Stains', solution: 'Hot water extraction and specialized degreasers' },
    { stain: 'Tire Marks', solution: 'High-pressure cleaning with appropriate cleaning agents' },
    { stain: 'Rust Stains', solution: 'Acid-based treatments safe for concrete surfaces' },
    { stain: 'Mold & Mildew', solution: 'Anti-fungal treatments and thorough sanitization' },
    { stain: 'Paint & Sealant', solution: 'Specialized solvents and careful removal techniques' },
    { stain: 'Organic Matter', solution: 'Biodegradable cleaners and pressure washing' }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Surface Protection', description: 'Appropriate pressure levels and techniques to clean without damage' },
    { icon: Droplets, title: 'Eco-Friendly Solutions', description: 'Biodegradable cleaning agents safe for landscaping' },
    { icon: CheckCircle, title: 'Stain Removal Guarantee', description: 'Significant improvement guaranteed or we work until satisfied' }
  ];

  // Get other services to display in the related services section
  const otherServices = getOtherServices('driveway-cleaning');

  // FAQ data for driveway cleaning
  const drivewayCleaningFAQs = [
    {
      question: "How often should I have my driveway cleaned?",
      answer: "Most driveways in Brownsburg benefit from professional cleaning once a year. However, driveways with heavy use, those under trees, or in areas with significant shade may need cleaning every 6-9 months due to faster accumulation of dirt, mold, and organic matter. Regular maintenance cleaning prevents deep staining and extends the life of your driveway surface."
    },
    {
      question: "Can you remove oil stains from my concrete driveway?",
      answer: "Yes, we specialize in removing oil stains from concrete driveways. Using a combination of hot water extraction, specialized degreasers, and appropriate pressure levels, we can remove even old, set-in oil stains. While some extremely deep or long-standing stains may leave a faint shadow, we typically achieve 90-100% improvement in appearance for most oil stains."
    },
    {
      question: "Is your driveway cleaning process safe for my landscaping?",
      answer: "Absolutely. We take great care to protect your landscaping during the driveway cleaning process. Before we begin, we thoroughly wet down surrounding plants and use biodegradable, environmentally friendly cleaning solutions. Our technicians are trained to control overspray and runoff to minimize impact on your lawn, flowers, and shrubs."
    },
    {
      question: "Will pressure washing damage my concrete driveway?",
      answer: "When done properly by professionals, pressure washing will not damage your concrete driveway. We use the appropriate pressure levels for each surface type and condition. Improper pressure washing (too much pressure or holding the nozzle too close) can etch or damage concrete, which is why it's important to hire experienced professionals with the right equipment and training."
    },
    {
      question: "Do you offer driveway sealing after cleaning?",
      answer: "Yes, we offer driveway sealing as an additional service after cleaning. Sealing your driveway provides several benefits: it enhances the appearance with a slight sheen, protects against stains and UV damage, extends the life of your driveway, and makes future cleaning easier. We recommend sealing concrete driveways every 2-3 years for optimal protection."
    },
    {
      question: "How long does driveway cleaning take?",
      answer: "For an average-sized driveway in Brownsburg (2-car width, 20-30 feet long), professional cleaning typically takes 1-2 hours. Larger driveways, those with extensive staining, or special surfaces like pavers may take longer. We'll provide you with a time estimate during your free quote based on your specific driveway characteristics."
    },
    {
      question: "Can you clean my paver driveway without damaging the joints?",
      answer: "Yes, we use specialized techniques for paver driveways that clean effectively while preserving the integrity of the joints. We adjust our pressure levels and use appropriate cleaning solutions for the specific type of pavers. After cleaning, we can also apply polymeric sand if needed to refresh the joints and help prevent weed growth."
    },
    {
      question: "How long should I stay off my driveway after cleaning?",
      answer: "We recommend keeping vehicles off your freshly cleaned driveway for at least 2-4 hours to allow for proper drying. Foot traffic is usually fine after 30-60 minutes. If we apply a sealant after cleaning, you'll need to keep all traffic off the driveway for 24-48 hours, depending on weather conditions and the specific sealer used."
    }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Service Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Driveway Cleaning",
          "description": "Professional driveway cleaning that removes stubborn stains, oil spots, and years of built-up grime. Restore your driveway's original appearance and boost your home's curb appeal.",
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
          "serviceType": "Driveway Cleaning",
          "offers": {
            "@type": "Offer",
            "priceRange": "Starting at $150",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "40",
            "bestRating": "5",
            "worstRating": "1"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
            "width": 800,
            "height": 600
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/services/driveway-cleaning" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <Zap className="h-12 w-12 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">Driveway Cleaning</h1>
              <p className="text-xl text-blue-500 font-semibold">Starting at $150</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional driveway cleaning that removes stubborn stains, oil spots, and years of built-up grime. 
            Restore your driveway's original appearance and boost your home's curb appeal.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our Driveway Cleaning Service
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
              src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional driveway cleaning service removing stains"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Transform Your Driveway's Appearance
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your driveway is one of the first things people notice about your home. Our professional 
              driveway cleaning service uses hot water extraction and specialized cleaning solutions to 
              remove even the most stubborn oil stains, tire marks, and embedded dirt.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We use the appropriate pressure and cleaning methods for each surface type, ensuring 
              effective cleaning without damage to your concrete, asphalt, or paver surfaces. Many homeowners 
              combine driveway cleaning with our <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing service</Link> for 
              complete exterior transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Consider adding our <Link to="/services/deck-fence-cleaning" className="text-blue-500 hover:text-blue-600 underline">deck and fence cleaning</Link> to 
              complete your outdoor space renovation and maximize your property's appeal. Read our 
              <Link to="/blog/seasonal-pressure-washing-guide" className="text-blue-500 hover:text-blue-600 underline mx-1">seasonal cleaning guide</Link> 
              for expert timing tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                Get Free Driveway Cleaning Quote
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
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Driveway Cleaning Transformations
            </h2>
            <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
              View dramatic before and after photos of our driveway cleaning projects. See how we remove 
              stubborn oil stains and restore driveways to their original appearance.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Driveway Cleaning Results
            </Link>
          </div>
        </div>

        {/* Common Stains */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            We Remove All Types of Stains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonStains.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.stain}</h3>
                <p className="text-gray-600 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Get Your Stain Removal Quote
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

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Benefits of Professional Driveway Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Surface Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Safe for All Driveway Surfaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surfaceTypes.map((surface, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{surface.type}</h3>
                <p className="text-gray-600">{surface.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Schedule Your Driveway Cleaning
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

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Our Driveway Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Surface Assessment', 
                description: 'We identify surface type, stain types, and determine the best cleaning approach' 
              },
              { 
                step: '2', 
                title: 'Pre-Treatment', 
                description: 'We apply specialized cleaning solutions to break down oil, grease, and stubborn stains' 
              },
              { 
                step: '3', 
                title: 'Hot Water Cleaning', 
                description: 'We use hot water extraction and appropriate pressure for deep, effective cleaning' 
              },
              { 
                step: '4', 
                title: 'Final Rinse & Seal', 
                description: 'We thoroughly rinse and can apply protective sealants to prevent future staining' 
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
        </div>

        {/* FAQ Section */}
        <FAQSection 
          faqs={drivewayCleaningFAQs} 
          title="Frequently Asked Questions About Driveway Cleaning"
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

        {/* Before/After Results */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Dramatic Before & After Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">×</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Before Cleaning</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Stubborn oil stains</li>
                <li>• Embedded dirt and grime</li>
                <li>• Tire marks and discoloration</li>
                <li>• Reduced curb appeal</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Cleaning</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Hot water extraction</li>
                <li>• Specialized cleaning agents</li>
                <li>• Appropriate pressure levels</li>
                <li>• Expert stain removal</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">After Cleaning</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Stains completely removed</li>
                <li>• Original color restored</li>
                <li>• Clean, fresh appearance</li>
                <li>• Enhanced property value</li>
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
            What Our Customers Say About Driveway Cleaning
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
            Ready to Restore Your Driveway?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let stains and grime diminish your home's curb appeal. Get a free estimate 
            for professional driveway cleaning today. Learn more about our 
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
        title="Get Your Driveway Cleaning Quote"
        description="Professional driveway cleaning services for all surface types. Serving Lincoln, Brown, Middle, and Washington townships."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default DrivewayCleaning;