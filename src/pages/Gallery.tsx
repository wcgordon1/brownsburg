import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, X, Shield, Clock, CheckCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Gallery = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const beforeAfterPairs = [
    {
      id: 1,
      title: 'House Washing Transformation',
      service: 'House Washing',
      location: 'Lincoln Township',
      before: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete exterior house washing removed years of dirt, mildew, and algae buildup.'
    },
    {
      id: 2,
      title: 'Driveway Deep Clean',
      service: 'Driveway Cleaning',
      location: 'Brown Township',
      before: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Oil stains and embedded grime completely removed, restoring original concrete color.'
    },
    {
      id: 3,
      title: 'Roof Cleaning Excellence',
      service: 'Roof Cleaning',
      location: 'Middle Township',
      before: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Safe algae and moss removal extended roof lifespan while restoring appearance.'
    },
    {
      id: 4,
      title: 'Deck Restoration',
      service: 'Deck & Fence Cleaning',
      location: 'Washington Township',
      before: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Weathered deck restored to natural wood beauty, ready for staining and sealing.'
    },
    {
      id: 5,
      title: 'Commercial Building Revival',
      service: 'Commercial Cleaning',
      location: 'Avon',
      before: 'https://images.pexels.com/photos/7078619/pexels-photo-7078619.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional storefront cleaning enhanced business curb appeal and customer attraction.'
    }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Fully Insured', description: 'Complete liability and workers compensation coverage' },
    { icon: Clock, title: 'Efficient Service', description: 'Quick turnaround with minimal disruption' },
    { icon: CheckCircle, title: 'Guaranteed Results', description: '100% satisfaction or we make it right' }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % beforeAfterPairs.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? beforeAfterPairs.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="bg-white">
      {/* Enhanced Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Brownsburg Pressure Washing Before & After Gallery",
          "description": "See the dramatic transformations our professional pressure washing services achieve. Before and after photos from real projects across Brownsburg and surrounding communities.",
          "url": "https://brownsburgpressurewashing.com/gallery",
          "image": beforeAfterPairs.map(pair => pair.after),
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
          "about": {
            "@type": "Thing",
            "name": "Pressure Washing Transformations",
            "description": "Before and after results of professional pressure washing services"
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/gallery" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Before & After Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformations our professional pressure washing services achieve. 
            These real results showcase the power of expert cleaning techniques across all our service areas.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
            The Quality You Can Expect
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

        {/* Gallery Grid */}
        <div className="space-y-16">
          {beforeAfterPairs.map((pair, index) => (
            <div key={pair.id} className="bg-gray-50 rounded-lg p-8">
              {/* Project Info */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">{pair.title}</h2>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {pair.service}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
                    {pair.location}
                  </span>
                </div>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{pair.description}</p>
              </div>

              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={pair.before}
                      alt={`Before ${pair.title}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openLightbox(index)}
                        className="bg-white text-navy-900 px-4 py-2 rounded-lg font-medium flex items-center hover:bg-gray-100 transition-colors"
                        aria-label={`View larger image of ${pair.title} before cleaning`}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Larger
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>

                {/* After Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={pair.after}
                      alt={`After ${pair.title}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openLightbox(index)}
                        className="bg-white text-navy-900 px-4 py-2 rounded-lg font-medium flex items-center hover:bg-gray-100 transition-colors"
                        aria-label={`View larger image of ${pair.title} after cleaning`}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Larger
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Service Link */}
              <div className="mt-6 text-center">
                <Link
                  to={`/services/${pair.service.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                >
                  Learn more about our {pair.service} service
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Links */}
        <div className="mt-20 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            These results speak for themselves. See what our professional pressure washing services can do for your property.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/services/house-washing"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                House Washing
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete exterior cleaning that restores your home's beauty
              </p>
              <div className="flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
            <Link
              to="/services/driveway-cleaning"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                Driveway Cleaning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Remove stubborn stains and restore original appearance
              </p>
              <div className="flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
            <Link
              to="/services/roof-cleaning"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                Roof Cleaning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Safe algae removal that extends your roof's lifespan
              </p>
              <div className="flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Get Your Own Amazing Results
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to see your property transformed? Get a free estimate and join our gallery of satisfied customers.
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

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white text-navy-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-navy-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous image"
            >
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-navy-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next image"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            {/* Image Content */}
            <div className="bg-white rounded-lg p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">
                  {beforeAfterPairs[selectedImage].title}
                </h2>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {beforeAfterPairs[selectedImage].service}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-medium">
                    {beforeAfterPairs[selectedImage].location}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img
                    src={beforeAfterPairs[selectedImage].before}
                    alt={`Before ${beforeAfterPairs[selectedImage].title}`}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={beforeAfterPairs[selectedImage].after}
                    alt={`After ${beforeAfterPairs[selectedImage].title}`}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mt-6 text-center">
                {beforeAfterPairs[selectedImage].description}
              </p>

              <div className="mt-6 text-center">
                <Link
                  to={`/services/${beforeAfterPairs[selectedImage].service.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                  className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
                  onClick={closeLightbox}
                >
                  Learn more about our {beforeAfterPairs[selectedImage].service} service
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Transformation Quote"
        description="Ready to see amazing results like these? Get your free estimate and join our gallery of satisfied customers."
      />
    </div>
  );
};

export default Gallery;