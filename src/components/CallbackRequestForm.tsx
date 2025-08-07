import React, { useState } from 'react';
import { X, CheckCircle, Phone, Clock, Calendar } from 'lucide-react';

interface CallbackRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  phone?: string;
  preferredTime?: string;
}

const CallbackRequestForm: React.FC<CallbackRequestFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'morning'
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    { value: 'morning', label: 'Morning (8 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 7 PM)' },
    { value: 'nextday', label: 'Tomorrow' },
    { value: 'asap', label: 'As Soon As Possible' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phone.replace(/[\s\-().]/g, '');
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    // Time validation
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      // Send callback request via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'callback',
          name: formData.name,
          phone: formData.phone,
          preferredTime: formData.preferredTime
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send callback request');
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({
          name: '',
          phone: '',
          preferredTime: 'morning'
        });
        setErrors({});
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show user-friendly error
      alert('Sorry, there was an error sending your request. Please try calling us directly at (317) 350-4926.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" onClick={onClose}></div>
        
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
          {showSuccess ? (
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Call Back Request Sent!</h3>
              <p className="mt-2 text-sm text-gray-500">
                Thanks! We'll call you back at your preferred time.
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
                    <span className="text-sm font-semibold text-blue-500 -mt-1">Pressure Washing</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-navy-900">Request a Call Back</h3>
              </div>
              
              <p className="text-base text-gray-600 mb-6">
                Leave your details below and we'll call you back at your preferred time. No need to wait on hold!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Your name"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
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
                    placeholder="(317) 350-4926"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Best Time to Call *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.preferredTime ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>{slot.label}</option>
                    ))}
                  </select>
                  {errors.preferredTime && <span className="text-red-500 text-xs mt-1">{errors.preferredTime}</span>}
                </div>

                <div className="flex items-center mt-4 bg-blue-50 p-3 rounded-md">
                  <Phone className="h-5 w-5 text-blue-500 mr-2" />
                  <p className="text-sm text-gray-700">
                    We'll call you back at your preferred time to discuss your pressure washing needs.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Phone className="mr-2 h-4 w-4" />
                      Request Call Back
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Quick response</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallbackRequestForm;