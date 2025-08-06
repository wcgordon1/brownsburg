import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTopButton from './components/BackToTopButton';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const HouseWashing = React.lazy(() => import('./pages/services/HouseWashing'));
const RoofCleaning = React.lazy(() => import('./pages/services/RoofCleaning'));
const DrivewayCleaning = React.lazy(() => import('./pages/services/DrivewayCleaning'));
const DeckFenceCleaning = React.lazy(() => import('./pages/services/DeckFenceCleaning'));
const CommercialCleaning = React.lazy(() => import('./pages/services/CommercialCleaning'));
const ServiceAreas = React.lazy(() => import('./pages/ServiceAreas'));
const LincolnTownship = React.lazy(() => import('./pages/LincolnTownship'));
const BrownTownship = React.lazy(() => import('./pages/BrownTownship'));
const MiddleTownship = React.lazy(() => import('./pages/MiddleTownship'));
const WashingtonTownship = React.lazy(() => import('./pages/WashingtonTownship'));
const Danville = React.lazy(() => import('./pages/Danville'));
const Avon = React.lazy(() => import('./pages/Avon'));
const Noblesville = React.lazy(() => import('./pages/Noblesville'));
const Plainfield = React.lazy(() => import('./pages/Plainfield'));
const Carmel = React.lazy(() => import('./pages/Carmel'));
const Westfield = React.lazy(() => import('./pages/Westfield'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <ScrollToTop />
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            }>
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
            </Suspense>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;