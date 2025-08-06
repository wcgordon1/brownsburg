import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, CheckCircle, ArrowRight, Shield, Clock, Star, Users, Eye, Phone, MessageSquare } from 'lucide-react';
import QuoteForm from '../../components/QuoteForm';
import CallbackRequestForm from '../../components/CallbackRequestForm';
import FAQSection from '../../components/FAQSection';
import allServices, { getOtherServices } from '../../data/allServices';

const CommercialCleaning = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const benefits = [
    'Enhances professional business image',
    'Increases property value and curb appeal',
    'Extends building material lifespan',
    'Improves customer first impressions',
    'Maintains health and safety standards',
    'Reduces long-term maintenance costs'
  ];

  const commercialServices = [
    { 
      service: 'Office Buildings', 
      description: 'Complete exterior cleaning for professional office complexes and corporate buildings',
      features: ['Exterior wall cleaning', 'Window washing', 'Entrance area maintenance', 'Parking lot cleaning']
    },
    { 
      service: 'Retail Storefronts', 
      description: 'Storefront cleaning that attracts customers and maintains professional appearance',
      features: ['Storefront washing', 'Sidewalk cleaning', 'Awning cleaning', 'Sign maintenance']
    },
    { 
      service: 'Restaurants & Food Service', 
      description: 'Specialized cleaning for food service establishments with health code compliance',
      features: ['Grease removal', 'Dumpster area cleaning', 'Drive-thru cleaning', 'Patio maintenance']
    },
    { 
      service: 'Industrial Facilities', 
      description: 'Heavy-duty cleaning for warehouses, manufacturing, and industrial properties',
      features: ['Loading dock cleaning', 'Equipment washing', 'Fleet vehicle cleaning', 'Safety compliance']
    },
    { 
      service: 'Medical Facilities', 
      description: 'Professional cleaning for healthcare facilities with attention to cleanliness standards',
      features: ['Exterior sanitization', 'Entrance cleaning', 'Parking area maintenance', 'Biohazard compliance']
    },
    { 
      service: 'Educational Institutions', 
      description: 'School and university cleaning that maintains safe, clean learning environments',
      features: ['Building exterior cleaning', 'Playground equipment', 'Athletic facilities', 'Parking lots']
    }
  ];

  const townships = [
    {
      name: 'Lincoln Township',
      description: 'Serving Clermont Heights and all southeastern Brownsburg commercial areas',
      coverage: '75% of Brownsburg'
    },
    {
      name: 'Brown Township',
      description: 'Northern commercial corridor with I-74, I-65, and SR-267 access',
      coverage: 'Northern Brownsburg'
    },
    {
      name: 'Middle Township',
      description: 'Western business districts including Tilden and Maplewood areas',
      coverage: 'Western fringe'
    },
    {
      name: 'Washington Township',
      description: 'Southern commercial properties completing our comprehensive coverage',
      coverage: 'Southern border'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      business: 'Chen Medical Center',
      location: 'Lincoln Township',
      text: 'Outstanding commercial cleaning service. They maintain our medical facility to the highest standards. Professional and reliable.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      business: 'Rodriguez Auto Sales',
      location: 'Brown Township',
      text: 'They keep our dealership looking pristine. Regular maintenance cleaning has really improved our customer experience.',
      rating: 5
    },
    {
      name: 'David Thompson',
      business: 'Thompson Manufacturing',
      location: 'Middle Township',
      text: 'Excellent industrial cleaning service. They handle our warehouse and loading docks professionally. Highly recommend.',
      rating: 5
    }
  ];

  const maintenancePrograms = [
    { frequency: 'Weekly', description: 'High-traffic businesses requiring frequent cleaning', ideal: 'Restaurants, retail stores, medical facilities' },
    { frequency: 'Bi-Weekly', description: 'Regular maintenance for professional appearance', ideal: 'Office buildings, service businesses' },
    { frequency: 'Monthly', description: 'Consistent upkeep for most commercial properties', ideal: 'Warehouses, light industrial, schools' },
    { frequency: 'Quarterly', description: 'Seasonal deep cleaning and maintenance', ideal: 'Large facilities, industrial complexes' },
    { frequency: 'Seasonal', description: 'Comprehensive cleaning and preparation', ideal: 'Outdoor facilities, recreational areas' },
    { frequency: 'Custom', description: 'Tailored schedules for unique business needs', ideal: 'Special events, grand openings, inspections' }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete commercial liability coverage protects your business' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'Work around your business hours to minimize disruption' },
    { icon: Users, title: 'Professional Team', description: 'Uniformed, trained professionals who understand commercial standards' }
  ];

  // Get other services to display in the related services section
  const otherServices = getOtherServices('commercial-cleaning');

  // FAQ data for commercial cleaning
  const commercialCleaningFAQs = [
    {
      question: "How can commercial pressure washing benefit my business?",
      answer: "Commercial pressure washing enhances your business in multiple ways: it creates a positive first impression for customers, maintains property value, extends the life of your building materials, demonstrates professionalism, improves safety by removing slip hazards, and helps maintain health standards. Regular cleaning is an investment that pays dividends through improved customer perception and reduced long-term maintenance costs."
    },
    {
      question: "Can you clean my business without disrupting operations?",
      answer: "Absolutely. We specialize in minimizing disruption to your business operations. We can schedule cleaning during off-hours, weekends, or less busy periods. For retail and restaurants, we can work in sections to maintain customer access. Our team is experienced in working efficiently and quietly, and we coordinate closely with your management to ensure minimal impact on your business activities."
    },
    {
      question: "Do you offer maintenance programs for commercial properties?",
      answer: "Yes, we offer customized maintenance programs tailored to your specific business needs. Options include weekly, bi-weekly, monthly, quarterly, or seasonal service schedules. Regular maintenance programs often include discounted rates and priority scheduling. We'll work with you to develop a program that maintains your property's appearance while fitting your budget and operational requirements."
    },
    {
      question: "What types of commercial properties do you service?",
      answer: "We service all types of commercial properties throughout Brownsburg and surrounding areas, including: office buildings, retail storefronts, restaurants and food service establishments, industrial facilities and warehouses, medical and healthcare facilities, educational institutions, apartment complexes, hotels and hospitality venues, and government buildings. Each property type receives specialized cleaning approaches appropriate for its unique requirements."
    },
    {
      question: "Is your commercial cleaning process safe for customers and employees?",
      answer: "Safety is our top priority. We use commercial-grade equipment with proper containment systems to control overspray and runoff. Our cleaning solutions are selected for effectiveness while maintaining safety for people and the environment. We set up appropriate safety barriers and signage during cleaning. For businesses that remain open during cleaning, we maintain clear pathways and ensure all areas are safe before reopening them to traffic."
    },
    {
      question: "How long does commercial cleaning take?",
      answer: "The time required depends on the size of your property, the level of dirt and contamination, and the specific services needed. A small storefront might take 2-4 hours, while a large industrial facility could require multiple days. We provide detailed time estimates during the quoting process and work efficiently to minimize disruption to your business operations."
    },
    {
      question: "Do you provide cleaning for parking lots and concrete areas?",
      answer: "Yes, we offer comprehensive cleaning for all concrete and asphalt surfaces including parking lots, loading docks, drive-thrus, sidewalks, and entryways. Our services include removal of oil stains, gum, graffiti, and other common commercial property contaminants. We can also provide line striping preparation and concrete sealing services to maintain your parking areas."
    },
    {
      question: "What makes your commercial cleaning services different from competitors?",
      answer: "Our commercial services stand out through our business-focused approach: we offer flexible scheduling that works around your operations, provide comprehensive insurance coverage for your protection, employ uniformed professionals trained specifically for commercial properties, use commercial-grade equipment for superior results, offer customized maintenance programs, and provide detailed documentation and reporting. We understand that your business image matters, and we deliver results that enhance your professional appearance."
    }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Service Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Commercial Cleaning",
          "description": "Professional commercial pressure washing services that enhance your business image and maintain property value. Flexible scheduling and maintenance programs for all business types.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Brownsburg Pressure Washing",
            "url": "https://brownsburgpressurewashing.com",
            "telephone": "(317) 555-0123",
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
          "serviceType": "Commercial Pressure Washing",
          "offers": {
            "@type": "Offer",
            "priceRange": "Custom pricing",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "30",
            "bestRating": "5",
            "worstRating": "1"
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
            "width": 800,
            "height": 600
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/services/commercial-cleaning" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-lg mr-4">
              <Building className="h-12 w-12 text-blue-500" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900">Commercial Cleaning</h1>
              <p className="text-xl text-blue-500 font-semibold">Custom Pricing</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional commercial pressure washing services that enhance your business image and maintain 
            property value. Flexible scheduling and maintenance programs for all business types.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Choose Our Commercial Cleaning Service
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
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional commercial building cleaning service"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Enhance Your Professional Image
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your business exterior is the first impression customers have of your company. Our commercial 
              pressure washing services ensure your property always looks professional, clean, and welcoming. 
              We work with businesses of all sizes across all Brownsburg townships.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From office buildings and retail stores to industrial facilities and medical centers, we provide 
              customized cleaning solutions that meet your specific needs, schedule, and budget requirements. 
              Many businesses combine commercial cleaning with our <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">residential services</Link> for 
              comprehensive property management.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Learn more about our <Link to="/about" className="text-blue-500 hover:text-blue-600 underline">professional team</Link> and 
              discover why businesses throughout <Link to="/service-areas/lincoln-township" className="text-blue-500 hover:text-blue-600 underline">Lincoln Township</Link> and 
              beyond trust us for their commercial cleaning needs. Read about the business benefits in our 
              <Link to="/blog/commercial-pressure-washing-benefits" className="text-blue-500 hover:text-blue-600 underline mx-1">commercial cleaning guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center"
              >
                Get Commercial Cleaning Quote
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
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Commercial Cleaning Transformations
            </h2>
            <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
              View dramatic before and after photos of our commercial cleaning projects. See how we enhance 
              business image and maintain professional appearance for all types of commercial properties.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Commercial Results
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Benefits of Professional Commercial Cleaning
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
              Get Your Business Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setIsCallbackFormOpen(true)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center mx-2 mt-4 sm:mt-0"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request Business Callback
            </button>
          </div>
        </div>

        {/* Commercial Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Comprehensive Commercial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Schedule Commercial Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="tel:+13175550123" 
              className="bg-white border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center mx-2 mt-4 sm:mt-0"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call For Business Pricing
            </a>
          </div>
        </div>

        {/* Maintenance Programs */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Flexible Maintenance Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenancePrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900">{program.frequency}</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{program.description}</p>
                <p className="text-blue-600 text-xs font-medium">Ideal for: {program.ideal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Commercial Cleaning Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '1', 
                title: 'Site Assessment', 
                description: 'We evaluate your property, identify specific needs, and develop a customized cleaning plan' 
              },
              { 
                step: '2', 
                title: 'Scheduling Coordination', 
                description: 'We work around your business hours to minimize disruption to operations' 
              },
              { 
                step: '3', 
                title: 'Professional Cleaning', 
                description: 'We execute the cleaning plan using appropriate equipment and commercial-grade solutions' 
              },
              { 
                step: '4', 
                title: 'Quality Inspection', 
                description: 'We conduct thorough inspections and provide ongoing maintenance recommendations' 
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mid-content CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-white text-navy-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center mx-2"
            >
              Start Your Commercial Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection 
          faqs={commercialCleaningFAQs} 
          title="Frequently Asked Questions About Commercial Cleaning"
        />

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Complete Brownsburg Commercial Coverage
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
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            What Business Owners Say About Our Commercial Services
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
                  <p className="text-blue-500 text-sm">{testimonial.business}</p>
                  <p className="text-gray-500 text-xs">
                    <Link to={`/service-areas/${testimonial.location.toLowerCase().replace(' ', '-')}`} className="hover:text-gray-700">
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
            Ready to Enhance Your Business Image?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized quote for commercial pressure washing services. 
            Professional cleaning that works with your schedule and budget. Explore our 
            <Link to="/services" className="text-blue-500 hover:text-blue-600 underline mx-1">complete service offerings</Link> 
            or learn more about our <Link to="/about" className="text-blue-500 hover:text-blue-600 underline">professional team</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Commercial Quote Today
            </button>
            <a 
              href="tel:+13175550123" 
              className="bg-white border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (317) 555-0123
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
        title="Get Your Commercial Cleaning Quote"
        description="Professional commercial pressure washing services for all business types. Serving Lincoln, Brown, Middle, and Washington townships."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default CommercialCleaning;