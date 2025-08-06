import React, { useState } from 'react';
import { MessageCircle, Phone, Smartphone, Mail, X } from 'lucide-react';

const MobileChatButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Mobile Chat Button - Only visible on mobile */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="md:hidden fixed bottom-8 right-8 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open chat options"
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsPopupOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-t-2xl w-full max-w-sm shadow-2xl transform transition-all duration-300 ease-out">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img 
                  src="/mml.jpeg" 
                  alt="Brownsburg Pressure Washing Logo" 
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-navy-900">Brownsburg</span>
                  <span className="text-sm font-semibold text-blue-500 -mt-1">Pressure Washing</span>
                </div>
              </div>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close chat options"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Contact Options */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-navy-900 mb-4 text-center">
                Get in Touch
              </h3>
              
              <div className="space-y-3">
                {/* Call Option */}
                <a 
                  href="tel:+13173504926" 
                  className="flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <div className="bg-blue-500 p-3 rounded-full group-hover:bg-blue-600 transition-colors">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-base font-medium text-navy-900 block">Call us</span>
                    <span className="text-sm text-gray-600">(317) 350-4926</span>
                  </div>
                </a>

                {/* Text Option */}
                <a
                  href="sms:+13173504926?body=I need a pressure wash!"
                  className="flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <div className="bg-green-500 p-3 rounded-full group-hover:bg-green-600 transition-colors">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-base font-medium text-navy-900 block">Text us</span>
                    <span className="text-sm text-gray-600">Send a message</span>
                  </div>
                </a>

                {/* Email Option */}
                <a
                  href="mailto:service@brownsburgpressurewashing.com?subject=I need a pressure wash!"
                  className="flex items-center space-x-4 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <div className="bg-purple-500 p-3 rounded-full group-hover:bg-purple-600 transition-colors">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-base font-medium text-navy-900 block">Email us</span>
                    <span className="text-sm text-gray-600">Send an email</span>
                  </div>
                </a>
              </div>

              {/* Footer message */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you ASAP!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileChatButton;