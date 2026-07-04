import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  HeartHandshakeIcon,
  UsersIcon,
  StarIcon,
  MapPinIcon,
  PhoneCallIcon,
  AwardIcon,
  EyeIcon,
  TargetIcon,
  QuoteIcon,
  CheckCircle2Icon,
  Globe2Icon as GlobeIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const values = [
  {
    icon: HeartHandshakeIcon,
    title: 'Your Satisfaction First',
    desc: 'Every journey we craft is built around your happiness. "Your Satisfaction is Our Victory" is not just our motto — it is our promise.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trusted & Reliable',
    desc: 'With over 14 years of experience, we handle every detail with transparency and professionalism so you can travel worry-free.',
  },
  {
    icon: GlobeIcon,
    title: 'Wide Destination Coverage',
    desc: 'From sacred pilgrimage sites in India and Sri Lanka to the bustling cities of Europe and Asia — we take you everywhere.',
  },
  {
    icon: UsersIcon,
    title: 'Expert Local Team',
    desc: 'Our dedicated Myanmar-based team understands your needs, speaks your language, and is always available to support you.',
  },
];

const milestones = [
  { year: '2011', event: 'PKK Myanmar Travels Founded' },
  { year: '2013', event: 'Launched Southeast Asia Tour Packages' },
  { year: '2015', event: 'Introduced Pilgrimage Tour Series' },
  { year: '2018', event: 'Expanded to Europe & Cruise Trips' },
  { year: '2021', event: 'Reached 3,000+ Happy Travelers' },
  { year: '2025', event: '5,000+ Travelers & 25+ Destinations' },
];

const team = [
  {
    name: 'Khin Lapyae Wom',
    role: 'Business Development Director',
    image: 'https://khinlapyaewom.carrd.co/assets/images/image05.jpg?v=c6e8c711',
    link: 'https://khinlapyaewom.carrd.co/',
  },
];

