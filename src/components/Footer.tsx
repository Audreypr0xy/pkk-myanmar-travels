import React from 'react';
import { FacebookIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Services',     to: '/#services' },
  { label: 'Packages',     to: '/#packages' },
  { label: 'Destinations', to: '/#destinations' },
  { label: 'Visa Services',to: '/visa' },
  { label: 'About Us',     to: '/about' },
  { label: 'Contact',      to: '/contact' },
  { label: 'Book Now',     to: '/enquiry' },
];

const servicesList = [
  'Flight Ticketing',
  'Hotel Booking',
  'Visa Services',
  'Travel Tours',
  'Travel Insurance',
  'Medical Travel',
  'Study Tours',
];

export function Footer() {
  return (
    <footer className="bg-brand-greenDark text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed italic">
              "Your Satisfaction is Our Victory"
            </p>
            <a
              href="https://www.facebook.com/pkktravel3377"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s} className="text-sm text-white/70">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPinIcon size={16} className="mt-0.5 flex-shrink-0 text-brand-greenLight" />
                <span>6A/504, Yadanar Hninsi Residence, Yadanar Road, Dagon Seikkan Township, Yangon, Myanmar</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon size={16} className="mt-0.5 flex-shrink-0 text-brand-greenLight" />
                <span>+959 795-884-090<br />+959 978-587-396</span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon size={16} className="mt-0.5 flex-shrink-0 text-brand-greenLight" />
                <a href="mailto:pkktravel3377@gmail.com" className="hover:text-white break-all">
                  pkktravel3377@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/60">© 2026 PKK Myanmar Travels & Tours. All rights reserved.</p>
          <p className="text-xs text-white/50">Designed with care for unforgettable journeys.</p>
        </div>
      </div>
    </footer>
  );
}
