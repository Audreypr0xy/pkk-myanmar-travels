import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const testimonials = [
  {
    name: 'Daw Khin Mya',
    destination: 'Buddha Gaya Pilgrimage Tour',
    flag: '🇮🇳',
    rating: 5,
    review: 'PKK Myanmar Travel သည် ကျွန်မ၏ ဘုဒ္ဓဂယာ ခရီးစဉ်ကို အလွန်တင့်တယ်အောင် စီစဉ်ပေးခဲ့သည်။ Guide များသည် ကြင်နာသောစိတ်ဖြင့် ကူညီပေးကြပြီး ဘာမျှ ငြင်းစရာမရှိပါ။ နောက်ထပ်ခရီးတွင်လည်း ဆက်လက်သုံးစွဲမည်ဖြစ်သည်။',
    avatar: 'KM',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'U Myo Thant',
    destination: 'Japan Tour — Tokyo & Kyoto',
    flag: '🇯🇵',
    rating: 5,
    review: 'Japan ခရီးစဉ်အတွက် visa ကနေ hotel အထိ အားလုံးကို PKK ကပဲ စီစဉ်ပေးခဲ့တယ်။ Price က သင့်တင့်ပြီး service က တော်တော်ကောင်းတယ်။ Japan ကို ပထမဆုံးသွားတဲ့ ကျွန်တော့်အတွက် အင်မတန် convenient ဖြစ်ခဲ့တယ်။',
    avatar: 'MT',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Ma Ei Phyu',
    destination: 'Singapore & Malaysia Tour',
    flag: '🇸🇬',
    rating: 5,
    review: 'မိသားစုနဲ့ Singapore Malaysia သွားတာ PKK Travel ကြောင့် အချိန်ကုန်လူပင်ပန်းမဲ့ ပျော်ရွှင်စွာ ပြန်လာနိုင်ခဲ့တယ်။ ကလေးတွေပါတဲ့ trip ကို အထူးဂရုစိုက်ပေးတာ ကျေးဇူးတင်ပါတယ်။',
    avatar: 'EP',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Ko Zaw Lin',
    destination: 'Dubai & UAE Tour',
    flag: '🇦🇪',
    rating: 5,
    review: 'Dubai ခရီးစဉ် booking ကို PKK ကိုပဲ အပ်ခဲ့တယ်။ Desert safari ကနေ Burj Khalifa အထိ program တွေ အများကြီး ပေးထားတာ ကျေနပ်ပါတယ်။ Staff တွေ response မြန်ပြီး professional ဆုံးပဲ။',
    avatar: 'ZL',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Daw Aye Aye Khin',
    destination: 'Sri Lanka Pilgrimage Tour',
    flag: '🇱🇰',
    rating: 5,
    review: 'Sri Lanka ဘုရားဖူးခရီးကို PKK ကနေ သွားခဲ့တာ တော်တော်ကောင်းတယ်။ Tour guide က မြန်မာလိုပြောနိုင်တဲ့သူဆိုတော့ ရှင်းပြချက်တွေ ကောင်းကောင်း နားလည်ခဲ့ရပါတယ်။',
    avatar: 'AK',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Ko Htet Aung',
    destination: 'Switzerland & Europe Tour',
    flag: '🇨🇭',
    rating: 5,
    review: 'Europe 14 ရက်ခရီးကို ကိုယ်တိုင် plan ချမလို့ ရှုပ်နေတာကို PKK ကနေ package နဲ့ သွားတော့ အဆင်ပြေသွားတယ်။ Switzerland Alps မြင်ကွင်းတွေ မမေ့နိုင်ဘူး။ ဈေးနှုန်းလည်း expected ထက် ပိုကောင်းတယ်။',
    avatar: 'HA',
    color: 'bg-teal-100 text-teal-700',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={15} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const prev = () => { setDirection(-1); setCurrent((c) => (c - 1 + total) % total); };
  const next = () => { setDirection(1); setCurrent((c) => (c + 1) % total); };

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  const getVisible = () =>
    [0, 1, 2].map((offset) => ({
      data: testimonials[(current + offset) % total],
      key: (current + offset) % total,
    }));

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)',
      }}
    >
     
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-green-300/60" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-300">
              Customer Reviews
            </span>
            <span className="w-8 h-px bg-green-300/60" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto">
        
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {getVisible().map(({ data: t, key }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 flex flex-col gap-4"
            >
              <StarRating rating={t.rating} />

              <p className="text-white/90 text-sm leading-relaxed flex-1">
                {t.review}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.color}`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-white/60 flex items-center gap-1">
                    <span>{t.flag}</span>
                    <span>{t.destination}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeftIcon size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
