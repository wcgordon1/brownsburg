import React, { useState } from 'react';
import { X, CheckCircle, Droplets } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ 
  isOpen, 
  onClose, 
  title = "Get Your Free Quote",
  description = "Fill out the form below and we'll get back to you in a few minutes with a detailed estimate."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'House Washing',
    'Roof Cleaning',
    'Driveway Cleaning',
    'Deck & Fence Cleaning',
    'Commercial Cleaning',
    'Multiple Services'
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
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: '',
          message: ''
        });
        setErrors({});
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose}></div>
        
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          {showSuccess ? (
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quote Request Sent!</h3>
              <p className="mt-2 text-sm text-gray-500">
                Thanks! We'll be in touch in a few minutes with your free estimate.
              </p>
            </div>
          ) : (
            <>
              {/* Logo and Company Name Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <img src="/mml.jpeg" alt="Brownsburg Pressure Washing Logo" className="h-16 w-16 object-contain" />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-navy-900">Brownsburg</span>
                    <span className="text-base font-semibold text-blue-500 -mt-1">Pressure Washing</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-navy-900">{title}</h3>
              </div>
              
              <p className="text-base text-gray-600 mb-6">{description}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.address ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  />
                  {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address}</span>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <span className="text-red-500 text-xs mt-1">{errors.service}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;