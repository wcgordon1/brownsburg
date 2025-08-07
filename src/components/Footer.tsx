import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <img src="/mmlo.jpeg" alt="Brownsburg Pressure Washing Logo" className="h-16 w-16 object-contain rounded-full" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">Brownsburg</span>
                <span className="text-2xl font-semibold text-blue-400 -mt-1">Pressure Washing</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional pressure washing services serving all of Brownsburg and surrounding communities. 
              We make your property sparkle with safe, effective cleaning solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+13173504926" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (317) 350-4926
                </a>
                <a href="sms:+13173504926?body=I%20need%20a%20pressure%20washing%20quote%20quick!" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <MessageSquare className="h-4 w-4 text-blue-400 mr-1" />
                  <span>Text Us</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@brownsburgpressurewashing.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@brownsburgpressurewashing.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Brownsburg, IN 46112</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/house-washing" className="text-gray-300 hover:text-blue-400 transition-colors">House Washing</Link></li>
              <li><Link to="/services/roof-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Roof Cleaning</Link></li>
              <li><Link to="/services/driveway-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services/deck-fence-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Deck & Fence Cleaning</Link></li>
              <li><Link to="/services/commercial-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Commercial Cleaning</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link to="/service-areas/lincoln-township" className="text-gray-300 hover:text-blue-400 transition-colors">Lincoln Township</Link></li>
              <li><Link to="/service-areas/brown-township" className="text-gray-300 hover:text-blue-400 transition-colors">Brown Township</Link></li>
              <li><Link to="/service-areas/middle-township" className="text-gray-300 hover:text-blue-400 transition-colors">Middle Township</Link></li>
              <li><Link to="/service-areas/washington-township" className="text-gray-300 hover:text-blue-400 transition-colors">Washington Township</Link></li>
              <li><Link to="/service-areas/danville" className="text-gray-300 hover:text-blue-400 transition-colors">Danville, IN</Link></li>
              <li><Link to="/service-areas/avon" className="text-gray-300 hover:text-blue-400 transition-colors">Avon, IN</Link></li>
              <li><Link to="/service-areas/noblesville" className="text-gray-300 hover:text-blue-400 transition-colors">Noblesville, IN</Link></li>
              <li><Link to="/service-areas/plainfield" className="text-gray-300 hover:text-blue-400 transition-colors">Plainfield, IN</Link></li>
              <li><Link to="/service-areas/carmel" className="text-gray-300 hover:text-blue-400 transition-colors">Carmel, IN</Link></li>
              <li><Link to="/service-areas/westfield" className="text-gray-300 hover:text-blue-400 transition-colors">Westfield, IN</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Brownsburg Pressure Washing. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Contact</Link>
            <Link to="/gallery" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Gallery</Link>
            <Link to="/blog" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Blog</Link>
            <Link to="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;