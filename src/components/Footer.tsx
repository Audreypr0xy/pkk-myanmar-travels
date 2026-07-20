import React from 'react';
import { FacebookIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const quickLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Packages',     to: '/packages' },
  { label: 'Destinations', to: '/destinations' },
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
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/pkktravel3377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/pkk-myanmar-travel-tour/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>


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


          <div>
            <h4 className="font-display font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s} className="text-sm text-white/70">{s}</li>
              ))}
            </ul>
          </div>


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

      {/* Certified & Trusted By */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
            Certified & Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a
              href="https://myanmartourismfederation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Myanmar Tourism Federation"
            >
              <img
                src="/partner-mtf-logo.png"
                alt="Myanmar Tourism Federation"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.tourismmyanmar.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Myanmar Tourism Marketing"
            >
              <img
                src="/partner-mtm-logo.png"
                alt="Myanmar Tourism Marketing"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.umtanet.org/index.php/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Union of Myanmar Travel Association"
            >
              <img
                src="/partner-umta-logo.png"
                alt="Union of Myanmar Travel Association"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://tourism.gov.mm/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Ministry of Hotels & Tourism"
            >
              <img
                src="/partner-moht-logo.png"
                alt="Ministry of Hotels & Tourism"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
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
