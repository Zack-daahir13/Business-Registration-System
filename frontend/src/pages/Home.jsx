import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Service from '../components/Service';
import BusinessTypes from '../components/BusinessType';
import Team from '../components/Team';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Service />
      <BusinessTypes />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
