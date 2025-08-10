import React from 'react';
import Navbar from '../components/navbar';
import CategoryTabs from '../components/CategoryTabs';
import HomeHeroSection from '../components/HeroSection';
import DealsAndOffers from '../components/DealsOffeers';
import HomeandOutdoor from '../components/homeandoutdoor';
import Gadgets from '../components/gadgets';
import RecommendedItems from '../components/RecommendedItems';
import ExtraServices from '../components/extraservices';
import Newsletter from '../components/nesletter';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <CategoryTabs />
      <HomeHeroSection />
      <DealsAndOffers />
      <HomeandOutdoor />
      <Gadgets />
      <RecommendedItems />
      <ExtraServices />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
