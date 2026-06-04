import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center'
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
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
        margin: '-80px'
      }}
      transition={{
        duration: 0.6
      }}
      className={`max-w-3xl mb-14 md:mb-20 ${alignClass}`}>
      
      <div
        className={`inline-flex items-center gap-2 mb-4 ${align === 'center' ? '' : ''}`}>
        
        <span className="w-8 h-px bg-brand-green" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green">
          {eyebrow}
        </span>
        <span className="w-8 h-px bg-brand-green" />
      </div>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-neutral-900 leading-tight mb-4">
        {title}
      </h2>
      {description &&
      <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      }
    </motion.div>);

}