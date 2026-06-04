import React from 'react';
import { motion } from 'framer-motion';
import {
  PlaneIcon,
  HotelIcon,
  StampIcon,
  MapIcon,
  ShieldCheckIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  CheckCircle2Icon } from
'lucide-react';
import { SectionHeader } from './SectionHeader';
const services = [
{
  title: 'Flight Ticketing',
  desc: 'Domestic & international flight booking with the best fares from trusted airlines.',
  icon: PlaneIcon
},
{
  title: 'Hotel Booking',
  desc: 'Curated stays worldwide — from boutique inns to luxury 5-star resorts.',
  icon: HotelIcon
},
{
  title: 'International Visa',
  desc: 'End-to-end visa application support with expert document guidance.',
  icon: StampIcon
},
{
  title: 'Travel Tour Services',
  desc: 'Tailor-made domestic and international tour itineraries you’ll love.',
  icon: MapIcon
},
{
  title: 'Travel Insurance',
  desc: 'Comprehensive coverage so you can travel with complete peace of mind.',
  icon: ShieldCheckIcon
},
{
  title: 'Overseas Medical Travel',
  desc: 'Specialized medical travel arrangements to top international hospitals.',
  icon: HeartPulseIcon
},
{
  title: 'Educational Study Tours',
  desc: 'Inspiring study tour programs designed for students and academics.',
  icon: GraduationCapIcon
}];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Travel Services Built Around You"
          description="From flights and hotels to visas and medical travel — we handle every detail of your journey with care and precision." />
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{
                  opacity: 0,
                  y: 24
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
                  duration: 0.5,
                  delay: i * 0.06
                }}
                className="group relative bg-white border border-neutral-200 rounded-2xl p-7 hover:border-brand-green hover:shadow-cardHover transition-all duration-300">
                
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-greenLight flex items-center justify-center group-hover:bg-brand-green transition-colors">
                    <Icon
                      size={22}
                      className="text-brand-green group-hover:text-white transition-colors" />
                    
                  </div>
                  <CheckCircle2Icon size={20} className="text-brand-green" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}