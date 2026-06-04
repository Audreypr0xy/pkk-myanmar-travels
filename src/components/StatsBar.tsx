import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5,000+', label: 'Happy Travelers' },
  { value: '25+',    label: 'Destinations' },
  { value: '10+',    label: 'Years Experience' },
  { value: '4.9★',   label: 'Customer Rating' },
];

export function StatsBar() {
  return (
    <section className="bg-brand-green">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-row divide-x divide-white/20">
          {stats.map((stat, i) => (
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
              <div className="text-xs md:text-sm text-white/75 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
