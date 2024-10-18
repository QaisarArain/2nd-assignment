import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-200">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-teal-800 mb-4">Welcome to Web Creators Hub Website!</h2>
        <p className="text-teal-600 text-lg leading-relaxed">
          This is a platform dedicated to providing high-quality web development solutions. Our mission is to empower developers and businesses by delivering innovative and efficient tools that enhance productivity and foster creativity.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;