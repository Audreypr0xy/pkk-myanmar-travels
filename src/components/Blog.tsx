import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, ArrowRightIcon, TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './SectionHeader';
import { posts, categoryColors, type Category } from '../data/blogPosts';

const categories: Category[] = ['All', 'Travel Tips', 'Destinations', 'Tour Packages', 'Pilgrimage'];

export function Blog() {
  const [active, setActive] = useState<Category>('All');

  const featured = posts.find((p) => p.featured)!;
  const filtered =
    active === 'All'
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === active && !p.featured);

  const showFeatured = active === 'All' || active === featured.category;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="PKK Travel Blog"
          title="Stories, Tips & Travel Inspiration"
          description="From pilgrimage guides to destination highlights — find everything you need to plan your next unforgettable journey with PKK Myanmar Travels & Tours."
        />

        
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-green text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {showFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group mb-12 rounded-3xl overflow-hidden bg-neutral-50 shadow-card hover:shadow-cardHover transition-all duration-300 grid grid-cols-1 lg:grid-cols-2"
          >
            <Link to={`/blog/${featured.slug}`} className="relative h-64 lg:h-auto overflow-hidden block">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:block hidden" />
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold tracking-wide">
                Featured
              </span>
            </Link>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4 ${categoryColors[featured.category]}`}
              >
                <TagIcon size={11} />
                {featured.category}
              </span>
              <Link to={`/blog/${featured.slug}`}>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 leading-snug mb-4 hover:text-brand-green transition-colors">
                  {featured.title}
                </h2>
              </Link>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={12} /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon size={12} /> {featured.readTime}
                </span>
              </div>
              <Link
                to={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group/link w-fit"
              >
                Read Full Article
                <ArrowRightIcon size={15} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col border border-neutral-100"
              >
                <Link to={`/blog/${post.slug}`} className="relative h-48 overflow-hidden block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}
                  >
                    <TagIcon size={10} />
                    {post.category}
                  </span>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={11} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={11} /> {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-display font-bold text-lg text-neutral-900 leading-snug mb-3 group-hover:text-brand-green transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group/link mt-auto"
                  >
                    Read More
                    <ArrowRightIcon size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            <p className="text-lg font-medium">No posts in this category yet.</p>
            <p className="text-sm mt-1">Check back soon for new stories!</p>
          </div>
        )}
      </div>
    </section>
  );
}
