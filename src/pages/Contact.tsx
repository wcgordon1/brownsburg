import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Star, Users, Eye, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import CallbackRequestForm from '../components/CallbackRequestForm';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
    preferredContact: 'phone',
    preferredTime: 'morning'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isCallbackFormOpen, setIsCallbackFormOpen] = useState(false);

  const services = [
    'House Washing',
    'Roof Cleaning', 
    'Driveway Cleaning',
    'Deck & Fence Cleaning',
    'Commercial Cleaning',
    'Multiple Services',
    'Other (specify in message)'
  ];

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete liability and workers compensation coverage' },
    { icon: Star, title: 'Satisfaction Guaranteed', description: '100% satisfaction or we make it right' },
    { icon: Users, title: 'Professional Team', description: 'Uniformed, trained professionals' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phone.replace(/[\s\-\(\)\.]/g, '');
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Please enter a complete address';
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: '',
          message: '',
          preferredContact: 'phone',
          preferredTime: 'morning'
        });
        setErrors({});
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your quote request has been received. We'll contact you within 24 hours to discuss your project and schedule your free estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+13173504926" className="text-blue-500 hover:text-blue-600 font-medium flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Call us at (317) 350-4926
            </a>
            <a href="sms:+13173504926?body=I%20need%20a%20pressure%20washing%20quote%20quick!" className="text-blue-500 hover:text-blue-600 font-medium flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Text us for quick service
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Enhanced LocalBusiness Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Brownsburg Pressure Washing",
          "description": "Professional pressure washing services in Brownsburg, IN. House washing, roof cleaning, driveway cleaning, and commercial services. Serving all Hendricks County townships.",
          "url": "https://brownsburgpressurewashing.com",
          "telephone": "(317) 350-4926",
          "email": "info@brownsburgpressurewashing.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Brownsburg",
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
            {
              "@type": "Place",
              "name": "Lincoln Township"
            },
            {
              "@type": "Place", 
              "name": "Brown Township"
            },
            {
              "@type": "Place",
              "name": "Middle Township"
            },
            {
              "@type": "Place",
              "name": "Washington Township"
            },
            {
              "@type": "Place",
              "name": "Hendricks County"
            },
            {
              "@type": "Place",
              "name": "Brownsburg, IN"
            }
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
          "paymentAccepted": ["Cash", "Check", "Credit Card"],
          "currenciesAccepted": "USD",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pressure Washing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "House Washing",
                  "description": "Professional exterior house cleaning"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "200",
                  "priceCurrency": "USD",
                  "valueAddedTaxIncluded": false
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Roof Cleaning",
                  "description": "Safe roof cleaning and maintenance"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "300",
                  "priceCurrency": "USD",
                  "valueAddedTaxIncluded": false
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Driveway Cleaning",
                  "description": "Deep cleaning for concrete and asphalt surfaces"
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "150",
                  "priceCurrency": "USD",
                  "valueAddedTaxIncluded": false
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Jennifer Martinez"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": "Outstanding service! They transformed our house exterior and driveway. The team was professional, punctual, and the results exceeded our expectations."
            }
          ]
        })}
      </script>

      <Helmet>
        <title>Contact Brownsburg Pressure Washing - Get Your Free Quote</title>
        <meta name="description" content="Contact Brownsburg Pressure Washing for your free estimate. Call (317) 350-4926 or fill out our contact form for professional pressure washing services." />
        <link rel="canonical" href="https://brownsburgpressurewashing.com/contact" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Get Your Free Quote
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your property? Fill out our detailed quote form below, 
            and we'll provide you with a comprehensive estimate within 24 hours.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            Why Trust Us With Your Property
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-navy-900 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <a href="tel:+13173504926" className="text-gray-300 hover:text-blue-400 transition-colors">
                        (317) 350-4926
                      </a>
                      <a href="sms:+13173504926?body=I%20need%20a%20pressure%20washing%20quote%20quick!" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>Text for quick quote</span>
                      </a>
                    </div>
                    <p className="text-sm text-gray-400">Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:info@brownsburgpressurewashing.com" className="hover:text-blue-400 transition-colors">
                        info@brownsburgpressurewashing.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-400">24-hour response guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-300">All Brownsburg Townships</p>
                    <p className="text-sm text-gray-400">Lincoln, Brown, Middle & Washington</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 7 AM - 7 PM</p>
                    <p className="text-gray-300">Saturday: 8 AM - 5 PM</p>
                    <p className="text-gray-300">Sunday: Emergency service only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-600 rounded-lg">
                <h3 className="font-semibold mb-2">Quick Response Promise</h3>
                <p className="text-sm text-gray-200">
                  We respond to all quote requests within 24 hours and can often provide 
                  same-day estimates for urgent projects.
                </p>
              </div>
            </div>

            {/* Request Call Back Button */}
            <div className="bg-blue-50 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">Prefer a Phone Call?</h3>
              <p className="text-gray-600 mb-4">
                We can call you back at a time that's convenient for you. No need to wait on hold!
              </p>
              <button 
                onClick={() => setIsCallbackFormOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center w-full justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Request a Call Back
              </button>
            </div>

            {/* Gallery Link */}
            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-3">See Our Work</h3>
              <p className="text-gray-600 mb-4">
                View our before and after gallery to see the dramatic transformations we achieve with our professional pressure washing services.
              </p>
              <Link 
                to="/gallery" 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Before & After Gallery
              </Link>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Request Your Free Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-red-500 text-xs mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                      placeholder="(317) 350-4926"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="text-red-500 text-xs mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="your.email@example.com"
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="text-red-500 text-xs mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.address ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="123 Main St, Brownsburg, IN 46112"
                    aria-required="true"
                    aria-invalid={errors.address ? "true" : "false"}
                    aria-describedby={errors.address ? "address-error" : undefined}
                  />
                  {errors.address && (
                    <span id="address-error" className="text-red-500 text-xs mt-1 block">
                      {errors.address}
                    </span>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    aria-required="true"
                    aria-invalid={errors.service ? "true" : "false"}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <span id="service-error" className="text-red-500 text-xs mt-1 block">
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* Contact Preferences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-label="Select your preferred contact method"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="email">Email</option>
                      <option value="text">Text Message</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Best Time to Contact
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-label="Select your preferred contact time"
                    >
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 7 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details & Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please describe your project in detail. Include information about the size of areas to be cleaned, any specific concerns, timeline preferences, or special requirements..."
                    aria-label="Additional project details"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
                  aria-label={isSubmitting ? "Sending your request..." : "Get my free quote"}
                >
                  {isSubmitting ? 'Sending Your Request...' : 'Get My Free Quote'}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-navy-900 mb-2">What Happens Next?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• We'll review your request and contact you within 24 hours</li>
                  <li>• Schedule a convenient time for your free on-site estimate</li>
                  <li>• Provide a detailed quote with no hidden fees</li>
                  <li>• Answer any questions about our services and process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Why Choose Our Quote Process?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">No Pressure Sales</h3>
              <p className="text-gray-600">
                We provide honest, detailed estimates without high-pressure sales tactics. 
                Take your time to make the right decision.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Most quote requests receive a response within 4-6 hours during business hours. 
                We respect your time and schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Detailed Estimates</h3>
              <p className="text-gray-600">
                Our quotes include detailed breakdowns of services, timeline, and pricing 
                so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't want to wait? Contact us directly for immediate assistance with your pressure washing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13173504926" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (317) 350-4926
              </a>
              <a 
                href="sms:+13173504926?body=I%20need%20a%20pressure%20washing%20quote%20quick!" 
                className="bg-blue-500 text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Text for Quick Quote
              </a>
              <button
                onClick={() => setIsCallbackFormOpen(true)}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request Call Back
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Link */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              See Our Work Before You Decide
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Browse our before and after gallery to see the quality of our work and the dramatic 
              transformations we achieve for properties throughout Brownsburg.
            </p>
            <Link
              to="/gallery"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Before & After Gallery
            </Link>
          </div>
        </div>
      </div>

      <CallbackRequestForm 
        isOpen={isCallbackFormOpen} 
        onClose={() => setIsCallbackFormOpen(false)} 
      />
    </div>
  );
};

export default Contact;