import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Dummy gallery data with images
  const galleryItems = [
    { id: 1, category: 'products', title: 'Premium T-Shirts Collection', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop' },
    { id: 2, category: 'products', title: 'Corporate Uniforms', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=600&fit=crop' },
    { id: 3, category: 'products', title: 'Sportswear Collection', image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop' },
    { id: 4, category: 'products', title: 'Casual Wear Display', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop' },
    { id: 5, category: 'products', title: 'Polo Shirts Range', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=600&fit=crop' },
    { id: 6, category: 'products', title: 'Hoodies & Sweatshirts', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop' },
    { id: 7, category: 'factory', title: 'Sewing Department', image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c0ebc?w=600&h=600&fit=crop' },
    { id: 8, category: 'factory', title: 'Fabric Cutting Section', image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&h=600&fit=crop' },
    { id: 9, category: 'factory', title: 'Quality Control Area', image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&h=600&fit=crop' },
    { id: 10, category: 'factory', title: 'Manufacturing Floor', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop' },
    { id: 11, category: 'factory', title: 'Textile Production', image: 'https://images.unsplash.com/photo-1445510491599-30b90d226b96?w=600&h=600&fit=crop' },
    { id: 12, category: 'factory', title: 'Packaging Station', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=600&fit=crop' },
    { id: 13, category: 'team', title: 'Production Team at Work', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop' },
    { id: 14, category: 'team', title: 'Design Department', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop' },
    { id: 15, category: 'team', title: 'Quality Inspectors', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop' },
    { id: 16, category: 'team', title: 'Skilled Tailors', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop' },
    { id: 17, category: 'team', title: 'Management & Leadership', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop' },
    { id: 18, category: 'team', title: 'Customer Service Team', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'products', name: 'Products' },
    { id: 'factory', name: 'Factory' },
    { id: 'team', name: 'Team' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 fade-in">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            {/* REPLACE: Add your gallery introduction */}
            Explore our products, facilities, and the talented team behind our success
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 shadow-md hover:shadow-xl hover:from-blue-500 hover:to-indigo-500 hover:bg-gradient-to-r hover:text-white border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                {/* Image Info - Always Visible */}
                <div className="p-4 bg-white">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary font-semibold capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
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

            {/* Image */}
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-[70vh] object-contain rounded-lg slide-in-up bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="text-white mt-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 capitalize">Category: {selectedImage.category}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex(
                    (item) => item.id === selectedImage.id
                  );
                  const prevIndex =
                    currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
                  setSelectedImage(filteredItems[prevIndex]);
                }}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex(
                    (item) => item.id === selectedImage.id
                  );
                  const nextIndex =
                    currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(filteredItems[nextIndex]);
                }}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {/* REPLACE: Add your CTA description */}
              Visit our facility or schedule a virtual tour to see our operations firsthand
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
