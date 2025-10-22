import mrSamanthaImg from '../assets/images/mr-samantha.jpg';
import mrsNirushaImg from '../assets/images/mrs-nirusha.jpg';

const About = () => {
  const directors = [
    {
      name: 'Mr. Samantha',
      title: 'Director',
      description: 'With over 20 years of experience in the garment industry, Mr. Samantha brings exceptional leadership and vision to Sharmark International.',
      image: mrSamanthaImg
    },
    {
      name: 'Mrs. Nirusha de Alwis',
      title: 'Director',
      description: 'Mrs. Nirusha\'s expertise in operations and quality management ensures our commitment to excellence in every product we deliver.',
      image: mrsNirushaImg
    },
  ];

  const capabilities = [
    {
      title: 'Modern Manufacturing',
      description: 'State-of-the-art machinery and equipment for efficient production',
    },
    {
      title: 'Quality Control',
      description: 'Rigorous quality checks at every stage of production',
    },
    {
      title: 'Skilled Workforce',
      description: 'Experienced team of designers, tailors, and quality inspectors',
    },
    {
      title: 'Large Capacity',
      description: 'Ability to handle orders of all sizes with quick turnaround',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 fade-in">About Sharmark International</h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            {/* REPLACE: Add your company introduction */}
            Learn about our journey, values, and the people behind our success
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-4">
                {/* REPLACE: Add your company story */}
                Sharmark International Pvt Ltd was founded with a vision to become a leading 
                manufacturer of premium quality garments in Sri Lanka and beyond. What started 
                as a small operation has grown into a thriving business serving clients across 
                the globe.
              </p>
              <p className="text-gray-600 mb-4">
                Located in Dodangoda, Matugama, our facility combines traditional craftsmanship 
                with modern manufacturing techniques. We take pride in our ability to deliver 
                exceptional quality while maintaining competitive pricing and meeting tight deadlines.
              </p>
              <p className="text-gray-600">
                Our commitment to sustainability, ethical manufacturing practices, and employee 
                welfare has been the cornerstone of our growth and success in the industry.
              </p>
            </div>
            <div className="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
                alt="Sharmark International Story" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg slide-in-left">
              <div className="text-secondary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                {/* REPLACE: Add your vision statement */}
                To be the most trusted and innovative garment manufacturer in the region, 
                setting industry standards for quality, sustainability, and customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg slide-in-right">
              <div className="text-secondary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                {/* REPLACE: Add your mission statement */}
                To deliver exceptional garment solutions through continuous innovation, 
                sustainable practices, and unwavering commitment to quality, while fostering 
                long-term partnerships with our clients and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries driving Sharmark International forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {director.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-4">{director.title}</p>
                  <p className="text-gray-600">{director.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory/Production Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Production Capabilities
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* REPLACE: Add your capabilities description */}
              Our state-of-the-art facility is equipped to handle all your garment manufacturing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Factory Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop" 
              alt="Factory Floor"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&h=400&fit=crop" 
              alt="Quality Control"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=600&h=400&fit=crop" 
              alt="Production Line"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Quality', description: 'We never compromise on the quality of our products' },
              { title: 'Integrity', description: 'Honest and transparent in all our business dealings' },
              { title: 'Innovation', description: 'Continuously improving our processes and products' },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
