import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Destinations } from './components/Destinations';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { AboutUs } from './components/AboutUs';
import { EnquiryForm } from './components/EnquiryForm';
import { VisaServices } from './components/VisaServices';
import { NotFound } from './components/NotFound';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -16 },
};
const pageTransition = { duration: 0.35, ease: 'easeInOut' };

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Hero />
            <StatsBar />
            <Services />
            <Testimonials />
            <Contact />
          </PageWrapper>
        } />

        <Route path="/packages" element={
          <PageWrapper><div className="pt-20"><Packages /></div></PageWrapper>
        } />
        <Route path="/destinations" element={
          <PageWrapper><div className="pt-20"><Destinations /></div></PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper><div className="pt-20"><Contact /></div></PageWrapper>
        } />
        <Route path="/visa" element={
          <PageWrapper><div className="pt-20"><VisaServices /></div></PageWrapper>
        } />
        <Route path="/enquiry" element={
          <PageWrapper><div className="pt-20"><EnquiryForm /></div></PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper><AboutUs /></PageWrapper>
        } />
        <Route path="/testimonials" element={
          <PageWrapper><div className="pt-20"><Testimonials /></div></PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper><NotFound /></PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
