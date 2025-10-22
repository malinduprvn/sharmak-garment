import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      alert('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    // Clear success message after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            {/* REPLACE: Add your contact introduction */}
            Get in touch with us for inquiries, quotes, or any questions
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-lg slide-in-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        No: 000, Dodangoda,<br />
                        Matugama, Sri Lanka
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+94771234567"
                          className="hover:text-secondary transition-colors"
                        >
                          +94 77 123 4567
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="tel:+94771234568"
                          className="hover:text-secondary transition-colors"
                        >
                          +94 77 123 4568
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@sharmark.com"
                          className="hover:text-secondary transition-colors"
                        >
                          info@sharmark.com
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href="mailto:sales@sharmark.com"
                          className="hover:text-secondary transition-colors"
                        >
                          sales@sharmark.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-secondary mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 8:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Directors */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    Directors
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Mr. Samantha de Alwis<br />
                    Mrs. Nirusha de Alwis
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg slide-in-right">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {formStatus === 'success' && (
                  <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="+94 77 123 4567"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        placeholder="Inquiry about products"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          {/* Google Map Embed - Using dummy coordinates for Matugama, Sri Lanka */}
          <div className="rounded-lg overflow-hidden shadow-lg fade-in">
            <iframe
              title="Sharmark International Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.89891122937!2d79.97906!3d6.5237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22f7e8c9f8c8d%3A0x9c3f8e7a1e8e7a1e!2sMatugama!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center slide-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request a Quote</h3>
              <p className="text-gray-600 mb-4">
                Get a detailed quote for your garment manufacturing needs
              </p>
              <a
                href="mailto:sales@sharmark.com"
                className="text-secondary font-semibold hover:text-blue-700 transition-colors"
              >
                Email Sales Team →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a
                href="tel:+94771234567"
                className="text-secondary font-semibold hover:text-blue-700 transition-colors"
              >
                +94 77 123 4567 →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Schedule a visit to our facility and see our operations
              </p>
              <a
                href="/about"
                className="text-secondary font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
