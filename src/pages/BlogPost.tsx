import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import TableOfContents from '../components/TableOfContents';
import QuoteForm from '../components/QuoteForm';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <div className="bg-white">
      {/* Enhanced BlogPosting Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": {
            "@type": "ImageObject",
            "url": post.featuredImage,
            "width": 800,
            "height": 600
          },
          "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://brownsburgpressurewashing.com/about"
          },
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
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://brownsburgpressurewashing.com/blog/${post.slug}`
          },
          "url": `https://brownsburgpressurewashing.com/blog/${post.slug}`,
          "keywords": post.tags.join(", "),
          "articleSection": post.category,
          "wordCount": post.content.split(' ').length,
          "timeRequired": post.readTime,
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "about": {
            "@type": "Thing",
            "name": "Pressure Washing",
            "description": "Professional pressure washing services and maintenance tips"
          },
          "mentions": [
            {
              "@type": "Service",
              "name": "Pressure Washing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Brownsburg Pressure Washing"
              }
            }
          ]
        })}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href={`https://brownsburgpressurewashing.com/blog/${post.slug}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-700">{post.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors inline-flex items-center"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Featured Image */}
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
                loading="lazy"
              />

              {/* Excerpt */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-lg text-gray-700 italic">
                  {post.excerpt}
                </p>
              </div>
            </header>

            {/* Table of Contents - Now positioned here and filtered to h2 only */}
            <TableOfContents content={post.content} filterLevel={2} />

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  h1: ({ children, ...props }) => (
                    <h1 className="text-3xl font-bold text-navy-900 mt-8 mb-4" {...props}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4" {...props}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 className="text-xl font-bold text-navy-900 mt-6 mb-3" {...props}>
                      {children}
                    </h3>
                  ),
                  h4: ({ children, ...props }) => (
                    <h4 className="text-lg font-semibold text-navy-900 mt-6 mb-3" {...props}>
                      {children}
                    </h4>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="text-gray-700 mb-4 leading-relaxed" {...props}>
                      {children}
                    </p>
                  ),
                  ul: ({ children, ...props }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
                      {children}
                    </ul>
                  ),
                  ol: ({ children, ...props }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
                      {children}
                    </ol>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-gray-700" {...props}>
                      {children}
                    </li>
                  ),
                  blockquote: ({ children, ...props }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 italic text-gray-700" {...props}>
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, ...props }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  ),
                  pre: ({ children, ...props }) => (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
                      {children}
                    </pre>
                  ),
                  strong: ({ children, ...props }) => (
                    <strong className="font-semibold text-navy-900" {...props}>
                      {children}
                    </strong>
                  ),
                  a: ({ children, href, ...props }) => (
                    <a 
                      href={href} 
                      className="text-blue-500 hover:text-blue-600 underline" 
                      {...props}
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt, ...props }) => (
                    <img 
                      src={src} 
                      alt={alt || ''} 
                      className="w-full rounded-lg shadow-md my-6" 
                      loading="lazy"
                      {...props}
                    />
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* CTA Section */}
            <div className="bg-blue-50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Ready to Get Professional Results?
              </h3>
              <p className="text-gray-600 mb-6">
                Don't let pressure washing be a hassle. Let our professional team handle it 
                while you enjoy the amazing results. Get your free estimate today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  Get Your Free Quote
                </button>
                <Link
                  to="/services"
                  className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/blog"
                className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">About the Author</h4>
              <div className="flex items-center mb-3">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-navy-900">{post.author}</p>
                  <p className="text-sm text-gray-600">Pressure Washing Expert</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Professional pressure washing specialist with years of experience helping 
                homeowners and businesses maintain their properties.
              </p>
            </div>

            {/* Share */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h4 className="text-lg font-semibold text-navy-900 mb-3">Share This Article</h4>
              <div className="flex space-x-3">
                <button 
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                  aria-label="Share on Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button 
                  className="bg-blue-800 text-white p-2 rounded hover:bg-blue-900 transition-colors"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  aria-label="Share on Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button 
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </Link>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-navy-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h4>

                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{new Date(relatedPost.publishDate).toLocaleDateString()}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>

                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center"
                    >
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
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

export default BlogPost;