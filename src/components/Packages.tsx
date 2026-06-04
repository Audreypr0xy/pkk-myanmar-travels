import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  StarIcon,
  UsersIcon,
  ArrowRightIcon } from
'lucide-react';
import { SectionHeader } from './SectionHeader';
const packages = [
{
  title: 'Corporate Essentials',
  tagline: 'Streamlined business travel',
  description:
  'Efficient travel arrangements for business meetings, conferences, and corporate events.',
  icon: BriefcaseIcon,
  image:
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'
},
{
  title: 'Executive Comfort',
  tagline: 'Premium first-class journeys',
  description:
  'Luxury hotels, business-class flights, and personalized concierge service throughout.',
  icon: StarIcon,
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
},
{
  title: 'Team Retreat',
  tagline: 'Memorable group experiences',
  description:
  'Custom group itineraries designed to build connection, motivation, and unforgettable memories.',
  icon: UsersIcon,
  image:
  'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1400&q=80'
}];

export function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Travel Packages"
          title="Curated for Every Kind of Traveler"
          description="Whether you’re traveling for business, leisure, or with your team — we have a package crafted just for you." />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {packages.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-60px'
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300">
                
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <Icon size={22} className="text-brand-green" />
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green mb-2">
                    {p.tagline}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group/link">
                    
                    Learn More
                    <ArrowRightIcon
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform" />
                    
                  </a>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}