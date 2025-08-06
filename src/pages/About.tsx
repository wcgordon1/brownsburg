import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Shield, Clock, Users, Award, Eye, Phone } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import CallbackRequestForm from '../components/CallbackRequestForm';

const About = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Comprehensive liability and workers compensation insurance' },
    { icon: Award, title: 'Certified Professionals', description: 'Trained and certified in safe pressure washing techniques' },
    { icon: Clock, title: 'Reliable Service', description: 'On-time service with respect for your schedule' },
    { icon: Users, title: 'Local Experts', description: 'Deep knowledge of Brownsburg and Hendricks County' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      location: 'Lincoln Township',
      rating: 5,
      text: 'Outstanding service! They transformed our house exterior and driveway. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!',
      service: 'House & Driveway Cleaning'
    },
    {
      name: 'Robert Thompson',
      location: 'Brown Township',
      rating: 5,
      text: 'Best pressure washing service in Brownsburg. They cleaned our commercial building and the difference is night and day. Professional equipment and excellent customer service.',
      service: 'Commercial Building Cleaning'
    },
    {
      name: 'Amanda Wilson',
      location: 'Middle Township',
      rating: 5,
      text: 'They restored our deck and fence beautifully. The team was careful around our landscaping and left everything spotless. Fair pricing and fantastic results.',
      service: 'Deck & Fence Restoration'
    },
    {
      name: 'Michael Chen',
      location: 'Lincoln Township',
      rating: 5,
      text: 'Roof cleaning service was incredible. Removed years of algae and stains safely. The team explained the process and protected our property throughout. Very satisfied!',
      service: 'Roof Cleaning'
    },
    {
      name: 'Sarah Davis',
      location: 'Washington Township',
      rating: 5,
      text: 'From quote to completion, everything was handled professionally. Great communication, fair pricing, and amazing results. Our house looks brand new!',
      service: 'Complete House Washing'
    },
    {
      name: 'David Rodriguez',
      location: 'Brown Township',
      rating: 5,
      text: 'Excellent driveway cleaning service. Removed oil stains we thought were permanent. Quick service and reasonable prices. Will definitely use again.',
      service: 'Driveway Cleaning'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '5', label: 'Years Experience' },
    { number: '4', label: 'Townships Served' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="bg-white">
      {/* Enhanced Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Brownsburg Pressure Washing",
          "description": "Learn about Brownsburg Pressure Washing, your trusted local partner for professional pressure washing services throughout all four Hendricks County townships.",
          "url": "https://brownsburgpressurewashing.com/about",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Brownsburg Pressure Washing",
            "description": "Professional pressure washing services in Brownsburg, IN serving all four Hendricks County townships with comprehensive cleaning solutions.",
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
            "areaServed": [
              "Lincoln Township",
              "Brown Township",
              "Middle Township",
              "Washington Township",
              "Hendricks County"
            ],
            "foundingDate": "2019",
            "numberOfEmployees": "5-10",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About Brownsburg Pressure Washing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted local partner for professional pressure washing services throughout 
            Brownsburg and the surrounding communities.
          </p>
        </div>

        {/* Owner Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-[4/3]">
            <img
              src="/mason.jpeg"
              alt="Our logo and dog - Mason"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="lazy"
              width="600"
              height="450"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded right here in Brownsburg, we understand the unique needs of our community. 
              What started as a small local business has grown into the most trusted pressure 
              washing service across all four townships - <Link to="/service-areas/lincoln-township" className="text-blue-500 hover:text-blue-600 underline">Lincoln</Link>, 
              <Link to="/service-areas/brown-township" className="text-blue-500 hover:text-blue-600 underline mx-1">Brown</Link>, 
              <Link to="/service-areas/middle-township" className="text-blue-500 hover:text-blue-600 underline mx-1">Middle</Link>, and 
              <Link to="/service-areas/washington-township" className="text-blue-500 hover:text-blue-600 underline">Washington</Link>.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We take pride in being your neighbors, serving where we live and work. Our commitment 
              to quality, safety, and customer satisfaction has made us the go-to choice for 
              homeowners and businesses throughout Hendricks County. From <Link to="/services/house-washing" className="text-blue-500 hover:text-blue-600 underline">house washing</Link> to 
              <Link to="/services/commercial-cleaning" className="text-blue-500 hover:text-blue-600 underline mx-1">commercial cleaning</Link>, we provide comprehensive solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Every job is an opportunity to enhance our community, one clean surface at a time. 
              We're not just washing buildings - we're helping preserve property values, extend 
              material lifespans, and keep Brownsburg beautiful. Explore our complete range of 
              <Link to="/services" className="text-blue-500 hover:text-blue-600 underline mx-1">professional services</Link> 
              to see how we can help your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Work With Us Today
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
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg p-8 text-white mb-16">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Our Amazing Work
            </h2>
            <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. View our before and after gallery to see the incredible 
              transformations we achieve for homes and businesses throughout Brownsburg.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Our Before & After Gallery
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Brownsburg Trusts Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Stats */}
        <div className="bg-navy-900 rounded-lg p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            Our Values & Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-blue-100 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We use professional-grade equipment and proven techniques to deliver results 
                that exceed expectations. Every surface is treated with care and precision, whether it's 
                <Link to="/services/roof-cleaning" className="text-blue-500 hover:text-blue-600 underline mx-1">roof cleaning</Link> 
                or <Link to="/services/driveway-cleaning" className="text-blue-500 hover:text-blue-600 underline">driveway restoration</Link>.
              </p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Safety & Protection</h3>
              <p className="text-gray-600">
                Your property and landscaping are protected throughout our process. We're fully 
                insured and use eco-friendly cleaning solutions whenever possible. Learn more about our 
                <Link to="/services/deck-fence-cleaning" className="text-blue-500 hover:text-blue-600 underline mx-1">safe cleaning methods</Link>.
              </p>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-lg p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                As your neighbors, we're invested in Brownsburg's success. We support local 
                businesses and contribute to keeping our community beautiful and thriving. 
                <Link to="/contact" className="text-blue-500 hover:text-blue-600 underline mx-1">Contact us</Link> 
                to learn how we can help your property.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-500">
                    <Link to={`/service-areas/${testimonial.location.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-600">
                      {testimonial.location}
                    </Link>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Promise */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Our Service Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">What You Can Expect:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Free, detailed estimates with no hidden costs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Professional, uniformed, and courteous team</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Protection of your property and landscaping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Complete cleanup after every job</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">Our Guarantee:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">100% satisfaction or we'll make it right</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Prompt response to all inquiries</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Competitive, fair pricing for quality work</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Ongoing support and maintenance advice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers throughout Brownsburg who trust us 
            for professional pressure washing services. Explore our 
            <Link to="/services" className="text-blue-500 hover:text-blue-600 underline mx-1">complete service offerings</Link> 
            or <Link to="/contact" className="text-blue-500 hover:text-blue-600 underline">contact us</Link> today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
            >
              Get Your Free Estimate Today
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
        title="Get Your Free Quote"
        description="Ready to see what professional pressure washing can do for your property? Fill out the form below for your free, no-obligation estimate."
      />

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default About;