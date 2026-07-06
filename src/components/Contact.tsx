import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  SendIcon,
  Loader2Icon,
  CheckCircle2Icon,
  AlertCircleIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

// ── Formspree endpoint ──────────────────────────────────────────────
// 1. Sign up (free) at https://formspree.io
// 2. Create a new form, copy its endpoint (looks like https://formspree.io/f/xxxxxxxx)
// 3. Paste it below, replacing the placeholder.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrewjwba';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full py-10">
        <div className="w-14 h-14 rounded-full bg-brand-greenLight flex items-center justify-center mb-4">
          <CheckCircle2Icon size={28} className="text-brand-green" />
        </div>
        <h4 className="font-display font-bold text-xl text-neutral-900 mb-2">Message Sent!</h4>
        <p className="text-neutral-600 text-sm max-w-xs">
          Thank you for reaching out. Our travel experts will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-green hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="09xxxxxxxxx"
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition"
        />
      </div>

      <div>
        <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
          Destination / Tour Package
        </label>
        <input
          id="destination"
          name="destination"
          type="text"
          placeholder="e.g. Bagan, Europe Tour, Japan..."
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your travel plans, dates, and number of travelers..."
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
          <AlertCircleIcon size={16} className="shrink-0" />
          Something went wrong. Please try again, or contact us directly by phone or email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-greenDark transition-colors shadow-card disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2Icon size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <SendIcon size={16} />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Find Us & Get in Touch"
          description="Visit our office or reach out through any of the channels below — our travel experts are happy to help plan your next journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 max-w-7xl mx-auto">


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

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-7 md:p-10 shadow-card"
          >
            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-1">
              Send an Enquiry
            </h3>
            <p className="text-neutral-500 text-sm mb-6">
              Fill in your details and we'll get back to you within 24 hours.
            </p>
            <EnquiryForm />
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
