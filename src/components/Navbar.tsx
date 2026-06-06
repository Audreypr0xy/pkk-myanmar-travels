import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const links = [
  { label: 'Home',         to: '/' },
  { label: 'Packages',     to: '/packages' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Visa',         to: '/visa' },
  { label: 'About Us',     to: '/about' },
  { label: 'Contact',      to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location.pathname]);

  const isLight = isHome && !scrolled && !open;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled || open || !isHome ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" aria-label="PKK Myanmar Home">
          <Logo variant={isLight ? 'light' : 'dark'} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold transition-colors hover:text-brand-green ${
                  active ? 'text-brand-green' : isLight ? 'text-white/90' : 'text-neutral-700'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/enquiry"
            className="px-5 py-2.5 rounded-full bg-brand-green text-white text-sm font-semibold hover:bg-brand-greenDark transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${isLight ? 'text-white' : 'text-neutral-800'}`}
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-2 font-semibold border-b border-neutral-100 ${
                    location.pathname === l.to ? 'text-brand-green' : 'text-neutral-800'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/enquiry"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-5 py-3 rounded-full bg-brand-green text-white font-semibold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
