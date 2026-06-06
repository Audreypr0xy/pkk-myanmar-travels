import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, ArrowRightIcon, TagIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Category = 'All' | 'Travel Tips' | 'Destinations' | 'Tour Packages' | 'Pilgrimage';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Complete Guide to the Buddha Gaya Pilgrimage Tour from Myanmar',
    excerpt:
      'Everything you need to know before embarking on the sacred journey to Bodh Gaya — visa requirements, best travel season, what to bring, and the spiritual sites you cannot miss.',
    category: 'Pilgrimage',
    date: 'May 28, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80',
    featured: true,
  },
  {
    id: 2,
    title: '5 Reasons Why Japan Should Be Your Next Destination',
    excerpt:
      "From cherry blossoms in Kyoto to the neon lights of Tokyo — Japan offers a travel experience unlike anywhere else. Here's why Myanmar travelers love it.",
    category: 'Destinations',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: "PKK Executive Europe 14-Day Tour: What's Included",
    excerpt:
      "Curious what our Europe package covers? We break down every detail — from Swiss Alps to the Eiffel Tower — so you know exactly what to expect.",
    category: 'Tour Packages',
    date: 'May 5, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: '10 Travel Tips for First-Time International Travelers',
    excerpt:
      'Traveling abroad for the first time? These practical tips — from packing smart to managing currency — will make your journey smoother and stress-free.',
    category: 'Travel Tips',
    date: 'Apr 22, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Sri Lanka Pilgrimage: Sacred Sites & Travel Essentials',
    excerpt:
      "The sacred Temple of the Tooth, Anuradhapura, and Polonnaruwa — discover the spiritual treasures of Sri Lanka on PKK's pilgrimage circuit.",
    category: 'Pilgrimage',
    date: 'Apr 10, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: "Singapore in 4 Nights: The Perfect Family Itinerary",
    excerpt:
      "Gardens by the Bay, Sentosa Island, Universal Studios — here's how to make the most of 4 nights in Singapore with kids or family in tow.",
    category: 'Tour Packages',
    date: 'Mar 30, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
  },
];

const categories: Category[] = ['All', 'Travel Tips', 'Destinations', 'Tour Packages', 'Pilgrimage'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Travel Tips': 'bg-blue-50 text-blue-700',
  Destinations: 'bg-amber-50 text-amber-700',
  'Tour Packages': 'bg-emerald-50 text-emerald-700',
  Pilgrimage: 'bg-purple-50 text-purple-700',
};

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

        {/* Category Filter */}
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

        {/* Featured Post */}
        {showFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="group mb-12 rounded-3xl overflow-hidden bg-neutral-50 shadow-card hover:shadow-cardHover transition-all duration-300 grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:block hidden" />
              <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-brand-green text-white text-xs font-bold tracking-wide">
                Featured
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4 ${categoryColors[featured.category]}`}
              >
                <TagIcon size={11} />
                {featured.category}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-neutral-900 leading-snug mb-4">
                {featured.title}
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={12} /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon size={12} /> {featured.readTime}
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group/link w-fit"
              >
                Read Full Article
                <ArrowRightIcon
                  size={15}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        )}

        {/* Grid Posts */}
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
                <div className="relative h-48 overflow-hidden">
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
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={11} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 leading-snug mb-3 group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group/link mt-auto"
                  >
                    Read More
                    <ArrowRightIcon
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
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
