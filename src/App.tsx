import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import Services from './pages/Services';
import HouseWashing from './pages/services/HouseWashing';
import RoofCleaning from './pages/services/RoofCleaning';
import DrivewayCleaning from './pages/services/DrivewayCleaning';
import DeckFenceCleaning from './pages/services/DeckFenceCleaning';
import CommercialCleaning from './pages/services/CommercialCleaning';
import ServiceAreas from './pages/ServiceAreas';
import LincolnTownship from './pages/LincolnTownship';
import BrownTownship from './pages/BrownTownship';
import MiddleTownship from './pages/MiddleTownship';
import WashingtonTownship from './pages/WashingtonTownship';
import Danville from './pages/Danville';
import Avon from './pages/Avon';
import Noblesville from './pages/Noblesville';
import Plainfield from './pages/Plainfield';
import Carmel from './pages/Carmel';
import Westfield from './pages/Westfield';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/house-washing" element={<HouseWashing />} />
              <Route path="/services/roof-cleaning" element={<RoofCleaning />} />
              <Route path="/services/driveway-cleaning" element={<DrivewayCleaning />} />
              <Route path="/services/deck-fence-cleaning" element={<DeckFenceCleaning />} />
              <Route path="/services/commercial-cleaning" element={<CommercialCleaning />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/service-areas/lincoln-township" element={<LincolnTownship />} />
              <Route path="/service-areas/brown-township" element={<BrownTownship />} />
              <Route path="/service-areas/middle-township" element={<MiddleTownship />} />
              <Route path="/service-areas/washington-township" element={<WashingtonTownship />} />
              <Route path="/service-areas/danville" element={<Danville />} />
              <Route path="/service-areas/avon" element={<Avon />} />
              <Route path="/service-areas/noblesville" element={<Noblesville />} />
              <Route path="/service-areas/plainfield" element={<Plainfield />} />
              <Route path="/service-areas/carmel" element={<Carmel />} />
              <Route path="/service-areas/westfield" element={<Westfield />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;