import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Accommodations from './components/Accommodations.jsx';
import Philosophy from './components/Philosophy.jsx';
import CredentialsBar from './components/CredentialsBar.jsx';
import TourAgency from './components/TourAgency.jsx';
import Amenities from './components/Amenities.jsx';
import Gastronomy from './components/Gastronomy.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import LocationSection from './components/LocationSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface flex flex-col selection:bg-primary-container selection:text-espresso">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full flex-grow">
        {/* 1. Hero with Booking Strip */}
        <Hero />

        {/* 2. Featured Accommodations */}
        <Accommodations />

        {/* 3. Philosophy & History */}
        <Philosophy />

        {/* 4. Credentials & Certifications */}
        <CredentialsBar />

        {/* 5. In-house Tour Agency */}
        <TourAgency />

        {/* 6. Amenities & Leisure */}
        <Amenities />

        {/* 7. Gastronomy & Regional Breakfast */}
        <Gastronomy />

        {/* 8. Photo Album & 360 Virtual Tour */}
        <PhotoGallery />

        {/* 9. Location & Distances */}
        <LocationSection />

        {/* 10. Guest Reviews & Testimonials */}
        <Testimonials />

        {/* 11. Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
