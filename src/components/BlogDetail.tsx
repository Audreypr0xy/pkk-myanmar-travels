import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { posts, categoryColors } from '../data/blogPosts';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const postIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[postIndex];

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-2xl font-display font-bold text-neutral-900 mb-4">Post not found</p>
        <Link to="/blog" className="text-brand-green font-semibold hover:underline">
         
        </Link>
      </div>
    );
  }

  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  return (
    <article className="pt-24 pb-20 bg-white">
      
      <div className="relative h-72 md:h-[480px] overflow-hidden mb-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      
        <button
          onClick={() => navigate('/blog')}
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-neutral-800 text-sm font-semibold hover:bg-white transition-colors shadow-md"
        >
          <ArrowLeftIcon size={14} />
          Back to Blog
        </button>

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 max-w-4xl mx-auto">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[post.category]}`}
          >
            <TagIcon size={11} />
            {post.category}
          </span>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-white leading-snug">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <CalendarIcon size={13} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon size={13} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

     
      <div className="max-w-3xl mx-auto px-5 md:px-8 mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-neutral-600 leading-relaxed border-l-4 border-brand-green pl-5 mb-12 italic"
        >
          {post.excerpt}
        </motion.p>

  
        {post.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            className="mb-10"
          >
            {section.heading && (
              <h2 className="font-display font-bold text-xl md:text-2xl text-neutral-900 mb-4 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-brand-green inline-block shrink-0" />
                {section.heading}
              </h2>
            )}
            <p className="text-neutral-600 leading-relaxed text-base md:text-lg">
              {section.body}
            </p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 p-8 rounded-2xl bg-brand-greenLight border border-brand-green/20 text-center"
        >
          <p className="font-display font-bold text-xl text-neutral-900 mb-2">
            Ready to plan your trip?
          </p>
          <p className="text-neutral-600 text-sm mb-5">
            PKK Myanmar Travels & Tours has been crafting unforgettable journeys since 2011.
          </p>
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-white font-semibold text-sm hover:bg-brand-greenDark transition-colors"
          >
            Enquire Now
            <ArrowRightIcon size={15} />
          </Link>
        </motion.div>

        <div className="mt-14 pt-8 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group flex items-start gap-3 p-4 rounded-xl hover:bg-neutral-50 transition-colors"
            >
              <ArrowLeftIcon size={16} className="mt-1 text-brand-green shrink-0 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-xs text-neutral-400 mb-1">Previous Post</p>
                <p className="text-sm font-semibold text-neutral-800 group-hover:text-brand-green transition-colors line-clamp-2">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group flex items-start gap-3 p-4 rounded-xl hover:bg-neutral-50 transition-colors md:text-right md:flex-row-reverse"
            >
              <ArrowRightIcon size={16} className="mt-1 text-brand-green shrink-0 group-hover:translate-x-1 transition-transform" />
              <div>
                <p className="text-xs text-neutral-400 mb-1">Next Post</p>
                <p className="text-sm font-semibold text-neutral-800 group-hover:text-brand-green transition-colors line-clamp-2">
                  {nextPost.title}
                </p>
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </article>
  );
}
