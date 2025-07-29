'use client';

import React from 'react';

type ModalFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Register for Career Creators Training
        </h2>

        <form
  action="https://formspree.io/f/xwpqelqg"
  method="POST"
  className="space-y-5 text-black"
>
  <input type="hidden" name="_next" value="https://careercreators.online/thanks.html" />
  <input type="hidden" name="_captcha" value="false" />


          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
              WhatsApp Number
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="Enter your WhatsApp number"
              required
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* College / University */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="college" className="text-sm font-medium text-gray-700">
              College / University
            </label>
            <input
              id="college"
              name="college"
              type="text"
              placeholder="Your college or university name"
              required
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* Current Year / Semester */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="year" className="text-sm font-medium text-gray-700">
              Current Year / Semester
            </label>
            <select
              id="year"
              name="year"
              required
              defaultValue=""
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none text-black"
            >
              <option value="" disabled>Select your current year or semester</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="Final">Final</option>
              <option value="Graduate">Graduate</option>
            </select>
          </div>

          {/* Preferred Career Domain */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="domain" className="text-sm font-medium text-gray-700">
              Preferred Career Domain
            </label>
            <select
              id="domain"
              name="domain"
              required
              defaultValue=""
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none text-black"
            >
              <option value="" disabled>Select your preferred domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Sales and Business">Sales and Business</option>
              <option value="Content Writing">Content Writing</option>
              <option value="CRM Management">CRM Management</option>
              <option value="Business Communication">Business Communication</option>
              <option value="Graphis Design">Graphic Design</option>
              <option value="Documentation">Documentation</option>
              <option value="Still Exploring">Still Exploring</option>
            </select>
          </div>

          {/* Current Goal */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="goal" className="text-sm font-medium text-gray-700">
              What are you currently looking for?
            </label>
            <select
              id="goal"
              name="goal"
              required
              defaultValue=""
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none text-black"
            >
              <option value="" disabled>Choose your current goal</option>
              <option value="Internship">Internship</option>
              <option value="First Job">First Job</option>
              <option value="Career Direction">Career Direction</option>
              <option value="Resume/Portfolio Help">Resume/Portfolio Help</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>
          </div>

          {/* Preferred Time to Connect */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="time" className="text-sm font-medium text-gray-700">
              Preferred Time to Connect (Optional)
            </label>
            <input
              id="time"
              name="time"
              type="text"
              placeholder="e.g., Evenings after 6 PM"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* Notes */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="notes" className="text-sm font-medium text-gray-700">
              Anything else you want us to know? (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Let us know anything important..."
              className="w-full border border-gray-300 focus:ring-2 focus:ring-orange-400 p-3 rounded-md outline-none transition-all shadow-sm hover:shadow-md text-black"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              className="mt-1"
              required
            />
            <label htmlFor="consent" className="text-gray-700 text-sm leading-tight">
              I agree to be contacted via WhatsApp or Email.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors duration-200"
          >
            Kick-Start Your Journey
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
