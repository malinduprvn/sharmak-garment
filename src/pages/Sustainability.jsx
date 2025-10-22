const Sustainability = () => {
  const commitments = [
    {
      title: 'Eco-Friendly Materials',
      description: 'We prioritize sustainable fabrics and materials in our production processes',
      icon: (
        <path
          fillRule="evenodd"
          d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
          clipRule="evenodd"
        />
      ),
    },
    {
      title: 'Ethical Manufacturing',
      description: 'Fair wages, safe working conditions, and respect for all our workers',
      icon: (
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      ),
    },
    {
      title: 'Waste Reduction',
      description: 'Implementing efficient processes to minimize waste and maximize recycling',
      icon: (
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      ),
    },
    {
      title: 'Energy Efficiency',
      description: 'Using energy-efficient machinery and renewable energy sources where possible',
      icon: (
        <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
      ),
    },
    {
      title: 'Water Conservation',
      description: 'Advanced water treatment and recycling systems in our facilities',
      icon: (
        <path
          fillRule="evenodd"
          d="M5.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM3 4a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8A.5.5 0 003 4zm2 0a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8A.5.5 0 005 4zm2 0a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8A.5.5 0 007 4zm2 0a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8A.5.5 0 009 4z"
          clipRule="evenodd"
        />
      ),
    },
    {
      title: 'Community Support',
      description: 'Contributing to local communities and supporting social development programs',
      icon: (
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      ),
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015 - Quality Management', image: 'https://placehold.co/150x150/059669/ffffff/png?text=ISO+9001&font=raleway' },
    { name: 'OEKO-TEX Standard 100', image: 'https://placehold.co/150x150/0ea5e9/ffffff/png?text=OEKO-TEX&font=raleway' },
    { name: 'GOTS - Global Organic Textile Standard', image: 'https://placehold.co/150x150/059669/ffffff/png?text=GOTS&font=raleway' },
    { name: 'Fair Trade Certified', image: 'https://placehold.co/150x150/0ea5e9/ffffff/png?text=Fair+Trade&font=raleway' },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 fade-in">Sustainability & Quality</h1>
          <p className="text-xl max-w-3xl mx-auto fade-in">
            {/* REPLACE: Add your sustainability introduction */}
            Our commitment to ethical practices and environmental responsibility
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building a Sustainable Future
              </h2>
              <div className="w-24 h-1 bg-green-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                {/* REPLACE: Add your sustainability story */}
                At Sharmark International, we believe that quality and sustainability go 
                hand in hand. We are committed to minimizing our environmental impact while 
                delivering exceptional products that meet the highest standards.
              </p>
              <p className="text-gray-600 mb-4">
                Our sustainable practices extend across every aspect of our operations, from 
                sourcing raw materials to final product delivery. We continuously invest in 
                technologies and processes that reduce waste, conserve resources, and protect 
                the environment.
              </p>
              <p className="text-gray-600">
                We also believe in the importance of ethical manufacturing, ensuring fair 
                treatment and safe working conditions for all our employees.
              </p>
            </div>
            <div className="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop" 
                alt="Sustainability at Sharmark" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability Commitments
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* REPLACE: Add your commitments description */}
              We have implemented comprehensive sustainability initiatives across our operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {commitment.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" 
                alt="Quality Control Process" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2 slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Uncompromising Quality Standards
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-6">
                {/* REPLACE: Add your quality description */}
                Quality is at the heart of everything we do. Our rigorous quality control 
                processes ensure that every product meets or exceeds industry standards and 
                customer expectations.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Quality Process:
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Raw material inspection and testing',
                  'In-process quality checks at every stage',
                  'Final product inspection before packaging',
                  'Random sampling and testing',
                  'Continuous improvement programs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* REPLACE: Add your certifications description */}
              Our commitment to excellence is backed by internationally recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-32 rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl opacity-90">
              {/* REPLACE: Add your impact description */}
              Measurable progress towards a sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '30%', label: 'Reduction in Water Usage' },
              { number: '40%', label: 'Waste Recycled' },
              { number: '25%', label: 'Energy Savings' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Partner with a Responsible Manufacturer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {/* REPLACE: Add your CTA description */}
            Join us in our mission to create quality products while protecting our planet
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
