import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon } from 'lucide-react';
interface FeatureDestinationProps {
  image: string;
  title: string;
  description: string;
  durations: string[];
  stops: string[];
  reverse?: boolean;
}
export function FeatureDestination({
  image,
  title,
  description,
  durations,
  stops,
  reverse = false
}: FeatureDestinationProps) {
  return (
    <motion.div
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
        duration: 0.6
      }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      
      <div className="relative rounded-3xl overflow-hidden h-72 md:h-96 shadow-card">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 mb-4">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-6">{description}</p>

        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3 flex items-center gap-2">
            <ClockIcon size={14} />
            Duration Options
          </div>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) =>
            <span
              key={d}
              className="px-4 py-1.5 rounded-full bg-brand-green text-white text-sm font-semibold">
              
                {d}
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
        
          </div>
          <div className="flex flex-wrap gap-2">
            {stops.map((s) =>
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-brand-greenLight text-brand-greenDark text-sm font-medium border border-brand-green/20">
              
                {s}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>);

}