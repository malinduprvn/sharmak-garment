import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Dummy data for client logos with images
  const clients = [
    { name: 'Fashion Brand', logo: 'https://placehold.co/200x100/1e40af/ffffff/png?text=Fashion+Brand&font=raleway' },
    { name: 'Retail Corp', logo: 'https://placehold.co/200x100/0ea5e9/ffffff/png?text=Retail+Corp&font=raleway' },
    { name: 'Sports Co', logo: 'https://placehold.co/200x100/1e40af/ffffff/png?text=Sports+Co&font=raleway' },
    { name: 'School District', logo: 'https://placehold.co/200x100/0ea5e9/ffffff/png?text=School+District&font=raleway' },
    { name: 'Hotel Chain', logo: 'https://placehold.co/200x100/1e40af/ffffff/png?text=Hotel+Chain&font=raleway' },
    { name: 'Restaurant Group', logo: 'https://placehold.co/200x100/0ea5e9/ffffff/png?text=Restaurant+Group&font=raleway' },
  ];

  // Dummy data for product categories with images
  const products = [
    { 
      name: 'T-Shirts', 
      description: 'Premium quality cotton t-shirts for all occasions',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop'
    },
    { 
      name: 'Corporate Uniforms', 
      description: 'Professional uniforms tailored to perfection',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop'
    },
    { 
      name: 'Sportswear', 
      description: 'High-performance athletic apparel',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop'
    },
    { 
      name: 'Casual Wear', 
      description: 'Comfortable and stylish everyday clothing',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop'
    },
    { 
      name: 'Workwear', 
      description: 'Durable work clothes for various industries',
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&h=400&fit=crop'
    },
    { 
      name: 'School Uniforms', 
      description: 'Quality uniforms for educational institutions',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
    },
  ];

  const highlights = [
    { number: '15+', label: 'Years of Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50K+', label: 'Products Delivered' },
    { number: '25+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Hero Content */}
        <div className={`relative z-10 text-center text-white px-4 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Excellence in Garment Manufacturing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {/* REPLACE: Add your company tagline here */}
            Crafting quality apparel with precision, sustainability, and innovation since 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-gray-800 hover:text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 border-2 border-white shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Sharmark International
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* REPLACE: Add your company overview text here */}
              We are a leading garment manufacturer based in Sri Lanka, specializing in 
              high-quality apparel for global markets. Our commitment to excellence, 
              sustainability, and innovation sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop" 
                alt="Quality Garments Manufacturing" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="slide-in-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Quality Meets Innovation
              </h3>
              <p className="text-gray-600 mb-4">
                {/* REPLACE: Add your detailed company description */}
                At Sharmark International, we combine traditional craftsmanship with 
                modern technology to deliver superior garment solutions. Our state-of-the-art 
                facility in Matugama, Sri Lanka, is equipped with the latest machinery and 
                operated by skilled professionals.
              </p>
              <p className="text-gray-600 mb-6">
                Under the leadership of our directors, Mr. Samantha and Mrs. Nirusha de Alwis, 
                we have built a reputation for reliability, quality, and customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">ISO Certified Manufacturing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Sustainable Production Practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-secondary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">On-Time Delivery Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold mb-2">{item.number}</div>
                <div className="text-lg opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* REPLACE: Add your product section description */}
              We manufacture a diverse range of high-quality garments to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href="/products"
                    className="text-secondary font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white h-32 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-secondary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {/* REPLACE: Add your CTA description */}
            Partner with us for quality garment manufacturing that exceeds expectations
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
