import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, ImageOffIcon } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  tagline: string;
  duration: string;
  flag?: string;
  index?: number;
}

export function DestinationCard({
  image,
  title,
  tagline,
  duration,
  flag,
  index = 0,
}: DestinationCardProps) {
  const [error, setError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-neutral-100">
        {!error ? (
          <img
            src={image}
            alt={title}
            onError={() => setError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          // Placeholder when image fails
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-greenLight to-neutral-100">
            <ImageOffIcon size={32} className="text-brand-green/40 mb-2" />
            <span className="text-xs text-neutral-400">{title}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold">
          {duration}
        </span>

        {flag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-base shadow-sm">
            {flag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h4 className="font-display font-bold text-lg text-neutral-900 mb-1.5 flex items-center gap-1.5">
          <MapPinIcon size={14} className="text-brand-green" />
          {title}
        </h4>
        <p className="text-neutral-600 text-sm leading-relaxed">{tagline}</p>
      </div>
    </motion.article>
  );
}
