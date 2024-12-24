import React from 'react';

function Team() {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="flex justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
