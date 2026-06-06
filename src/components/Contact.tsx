import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Find Us & Get in Touch"
          description="Visit our office or reach out through any of the channels below — our travel experts are happy to help plan your next journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-greenDark text-white rounded-3xl p-7 md:p-10 shadow-card"
          >
            <h3 className="font-display font-bold text-2xl mb-6">
              Contact Information
            </h3>
            <div className="space-y-5">
              <InfoRow icon={MapPinIcon} label="Address">
                6A/504, Yadanar Hninsi Residence, Yadanar Road,
                <br />
                Dagon Seikkan Township, Yangon, Myanmar
              </InfoRow>
              <InfoRow icon={PhoneIcon} label="Phone">
                <a href="tel:+959795884090" className="block hover:text-brand-greenLight">
                  +959 795-884-090
                </a>
                <a href="tel:+959978587396" className="block hover:text-brand-greenLight">
                  +959 978-587-396
                </a>
              </InfoRow>
              <InfoRow icon={MailIcon} label="Email">
                <a href="mailto:pkktravel3377@gmail.com" className="hover:text-brand-greenLight break-all">
                  pkktravel3377@gmail.com
                </a>
              </InfoRow>
              <InfoRow icon={ClockIcon} label="Office Hours">
                Mon — Sat: 9:00 AM – 6:00 PM
                <br />
                Sun: Closed
              </InfoRow>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-3">
                Follow Us
              </div>
              <a
                href="https://www.facebook.com/pkktravel3377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-sm font-semibold"
              >
                <FacebookIcon size={16} />
                facebook/pkkmyanmartravelandtour
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card relative min-h-[400px]"
          >
            <iframe
              title="PKK Myanmar Office Location"
              src="https://maps.google.com/maps?q=Yadanar+Road+Dagon+Seikkan+Yangon+Myanmar&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.app.goo.gl/xtH5bxXcK4TYkMPH9"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white text-brand-green text-xs font-semibold px-3 py-2 rounded-full shadow-lg hover:bg-brand-green hover:text-white transition-colors flex items-center gap-1.5 z-10"
            >
              📍 Open in Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-1">
          {label}
        </div>
        <div className="text-sm text-white/95 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