export function AboutUs() {
  return (
    <section id="about" className="bg-white">

      {/* ── Hero Banner ── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1733913128715-ddfac4bcf9fd?auto=format&fit=crop&w=2400&q=80"
          alt="About PKK Myanmar Travels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-greenLight/80" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-greenLight">
                About Us
              </span>
              <span className="w-8 h-px bg-brand-greenLight/80" />
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-3">
              Who We Are
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto italic font-light">
              "Your Satisfaction is Our Victory"
            </p>

          </motion.div>
        </div>
      </div>

      {/* ── Welcome / Vision / Mission / Why Choose Us / Commitment ── */}
      <div className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 justify-center">
              <span className="w-8 h-px bg-brand-green" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                Welcome
              </span>
              <span className="w-8 h-px bg-brand-green" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 leading-tight mb-4">
              Welcome to <span className="text-brand-green">PKK Myanmar</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Every journey begins with trust. At PKK Myanmar, we bring the world closer to you —
              crafting exceptional journeys, authentic experiences, and outstanding service for every traveler.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-cardHover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-greenLight flex items-center justify-center mb-5">
                <EyeIcon size={22} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">Our Vision</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                To be Myanmar's leading and most trusted travel company, inspiring people to explore the
                world through exceptional journeys, authentic experiences, and outstanding service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-cardHover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-greenLight flex items-center justify-center mb-5">
                <TargetIcon size={22} className="text-brand-green" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">Our Mission</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                At PKK Myanmar, we are committed to delivering world-class travel experiences with
                professionalism, integrity, and care. We strive to provide safe, reliable, and personalized
                travel solutions while creating unforgettable memories for every traveler. Through innovation,
                excellence, and a customer-first approach, we aim to exceed expectations and build lasting
                relationships.
              </p>
            </motion.div>
          </div>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-brand-green px-8 py-12 md:py-14 text-center mb-16 overflow-hidden"
          >
            <QuoteIcon size={36} className="text-white/25 mx-auto mb-4" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-greenLight mb-3">
              Our Motto
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white italic">
              "Your Satisfaction Is Our Victory."
            </h3>
          </motion.div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Why Choose PKK Myanmar?"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Professional & Experienced Travel Experts',
                'Personalized Travel Solutions',
                'Safe & Reliable Services',
                'Quality Experiences at Great Value',
                'Dedicated Customer Support',
                'Trusted by Travelers',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-card"
                >
                  <CheckCircle2Icon size={20} className="text-brand-green shrink-0 mt-0.5" />
                  <p className="text-neutral-700 text-sm font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-14 h-14 rounded-full bg-brand-greenLight flex items-center justify-center mx-auto mb-5">
              <HeartHandshakeIcon size={26} className="text-brand-green" />
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
              Our Commitment
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed">
              Every journey begins with trust. At PKK Myanmar, we are dedicated to turning your travel
              dreams into unforgettable experiences. Your happiness, comfort, and satisfaction are at the
              heart of everything we do — because your satisfaction is our victory.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Our Story ── */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-cardHover">
                <img
                  src="/about-hero.jpg"
                  alt="PKK Myanmar Travels team"
                  className="w-full h-80 md:h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-green text-white rounded-2xl px-6 py-4 shadow-cardHover text-center">
                <div className="font-display font-bold text-3xl leading-none">14+</div>
                <div className="text-xs font-medium text-white/85 mt-1">Years of Trust</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-8 h-px bg-brand-green" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
                  Our Story
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 leading-tight mb-6">
                A Journey Built on <span className="text-brand-green">Passion & Purpose</span>
              </h2>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                PKK Myanmar Travels was founded in 2011 with a single mission — to make meaningful travel accessible to every Myanmar traveler. What began as a small local travel agency has grown into one of Myanmar's most trusted tour operators, serving over 5,000 happy travelers across 25+ destinations worldwide.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-4">
                We specialize in pilgrimage tours, Southeast Asia getaways, Asia cultural packages, European adventures, and cruise trips — all carefully designed with our travelers' comfort, safety, and satisfaction in mind.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed mb-8">
                At PKK Myanmar Travels, every journey is personal. We don't just book trips — we create memories that last a lifetime.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-greenDark transition-colors shadow-card"
                >
                  <MapPinIcon size={16} />
                  Explore Tours
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand-green text-brand-green font-semibold text-sm hover:bg-brand-green hover:text-white transition-colors"
                >
                  <PhoneCallIcon size={16} />
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-brand-green">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-row divide-x divide-white/20">
            {[
              { value: '5,000+', label: 'Happy Travelers' },
              { value: '25+', label: 'Destinations' },
              { value: '14+', label: 'Years Experience' },
              { value: '4.9★', label: 'Customer Rating' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-1 flex flex-col items-center justify-center py-6 px-2 text-center"
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/75 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Values ── */}
      <div className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Values That Drive Every Journey"
            description="Everything we do is guided by a deep commitment to quality, honesty, and the happiness of every traveler we serve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-7 shadow-card hover:shadow-cardHover transition-shadow duration-300 flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-greenLight flex items-center justify-center">
                    <Icon size={22} className="text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-neutral-900 mb-2">{v.title}</h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Our Journey Timeline ── */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeader
            eyebrow="Our History"
            title="A Decade of Memorable Journeys"
          />
          <div className="relative max-w-3xl mx-auto">
            {/* vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white rounded-xl px-5 py-3 shadow-card border border-neutral-100">
                      <p className="text-neutral-700 text-sm font-medium">{m.event}</p>
                    </div>
                  </div>
                  {/* dot */}
                  <div className="shrink-0 z-10 w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-card">
                    <AwardIcon size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <span className={`font-display font-bold text-2xl text-brand-green ${i % 2 === 0 ? 'text-left' : 'text-right block'}`}>
                      {m.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team ── */}
      <div className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet Our Business Development Director"
            description="Connecting travelers with the world — with dedication, expertise, and heart."
          />
          <div className="flex justify-center">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-white rounded-3xl overflow-hidden shadow-cardHover w-72 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-display font-bold text-xl text-neutral-900 mb-1">{member.name}</h4>
                  <p className="text-brand-green text-sm font-semibold mb-3">{member.role}</p>
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-green hover:bg-brand-greenDark px-4 py-2 rounded-full transition-colors"
                    >
                      View Profile →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2400&q=80"
          alt="Travel with PKK"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-brand-greenDark/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Start Your Next Adventure?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Let PKK Myanmar Travels plan your perfect trip. We'll take care of everything — you just pack your bags.
            </p>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
