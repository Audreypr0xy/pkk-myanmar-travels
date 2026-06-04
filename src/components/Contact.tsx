import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  SendIcon,
  CheckIcon } from
'lucide-react';
import { SectionHeader } from './SectionHeader';
export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xeewqrrw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again or contact us directly on Facebook.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Plan Your Next Journey With Us"
          description="Have a destination in mind or need a custom itinerary? Send us a message — our travel experts will get back to you within 24 hours." />
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-white rounded-3xl p-7 md:p-10 shadow-card">
            
            <h3 className="font-display font-bold text-2xl text-neutral-900 mb-2">
              Send us a message
            </h3>
            <p className="text-neutral-600 text-sm mb-7">
              Fill out the form and we’ll reach out shortly.
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="John Doe"
                  required />
                
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@email.com"
                  required />
                
              </div>
              <Field
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+959 ..." />
              
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your dream trip..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none text-sm" />
                
              </div>

              <button
                type="submit"
                disabled={submitting || submitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-green text-white font-semibold hover:bg-brand-greenDark disabled:opacity-70 transition-colors">
                
                {submitted ?
                <>
                    <CheckIcon size={18} />
                    Message Sent — We’ll be in touch!
                  </> :
                submitting ?
                'Sending...' :

                <>
                    Send Message
                    <SendIcon size={16} />
                  </>
                }
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="space-y-6">
            
            <div className="bg-brand-greenDark text-white rounded-3xl p-7 md:p-10 shadow-card">
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
                  <a
                    href="tel:+959795884090"
                    className="block hover:text-brand-greenLight">
                    
                    +959 795-884-090
                  </a>
                  <a
                    href="tel:+959978587396"
                    className="block hover:text-brand-greenLight">
                    
                    +959 978-587-396
                  </a>
                </InfoRow>
                <InfoRow icon={MailIcon} label="Email">
                  <a
                    href="mailto:pkktravel3377@gmail.com"
                    className="hover:text-brand-greenLight break-all">
                    
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-sm font-semibold">
                  
                  <FacebookIcon size={16} />
                  facebook/pkkmyanmartravelandtour
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-card h-72">
              <iframe
                title="PKK Myanmar Office Location"
                src="https://maps.google.com/maps?q=PKK+Myanmar+Travels+and+Tours+Yangon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required








}: {label: string;name: string;value: string;onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;placeholder?: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-neutral-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all text-sm" />
      
    </div>);

}
function InfoRow({
  icon: Icon,
  label,
  children




}: {icon: React.ElementType;label: string;children: React.ReactNode;}) {
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
    </div>);

}