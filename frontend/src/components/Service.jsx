import React from 'react';

function Service() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Business Registration</h3>
            <p>Get your business registered online in just a few steps.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Business Management</h3>
            <p>Manage your business details, employees, and finances efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Consulting Services</h3>
            <p>Get expert advice for growing your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
