import React from 'react';

import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import Cards from './components/Cards';

function Home() {

  return (
    <div className="app">
      <HeroSection />
      <ProductCard />
      <Cards />
    </div>
  );
}

export default Home;

