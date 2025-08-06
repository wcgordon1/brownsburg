import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, X } from 'lucide-react';
import { blogPosts, getAllTags, getAllCategories } from '../data/blogPosts';
import QuoteForm from '../components/QuoteForm';

const Blog = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const allTags = getAllTags();
  const allCategories = getAllCategories();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
      
      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [searchTerm, selectedTag, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag('');
    setSelectedCategory('');
  };

  const hasActiveFilters = searchTerm || selectedTag || selectedCategory;

  // Get URL parameters for tag filtering
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Enhanced Blog Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Brownsburg Pressure Washing Blog",
          "description": "Expert tips, guides, and insights about pressure washing, property maintenance, and exterior cleaning from the professionals at Brownsburg Pressure Washing.",
          "url": "https://brownsburgpressurewashing.com/blog",
          "inLanguage": "en-US",
          "publisher": {
            "@type": "Organization",
            "name": "Brownsburg Pressure Washing",
            "url": "https://brownsburgpressurewashing.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://brownsburgpressurewashing.com/pressure-washer-icon.svg",
              "width": 60,
              "height": 60
            },
            "sameAs": [
              "https://brownsburgpressurewashing.com/about",
              "https://brownsburgpressurewashing.com/contact"
            ]
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": blogPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://brownsburgpressurewashing.com/blog/${post.slug}`,
                "datePublished": post.publishDate,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "image": {
                  "@type": "ImageObject",
                  "url": post.featuredImage,
                  "width": 800,
                  "height": 600
                },
                "keywords": post.tags.join(", "),
                "articleSection": post.category
              }
            }))
          },
          "about": {
            "@type": "Thing",
            "name": "Pressure Washing",
            "description": "Professional pressure washing services, maintenance tips, and property care advice"
          }
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href="https://brownsburgpressurewashing.com/blog" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Brownsburg Pressure Washing Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, guides, and insights about pressure washing, property maintenance, 
            and exterior cleaning from our professional team.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label="Search blog articles"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              {allCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Filter by tag"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center justify-center px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                aria-label="Clear all filters"
              >
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCategory && (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedTag && (
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  Tag: {selectedTag}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredPosts.length === blogPosts.length 
              ? `Showing all ${filteredPosts.length} articles`
              : `Found ${filteredPosts.length} of ${blogPosts.length} articles`
            }
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-navy-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime={post.publishDate} className="mr-4">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </time>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
                        aria-label={`Filter by ${tag} tag`}
                      >
                        <Tag className="h-3 w-3 inline mr-1" />
                        {tag}
                      </button>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Stay Updated with Our Latest Tips
            </h3>
            <p className="text-gray-600 mb-6">
              Get expert pressure washing tips, seasonal maintenance guides, and exclusive offers 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label="Email address for newsletter"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Put These Tips into Action?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our professional team handle your pressure washing needs while you enjoy 
            the results. Get your free estimate today.
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
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)}
        title="Get Your Professional Quote"
        description="Ready to see professional results? Get your free estimate and let our experts handle your pressure washing needs."
      />
    </div>
  );
};

export default Blog;