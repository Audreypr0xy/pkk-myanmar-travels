import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full"
      >
        
        <div className="font-display font-bold text-[120px] md:text-[160px] leading-none text-brand-green/10 select-none">
          404
        </div>

      
        <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto -mt-6 mb-6">
          <span className="text-4xl">🌏</span>
        </div>

        <h1 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-neutral-500 text-base md:text-lg mb-8 leading-relaxed">
          Looks like this destination doesn't exist on our map.<br />
          Let's get you back on track.
        </p>

      
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-white font-semibold hover:bg-brand-greenDark transition-colors shadow-card"
          >
            <HomeIcon size={18} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>

      
        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-neutral-500">
          <a href="tel:+959795884090" className="inline-flex items-center gap-2 hover:text-brand-green transition-colors">
            <PhoneIcon size={15} />
            +959 795-884-090
          </a>
          <a href="mailto:pkktravel3377@gmail.com" className="inline-flex items-center gap-2 hover:text-brand-green transition-colors">
            <MailIcon size={15} />
            pkktravel3377@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
}
