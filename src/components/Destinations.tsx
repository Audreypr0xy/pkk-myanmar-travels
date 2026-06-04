import React from 'react';
import { motion } from 'framer-motion';
import { ShipIcon, MountainSnowIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { DestinationCard } from './DestinationCard';
import { FeatureDestination } from './FeatureDestination';
const seAsia = [
{
    title: 'Thai (Bangkok–Pattaya)',
  duration: '4N / 5D',
  flag: '🇹🇭',
  tagline: 'Pilgrimage, shopping & beach escape.',
  image:
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Singapore',
  duration: '4N / 5D',
  flag: '🇸🇬',
  tagline: 'Modern city & Sentosa adventure.',
  image:
  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Malaysia (Kuala Lumpur)',
  duration: '4N / 5D',
  flag: '🇲🇾',
  tagline: 'Twin Towers & Batu Caves.',
  image:
  'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Vietnam',
  duration: '4N / 5D',
  flag: '🇻🇳',
  tagline: 'History, culture & nature journey.',
  image:
  'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Cambodia',
  duration: '4N / 5D',
  flag: '🇰🇭',
  tagline: 'Angkor Wat heritage discovery.',
  image:
  'https://images.unsplash.com/photo-1565687363630-7a81809a199c?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Philippines',
  duration: '4N / 5D',
  flag: '🇵🇭',
  tagline: 'Island hopping & beach getaway.',
  image:
  'https://images.unsplash.com/photo-1771533680002-5210c217a16f?auto=format&fit=crop&w=1400&q=80'
}];

const asia = [
{
    title: 'Japan',
  duration: '5N / 6D',
  flag: '🇯🇵',
  tagline: 'Tokyo vibes & cultural discovery.',
  image:
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'South Korea',
  duration: '5N / 6D',
  flag: '🇰🇷',
  tagline: 'Seoul, Nami Island & K-culture experience.',
  image:
  'https://images.unsplash.com/photo-1566800890932-e89159daf3dc?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'China',
  duration: '5N / 6D',
  flag: '🇨🇳',
  tagline: 'Beijing–Shanghai landmark exploration.',
  image:
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'UAE',
  duration: '4N / 5D',
  flag: '🇦🇪',
  tagline: 'Luxury city, shopping & desert safari.',
  image:
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'India',
  duration: '5N / 6D',
  flag: '🇮🇳',
  tagline: 'Taj Mahal & heritage discovery.',
  image:
  'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80'
}];

const europe = [
{
    title: 'France',
  duration: '13N / 14D',
  flag: '🇫🇷',
  tagline: 'Paris & Eiffel Tower beauty.',
  image:
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Switzerland',
  duration: '13N / 14D',
  flag: '🇨🇭',
  tagline: 'Alps & snow mountain views.',
  image:
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Italy',
  duration: '13N / 14D',
  flag: '🇮🇹',
  tagline: 'Rome, Venice & historic wonders.',
  image:
  'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Austria',
  duration: '13N / 14D',
  flag: '🇦🇹',
  tagline: 'Vienna’s classic charm.',
  image:
  'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Germany',
  duration: '13N / 14D',
  flag: '🇩🇪',
  tagline: 'Culture & historic landmarks.',
  image:
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=80'
},
{
    title: 'Netherlands',
  duration: '13N / 14D',
  flag: '🇳🇱',
  tagline: 'Amsterdam canal beauty.',
  image:
  'https://images.unsplash.com/photo-1754835143706-75a35850fd3c?auto=format&fit=crop&w=1400&q=80'
}];

function CategoryHeading({ label, title }: {label: string;title: string;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5
      }}
      className="mb-8 flex items-end justify-between flex-wrap gap-3">
      
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green mb-2">
          {label}
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900">
          {title}
        </h3>
      </div>
      <div className="hidden md:block h-px flex-1 bg-neutral-200 ml-8" />
    </motion.div>);

}
export function Destinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Tour Destinations"
          title="Journeys Across the World"
          description="From sacred pilgrimages to breathtaking landscapes — explore our handpicked destinations across Asia, Europe, and beyond." />
        

        {/* Pilgrimage Tours */}
        <div className="mb-24">
          <CategoryHeading label="Sacred Journeys" title="Pilgrimage Tours" />
          <div className="space-y-16">
            <FeatureDestination
              image="https://images.unsplash.com/photo-1622194993926-1801586d460f?auto=format&fit=crop&w=1600&q=80"
              title="Buddha Gaya Pilgrimage Tour"
              description="A deeply spiritual journey to the sacred sites of Buddhism — walk where the Buddha walked, meditate beneath the Bodhi tree, and discover the timeless heritage of ancient India and Nepal."
              durations={['7N / 8D', '11N / 12D', '14N / 15D']}
              stops={[
              'Buddha Gaya',
              'Rajgir',
              'Nalanda',
              'Varanasi',
              'Kushinagar',
              'Lumbini']
              } />
            
            <FeatureDestination
              reverse
              image="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1600&q=80"
              title="Sri Lanka Pilgrimage Tour"
              description="Discover the spiritual heart of Sri Lanka — from the sacred Temple of the Tooth in Kandy to the ancient Sri Maha Bodhi tree, a living connection to over two millennia of Buddhist tradition."
              durations={['6N / 7D', '7N / 8D']}
              stops={['Colombo', 'Kandy', 'Anuradhapura', 'Sri Maha Bodhi']} />
            
          </div>
        </div>

        {/* Southeast Asia */}
        <div className="mb-24">
          <CategoryHeading
            label="Near & Familiar"
            title="Southeast Asia Tours" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seAsia.map((d, i) =>
            <DestinationCard
              key={d.title}
              {...d}
              duration={d.duration}
              index={i} />

            )}
          </div>
        </div>

        {/* Asia */}
        <div className="mb-24">
          <CategoryHeading label="Across Asia" title="Asia Tour Packages" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {asia.map((d, i) =>
            <DestinationCard
              key={d.title}
              {...d}
              duration={d.duration}
              index={i} />

            )}
          </div>
        </div>

        {/* Cruise + Kashmir feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-24">
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
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative rounded-3xl overflow-hidden h-80 group shadow-card">
            
            <img
              src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1600&q=80"
              alt="Cruise ship"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-3">
                <ShipIcon size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Cruise Trip
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Asia & Southeast Asia Cruise
              </h3>
              <p className="text-white/85 mb-4 max-w-md">
                Sail across stunning waters with stops in Singapore, Malaysia,
                and Thailand on this unforgettable cruise voyage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-semibold">
                  6N / 7D
                </span>
                {['Singapore', 'Malaysia', 'Thailand'].map((s) =>
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                  
                    {s}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

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
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="relative rounded-3xl overflow-hidden h-80 group shadow-card">
            
            <img
              src="https://images.unsplash.com/photo-1530595802175-2c9e0e281849?auto=format&fit=crop&w=1600&q=80"
              alt="Kashmir mountains"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-3">
                <MountainSnowIcon size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Signature Tour
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Kashmir — Paradise on Earth
              </h3>
              <p className="text-white/85 mb-4 max-w-md">
                Snow-capped peaks, serene Dal Lake houseboats, and unforgettable
                Himalayan views in our special Kashmir experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-green text-white text-xs font-semibold">
                  5N / 6D
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
                  Special Tour
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Europe */}
        <div>
          <CategoryHeading
            label="Old-World Charm"
            title="Europe Tour Packages" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {europe.map((d, i) =>
            <DestinationCard
              key={d.title}
              {...d}
              duration={d.duration}
              index={i} />

            )}
          </div>
        </div>
      </div>
    </section>);

}