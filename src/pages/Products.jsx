import { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productCategories = [
    {
      id: 1,
      name: 'T-Shirts',
      description: 'Premium quality cotton and blended t-shirts for casual and promotional use',
      details: 'Our t-shirts are made from the finest materials, offering comfort and durability. Available in various sizes, colors, and designs. Perfect for corporate events, promotional campaigns, or everyday wear.',
      features: ['100% Cotton or Blended', 'Customizable Designs', 'Bulk Orders Available', 'Fast Turnaround'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Corporate Uniforms',
      description: 'Professional uniforms tailored to your company\'s brand and requirements',
      details: 'We specialize in creating custom corporate uniforms that reflect your brand identity. From office wear to service industry uniforms, we ensure quality and consistency.',
      features: ['Custom Tailoring', 'Brand Logo Integration', 'Durable Materials', 'Professional Finish'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Sportswear',
      description: 'High-performance athletic apparel for teams and individuals',
      details: 'Our sportswear line includes moisture-wicking fabrics, flexible designs, and ergonomic fits. Ideal for sports teams, fitness centers, and athletic events.',
      features: ['Moisture-Wicking Fabric', 'Ergonomic Design', 'Team Customization', 'Performance Materials'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Casual Wear',
      description: 'Comfortable and stylish clothing for everyday wear',
      details: 'From casual shirts to comfortable pants, our casual wear collection combines style with comfort. Perfect for retail brands looking for quality manufacturing.',
      features: ['Trendy Designs', 'Comfortable Fit', 'Quality Fabrics', 'Versatile Styles'],
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Workwear',
      description: 'Durable and functional work clothes for various industries',
      details: 'Our workwear is designed to withstand demanding conditions while providing comfort. Suitable for construction, manufacturing, and other industrial applications.',
      features: ['Heavy-Duty Materials', 'Safety Standards Compliant', 'Reinforced Stitching', 'Multiple Pockets'],
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'School Uniforms',
      description: 'Quality uniforms for educational institutions',
      details: 'We manufacture school uniforms that are durable, comfortable, and affordable. Working with schools and uniform shops to provide consistent quality.',
      features: ['Durable Fabrics', 'Standard Sizing', 'Bulk Discounts', 'Consistent Quality'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Polo Shirts',
      description: 'Classic polo shirts for corporate and casual use',
      details: 'Our polo shirts are perfect for corporate events, team wear, or casual occasions. Available in various colors with customization options.',
      features: ['Classic Design', 'Logo Embroidery', 'Multiple Colors', 'Premium Cotton'],
      image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Hoodies & Sweatshirts',
      description: 'Comfortable hoodies and sweatshirts for all seasons',
      details: 'Warm and comfortable hoodies and sweatshirts perfect for branding, team wear, or retail. High-quality materials and printing options available.',
      features: ['Soft Interior', 'Durable Exterior', 'Custom Printing', 'Various Weights'],
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 fade-in">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            {/* REPLACE: Add your product section introduction */}
            Discover our comprehensive range of high-quality garment solutions
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productCategories.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProduct(product)}
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
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <button
                    className="text-secondary font-semibold hover:text-blue-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />

                <div>
                  <p className="text-gray-600 mb-6">{selectedProduct.details}</p>

                  <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      Request Quote
                    </a>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="block w-full bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-gray-700 hover:text-white text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 border-gray-300 hover:border-transparent shadow-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Orders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {/* REPLACE: Add your custom order description */}
              We specialize in custom garment manufacturing. Whether you need unique designs, 
              specific materials, or special branding, we can bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Materials',
                description: 'We source only the finest fabrics and materials for all our products',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                ),
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for your investment without compromising quality',
                icon: (
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                ),
              },
              {
                title: 'On-Time Delivery',
                description: 'Reliable production schedules and timely delivery guaranteed',
                icon: (
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
