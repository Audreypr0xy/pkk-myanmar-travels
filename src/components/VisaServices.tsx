import React from 'react';
import { motion } from 'framer-motion';
import {
  FileTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhoneCallIcon,
  CheckCircleIcon,
  GlobeIcon,
} from 'lucide-react';
import 'flag-icons/css/flag-icons.min.css';
import { SectionHeader } from './SectionHeader';

const visaTypes = [
  {
    country: 'Japan',
    code: 'jp',
      type: 'Tourist Visa',
    notes: 'Single & Multiple entry available',
  },
  {
    country: 'South Korea',
    code: 'kr',
      type: 'Tourist Visa',
    notes: 'C-3 Short-term visit visa',
  },
  {
    country: 'China',
    code: 'cn',
      type: 'Tourist Visa (L)',
    notes: 'Single & double entry',
  },
  {
    country: 'Europe (Schengen)',
    code: 'eu',
      type: 'Schengen Visa',
    notes: 'Covers 26 European countries',
  },
  {
    country: 'India',
    code: 'in',
      type: 'Tourist / Pilgrimage Visa',
    notes: 'e-Visa & sticker visa available',
  },
  {
    country: 'Thailand',
    code: 'th',
      type: 'Tourist Visa (TR)',
    notes: 'Single & multiple entry',
  },
  {
    country: 'Malaysia',
    code: 'my',
      type: 'Tourist Visa',
    notes: 'eNTRI & sticker visa',
  },
  {
    country: 'Singapore',
    code: 'sg',
      type: 'Tourist Visa',
    notes: 'Single & multiple entry',
  },
];

const whyUs = [
  {
    icon: ShieldCheckIcon,
    title: 'High Approval Rate',
    desc: 'Our experienced team ensures your application is complete and accurate for the best chance of approval.',
  },
  {
    icon: ClockIcon,
    title: 'Fast Processing',
    desc: 'We handle all paperwork and submission, saving you time and hassle.',
  },
  {
    icon: FileTextIcon,
    title: 'Document Guidance',
    desc: 'We guide you through every required document — financial proof, hotel bookings, flight itinerary and more.',
  },
  {
    icon: PhoneCallIcon,
    title: 'Dedicated Support',
    desc: 'Our visa team is available via phone and Viber to answer your questions throughout the process.',
  },
];

const steps = [
  { step: '01', title: 'Consultation', desc: 'Contact us and tell us your destination & travel dates.' },
  { step: '02', title: 'Document Checklist', desc: 'We provide you the exact list of documents required.' },
  { step: '03', title: 'Submission', desc: 'We prepare and submit your application on your behalf.' },
  { step: '04', title: 'Visa Ready', desc: 'We notify you once your visa is approved and ready to collect.' },
];

export function VisaServices() {
  return (
    <section id="visa" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <SectionHeader
          eyebrow="Visa Services"
          title="Hassle-Free Visa Assistance"
          description="PKK Myanmar Travels helps you obtain visas for all major destinations. Our experienced team handles your application with care, so you can focus on planning your trip."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-cardHover transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-greenLight flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-green" />
                </div>
                <h4 className="font-display font-bold text-base text-neutral-900 mb-2">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GlobeIcon size={20} className="text-brand-green" />
            <h3 className="font-display font-bold text-2xl text-neutral-900">Destinations We Cover</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visaTypes.map((v, i) => (
              <motion.div
                key={v.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-cardHover transition-all duration-300 group border border-transparent hover:border-brand-green/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-neutral-100 bg-neutral-50 flex items-center justify-center">
                    <span className={`fi fi-${v.code} !w-full !h-full !rounded-none bg-cover bg-center`} />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-base text-neutral-900 leading-tight">{v.country}</h4>
                    <span className="text-xs text-brand-green font-semibold">{v.type}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
<div className="flex items-center gap-2 text-xs text-neutral-500">
                    <CheckCircleIcon size={12} className="text-brand-green" />
                    {v.notes}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-500 mt-5">
            * Processing times are estimates and may vary. Contact us for the latest information.
          </p>
        </div>

        <div className="bg-brand-greenDark rounded-3xl p-8 md:p-12 text-white">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-center mb-10">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-brand-greenLight/50 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-xl text-brand-greenLight">{s.step}</span>
                </div>
                <h4 className="font-display font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-white/75 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-brand-greenDark font-semibold hover:bg-brand-greenLight transition-colors shadow-lg"
            >
              <FileTextIcon size={18} />
              Apply for Visa Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
