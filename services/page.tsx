import React from 'react';

const ServicePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-200">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-teal-800 mb-4">Our Services</h2>
        <p className="text-teal-600 text-lg leading-relaxed mb-6">
          At My Next.js Website, we offer a range of services tailored to help you succeed in the digital world. Our dedicated team is committed to delivering high-quality solutions that meet your unique needs.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">What We Offer:</h3>
        <ul className="list-disc list-inside text-teal-600">
          <li className="mb-2">Web Development: Custom websites built to your specifications.</li>
          <li className="mb-2">UI/UX Design: Creating intuitive and user-friendly interfaces.</li>
          <li className="mb-2">SEO Optimization: Enhancing your online presence to reach more customers.</li>
          <li className="mb-2">Content Management: Streamlining your content for better engagement.</li>
          <li className="mb-2">E-commerce Solutions: Setting up online stores for seamless transactions.</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicePage;