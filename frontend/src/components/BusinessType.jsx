import React from 'react';

function BusinessTypes() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Types of Businesses</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Freelancers</h3>
            <p>Individuals offering services or products.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Startups</h3>
            <p>Small businesses in the early stages of operation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessTypes;
