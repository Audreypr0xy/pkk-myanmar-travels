import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SendIcon,
  CheckIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const DESTINATIONS = [
  'Japan', 'South Korea', 'China', 'Vietnam', 'Cambodia',
  'Philippines', 'Thailand', 'Singapore', 'Malaysia',
  'Austria', 'Germany', 'Netherlands', 'Switzerland', 'France',
  'Kashmir – Paradise on Earth', 'Asia & Southeast Asia Cruise',
  'Other / Custom Tour',
];

const DURATIONS = [
  'Less than 1 week',
  '1 – 2 weeks',
  '3 – 4 weeks',
  'More than 4 weeks',
];

export function EnquiryForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    duration: '',
    adults: '1',
    children: '0',
    infants: '0',
    note: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="enquiry" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Book Your Trip"
          title="New Travel Enquiry"
          description="Fill in your travel details below and our team will get back to you within 24 hours with the best package for you."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-cardHover border border-neutral-100 p-8 md:p-12"
        >
          <form onSubmit={onSubmit} className="space-y-6">

            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="First Name *" name="firstName" value={form.firstName} onChange={onChange} placeholder="Ko Aung" required />
              <Field label="Last Name *" name="lastName" value={form.lastName} onChange={onChange} placeholder="Naing" required />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Email Address *" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@email.com" required />
              <Field label="Phone / Viber *" name="phone" value={form.phone} onChange={onChange} placeholder="+959 xxx xxx xxx" required />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-1.5">
                <MapPinIcon size={14} className="text-brand-green" />
                Destination / Tour *
              </label>
              <select
                name="destination"
                value={form.destination}
                onChange={onChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm"
              >
                <option value="">— Choose Destination —</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-1.5">
                <CalendarIcon size={14} className="text-brand-green" />
                Estimated Duration *
              </label>
              <select
                name="duration"
                value={form.duration}
                onChange={onChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm"
              >
                <option value="">— Choose Duration —</option>
                {DURATIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-1.5">
                <UsersIcon size={14} className="text-brand-green" />
                Number of Travelers
              </label>
              <div className="grid grid-cols-3 gap-4">
                <CountField label="Adults" name="adults" value={form.adults} onChange={onChange} />
                <CountField label="Children" name="children" value={form.children} onChange={onChange} />
                <CountField label="Infants" name="infants" value={form.infants} onChange={onChange} />
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Additional Notes
              </label>
              <textarea
                name="note"
                rows={4}
                value={form.note}
                onChange={onChange}
                placeholder="Special requests, preferred travel dates, hotel preferences..."
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none text-sm"
              />
            </div>

            {/* Newsletter */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={onChange}
                className="w-4 h-4 accent-brand-green rounded"
              />
              <span className="text-sm text-neutral-600 group-hover:text-neutral-800 transition-colors">
                Subscribe to our newsletter for travel deals & updates
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting || submitted}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-green text-white font-semibold text-base hover:bg-brand-greenDark disabled:opacity-70 transition-colors shadow-card"
            >
              {submitted ? (
                <>
                  <CheckIcon size={20} />
                  Enquiry Sent — We'll contact you soon!
                </>
              ) : submitting ? (
                'Sending...'
              ) : (
                <>
                  Submit Enquiry
                  <SendIcon size={18} />
                </>
              )}
            </button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = 'text', required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-700 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm"
      />
    </div>
  );
}

function CountField({
  label, name, value, onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="text-center">
      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min="0"
        max="20"
        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm text-center font-semibold"
      />
    </div>
  );
}
