export type Category = 'All' | 'Travel Tips' | 'Destinations' | 'Tour Packages' | 'Pilgrimage';

export interface BlogSection {
  heading?: string;
  body: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, 'All'>;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'buddha-gaya-pilgrimage-guide',
    title: 'Complete Guide to the Buddha Gaya Pilgrimage Tour from Myanmar',
    excerpt: 'Everything you need to know before embarking on the sacred journey to Bodh Gaya — visa requirements, best travel season, what to bring, and the spiritual sites you cannot miss.',
    category: 'Pilgrimage',
    date: 'May 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80',
    featured: true,
    sections: [
      { heading: 'Introduction', body: 'For Buddhists in Myanmar, a pilgrimage to Bodh Gaya is more than just a journey — it is a once-in-a-lifetime spiritual milestone. Bodh Gaya, located in the Indian state of Bihar, is the place where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree more than 2,500 years ago. Today it stands as the holiest site in all of Buddhism, drawing pilgrims from across Asia and the world. PKK Myanmar Travels & Tours has been organising guided pilgrimage tours to Bodh Gaya for years, and in this guide we share everything you need to know to prepare for this sacred trip. ' },
      { heading: 'Why Visit Bodh Gaya?', body: 'Bodh Gaya is one of the four most sacred sites in Buddhism, alongside Lumbini (birth), Sarnath (first sermon), and Kushinagar (passing). At its centre stands the Mahabodhi Temple — a UNESCO World Heritage Site — which houses the Vajrasana, the diamond throne where the Buddha sat during his meditation. The original Bodhi Tree, a direct descendant of the tree under which the Buddha gained enlightenment, still grows peacefully beside the temple. Spending time in meditation at this spot is an experience that pilgrims describe as profoundly moving and life-changing. Beyond the main temple, Bodh Gaya is home to monasteries built by Buddhist nations from around the world, including a beautiful Myanmar monastery where you can stay, pray, and connect with the broader global Buddhist community.' },
      { heading: 'Best Time to Travel', body: 'The ideal time to visit Bodh Gaya from Myanmar is between October and March, when the weather is cool and pleasant. Peak pilgrimage season falls around the full moon of Kason (April–May in the Buddhist calendar) and during the Tibetan Buddhist Monlam festival in January–February, when tens of thousands of monks and laypeople gather. We generally recommend October through December for PKK group tours — the weather is comfortable, crowds are manageable, and the atmosphere at the temples is serene. Avoid visiting between April and June, when temperatures in Bihar can exceed 40°C and conditions become very uncomfortable.' },
      { heading: 'Visa & Travel Requirements', body: 'Myanmar citizens travelling to India for pilgrimage purposes require a valid Indian tourist visa (e-Visa is accepted). The e-Visa can be applied for online through the  official portal at least 4–7 business days before departure. You will need a passport valid for at least six months, a recent passport photo, and proof of onward travel. PKK Myanmar will assist all group tour members with the visa application process as part of our standard pilgrimage package. Flights typically depart from Yangon (RGN) to Patna (PAT), which is the nearest international airport to Bodh Gaya at approximately 110 km. From Patna, our team arranges comfortable private coach transfers directly to Bodh Gaya.' },
      { heading: 'Sacred Sites Not to Miss', body: 'Our Bodh Gaya pilgrimage itinerary includes the following essential sites: The Mahabodhi Temple & the Bodhi Tree, where you can sit in meditation at the very spot of enlightenment. The Animesh Lochana Chaitya, where the Buddha gazed at the Bodhi Tree without blinking for seven days after attaining enlightenment. The Ratnachamkana Chankramana, the jewelled walkway the Buddha paced for seven more days. The Giant Buddha Statue (80 feet tall), which was inaugurated by the Dalai Lama. And the nearby Sujata Village, where the young Sujata offered the Buddha a bowl of kheer (rice milk) before his final meditation. Depending on your tour duration, we may also visit Rajgir and Nalanda — the ancient seat of Buddhist learning — as well as Varanasi (Sarnath).' },
      { heading: 'Book with PKK Myanmar', body: 'A pilgrimage to Bodh Gaya is not something to organise alone. With PKK Myanmar Travels & Tours, every detail is taken care of — from visa support and flights to accommodation, meals, monastery visits, and the guidance of an experienced Burmese-speaking tour leader. Our groups travel together in a spirit of merit-making and companionship, and many of our pilgrims describe the journey as one of the most meaningful experiences of their lives. If you are ready to walk the path of the Buddha, we would be honoured to guide you. Contact us today to enquire about our next available Bodh Gaya departure.' },
    ],
  },
  {
   id: 2,
    slug: 'japan-next-destination',
    title: '5 Reasons Why Japan Should Be Your Next Destination',
    excerpt:
      "From cherry blossoms in Kyoto to the neon lights of Tokyo — Japan offers a travel experience unlike anywhere else. Here's why Myanmar travelers love it.",
    category: 'Destinations',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        heading: 'Introduction',
        body: "Japan consistently ranks among the world's top travel destinations — and for very good reason. It is a country where ancient temples and ultramodern skyscrapers coexist in harmony, where food is treated as an art form, and where the people take extraordinary pride in hospitality and cleanliness. For travellers from Myanmar, Japan offers a fascinating blend of familiarity and wonder: a deeply Buddhist culture wrapped in a distinctly Japanese aesthetic. PKK Myanmar's Japan tour package runs for 5 nights and 6 days, and we have watched first-time visitors fall completely in love with the country. Here are five reasons why Japan should be at the top of your travel list.",
      },
      {
        heading: '1. Unforgettable Scenery',
        body: "Japan's landscapes are genuinely unlike anywhere else in Asia. In spring (late March to April), the sakura cherry blossoms turn parks and riverside paths into pink canopies that feel almost unreal. In autumn (October to November), the maple trees blaze red and gold across temple gardens and mountainsides. Year-round, iconic views abound: the perfectly cone-shaped peak of Mount Fuji reflected in lake Kawaguchiko, the thousands of vermilion torii gates winding up Fushimi Inari Shrine in Kyoto, and the blazing neon canyons of Shinjuku at night. Photographers and casual travellers alike find Japan endlessly photogenic.",
      },
      {
        heading: '2. Food & Culture',
        body: "Japan has more Michelin-starred restaurants than any other country in the world — but you do not need to spend a lot to eat extraordinarily well. A bowl of ramen at a tiny basement shop in Tokyo, fresh sushi from a conveyor belt in Osaka, or grilled yakitori at a lantern-lit izakaya after dark — every meal is an event. Buddhist travellers from Myanmar will also appreciate Japan's long vegetarian tradition, with many temples serving shojin ryori (Buddhist temple cuisine) featuring seasonal vegetables, tofu, and miso. Culturally, Japan offers tea ceremony experiences, origami workshops, samurai history museums, kabuki theatre, and much more.",
      },
      {
        heading: '3. Safe & Clean Cities',
        body: "One of the most frequently mentioned aspects of Japan by first-time visitors is how remarkably safe and clean it is. Japan has one of the lowest crime rates in the world, and it is genuinely common to leave a bag on a café chair while you visit the counter and find it exactly as you left it upon return. The trains run on time to the minute, streets are spotless even without visible rubbish bins (people carry their litter home as a matter of habit), and public toilets — famously — are often heated, with built-in bidets and music. For travellers who feel anxious about navigating an unfamiliar country, Japan is exceptionally reassuring.",
      },
      {
        heading: '4. Easy to Navigate',
        body: "Despite the language barrier, Japan is one of the easiest countries in the world to travel around. All major train stations display signs in English as well as Japanese, and the country's famed JR Rail network connects cities efficiently and punctually. Google Maps works flawlessly for navigation, Suica IC cards make paying for trains and buses simple, and most convenience stores (open 24 hours) stock English-language tourist maps. PKK Myanmar's Japan package includes a Burmese-speaking tour guide throughout the trip, so you will never feel lost or confused at any stage of the journey.",
      },
      {
        heading: '5. PKK Japan Package',
        body: "PKK Myanmar's 5 Night / 6 Day Japan package covers Tokyo and its surrounding highlights, including visits to Asakusa's Senso-ji Temple, Shibuya Crossing, Shinjuku, the Fuji Five Lakes area, and optional day trips to Nikko or Kamakura depending on the season. The package includes return flights from Yangon, hotel accommodation, daily breakfast, a Burmese-speaking guide, and all group transfers. It is ideal for both first-time travellers and those returning to explore Japan more deeply. Contact PKK Myanmar today to check upcoming departure dates and secure your place — our Japan tours fill up quickly, especially for the cherry blossom season.",
      },
    ],
  },
  {
    id: 3,
    slug: 'europe-tour-whats-included',
    title: "PKK Executive Europe 14-Day Tour: What's Included",
    excerpt:
      "Curious what our Europe package covers? We break down every detail — from Swiss Alps to the Eiffel Tower — so you know exactly what to expect.",
    category: 'Tour Packages',
    date: 'May 5, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        heading: 'Overview',
        body: "Europe is on almost every traveller's dream list — and PKK Myanmar's 13 Night / 14 Day Executive Europe Tour makes it genuinely accessible for Myanmar travellers. This flagship package covers the highlights of Western and Central Europe across six countries: France, Switzerland, Italy, Austria, Germany, and the Netherlands. It is a carefully curated journey designed for comfort and discovery, travelling by private coach with a Burmese-speaking tour leader every step of the way. Here is a complete breakdown of what is included so you can plan and budget with confidence.",
      },
      {
        heading: 'Day-by-Day Itinerary',
        body: "Day 1: Depart Yangon — fly to Paris (France). Day 2: Paris city tour — Eiffel Tower, Seine River cruise, Louvre Museum exterior, Arc de Triomphe, Champs-Élysées. Day 3: Paris to Lucerne (Switzerland) by coach via Strasbourg. Day 4: Lucerne & Mount Titlis — cable car ride to 3,020 metres, snow activities, Chapel Bridge and the old town. Day 5: Lucerne to Zurich and onwards to Milan (Italy). Day 6: Milan city tour — Duomo di Milano, Galleria Vittorio Emanuele II, Leonardo da Vinci's The Last Supper (exterior view). Day 7: Milan to Venice — gondola ride through the Grand Canal, St. Mark's Square, Doge's Palace. Day 8: Venice to Florence — Piazza del Duomo, Ponte Vecchio, Piazzale Michelangelo. Day 9: Florence to Rome — Colosseum, Roman Forum, Trevi Fountain, Vatican (St. Peter's Square). Day 10: Rome to Innsbruck (Austria) by coach. Day 11: Innsbruck to Munich (Germany) — old town, Marienplatz, Glockenspiel. Day 12: Munich to Rhine Valley — Rhine River cruise, Rhineland castles. Day 13: Rhine Valley to Amsterdam (Netherlands) — canal cruise, Anne Frank House area, Keukenhof Flower Gardens (seasonal). Day 14: Amsterdam departure — return flight to Yangon.",
      },
      {
        heading: 'What is Included',
        body: "The PKK Executive Europe Tour package includes: Return economy class flights from Yangon to Paris and from Amsterdam to Yangon. All airport-to-hotel and hotel-to-attraction transfers by private air-conditioned coach. 13 nights of hotel accommodation in 3-star and 4-star hotels (twin-sharing basis). Daily breakfast at the hotel. Entrance fees for all included attractions listed in the itinerary. Mount Titlis cable car ticket (Switzerland). Venice gondola ride (one per group). Rhine River cruise (Germany). A dedicated Burmese-speaking tour leader for the entire 14 days. Travel insurance (basic coverage — upgrade available upon request). Airport taxes and fuel surcharges at time of booking.",
      },
      {
        heading: 'Accommodation',
        body: "All hotels on the PKK Europe tour are selected for their convenient location (typically within walking distance of the main attractions or city centre), cleanliness, and comfort. In Paris, guests stay near the Seine — within easy reach of the Eiffel Tower. In Switzerland, accommodation is in Lucerne's lakeside area. In Rome, hotels are located close to the Vatican or the Colosseum district. Rooms are on a twin-sharing basis as standard. Single supplement is available for solo travellers at an additional cost. All rooms include private bathroom, Wi-Fi, and daily breakfast. Hotel names are confirmed approximately 30 days before departure.",
      },
      {
        heading: 'How to Book',
        body: "To reserve your place on the PKK Executive Europe Tour, a deposit of 30% of the total package price is required at the time of booking. The remaining balance is due no later than 45 days before the departure date. Tour departure dates are available from October through April — the best season for European travel. Group size is limited to ensure a personal and comfortable experience, so early booking is strongly advised. To enquire about the next available departure, pricing, and availability, please contact PKK Myanmar Travels & Tours via phone, Facebook Messenger, or the enquiry form on our website. Our team will respond within one business day.",
      },
    ],
  },
  {
    id: 4,
    slug: 'travel-tips-first-time-international',
    title: '10 Travel Tips for First-Time International Travelers',
    excerpt:
      'Traveling abroad for the first time? These practical tips — from packing smart to managing currency — will make your journey smoother and stress-free.',
    category: 'Travel Tips',
    date: 'Apr 22, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        heading: 'Introduction',
        body: "Travelling internationally for the first time is one of the most exciting things you can do — but it can also feel overwhelming if you are not prepared. There are passports, visas, currency exchanges, airport terminals, luggage limits, and a hundred small details to keep track of. The good news is that almost every experienced traveller felt exactly the same way before their first trip, and once you have done it once, it becomes second nature. At PKK Myanmar Travels & Tours, we organise group tours for first-timers every season, and over the years we have collected the practical advice that makes the biggest difference. Here are ten tips that will help you travel confidently, comfortably, and without unnecessary stress.",
      },
      {
        heading: '1–3: Before You Fly',
        body: "Tip 1 — Apply for your passport and visa early. This is the single biggest mistake first-time travellers make: leaving documentation to the last minute. Passport processing in Myanmar can take several weeks, and visa applications for countries like Japan, Europe, or the US require additional time and documents. Aim to have everything ready at least two months before your planned departure. Tip 2 — Make copies of all your documents. Scan or photograph your passport, visa, travel insurance, flight tickets, and hotel bookings, and store copies in your email or cloud storage (Google Drive, for example). If your bag is lost or stolen, having digital copies will save enormous stress. Tip 3 — Notify your bank before you travel. Many banks will freeze your card if they see unexpected foreign transactions. Call your bank or update your travel settings in their app before you leave, and confirm that your card works for international withdrawals.",
      },
      {
        heading: '4–6: Packing Smart',
        body: "Tip 4 — Pack less than you think you need. First-time travellers almost always overpack. A good rule: lay out everything you plan to bring, then remove one-third of it. You can buy most things you forget at your destination, and a lighter bag makes airports and city walking dramatically more enjoyable. Tip 5 — Bring a universal travel adaptor. Different countries use different plug sockets. A small universal adaptor (available in Yangon markets for a few thousand kyat) means you can charge your phone and camera anywhere in the world. Tip 6 — Carry a small day bag. Your main luggage stays at the hotel; a lightweight backpack or tote bag is what you take out each day for your camera, water bottle, sunscreen, and documents. Keep your passport photocopy and emergency cash in this bag at all times.",
      },
      {
        heading: '7–8: Money & Currency',
        body: "Tip 7 — Understand the currency before you arrive. Research the currency of your destination country, the approximate exchange rate, and which daily costs you should budget for (meals, transport, entrance fees). In most countries you visit with PKK Myanmar, our tour price covers the major costs — but having local currency for personal shopping, tips, and incidentals is important. Exchange some money before departure at a reputable exchange counter in Yangon, and then exchange more at your destination airport or a local bank if needed. Tip 8 — Use ATMs wisely. International ATMs generally offer better exchange rates than airport money changers. Use bank-operated ATMs rather than standalone machines in tourist areas (which often charge higher fees). Withdraw a reasonable amount in one transaction to minimise withdrawal fees, and always keep some cash on you as a backup — not all smaller shops accept cards internationally.",
      },
      {
        heading: '9–10: At Your Destination',
        body: "Tip 9 — Download offline maps before you land. Google Maps allows you to download maps of entire cities for offline use. Before your flight lands, download the map of your destination so you can navigate without needing mobile data. This is particularly useful if you are in a country where SIM cards are hard to buy quickly at the airport. PKK group tours include local SIM cards or Wi-Fi devices for most destinations, but it is always good to have a backup. Tip 10 — Stay with your group and communicate with your guide. This might seem obvious, but in busy places like Tokyo's Shinjuku Station, European Christmas markets, or crowded temple sites, it is surprisingly easy to become separated from your group. Always keep your tour leader's mobile number saved on your phone, agree on a meeting point at the start of each day's excursion, and never wander off without letting someone know. Travelling with PKK Myanmar means you always have an experienced Burmese-speaking guide looking out for you — use that resource, and enjoy every moment of your journey.",
      },
    ],
  },
  {
    id: 5,
    slug: 'sri-lanka-pilgrimage',
    title: 'Sri Lanka Pilgrimage: Sacred Sites & Travel Essentials',
    excerpt:
      "The sacred Temple of the Tooth, Anuradhapura, and Polonnaruwa — discover the spiritual treasures of Sri Lanka on PKK's pilgrimage circuit.",
    category: 'Pilgrimage',
    date: 'Apr 10, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        heading: 'Introduction',
        body: "Sri Lanka — known in ancient texts as the island of Dhamma — holds an extraordinary place in the Buddhist world. It was to Sri Lanka that Emperor Ashoka's son, Mahinda, brought the teachings of the Buddha in the 3rd century BC, and the island has cherished and preserved those teachings ever since. Today, Sri Lanka is home to some of the most important and best-preserved Buddhist heritage sites in Asia, and for Myanmar Buddhists it is a deeply meaningful pilgrimage destination. PKK Myanmar Travels & Tours offers guided Sri Lanka pilgrimage tours that visit the island's most sacred places in comfort and with full cultural context.",
      },
      {
        heading: 'Temple of the Tooth (Kandy)',
        body: "The Sri Dalada Maligawa — the Temple of the Tooth Relic — in the hill city of Kandy is Sri Lanka's most revered Buddhist shrine and a UNESCO World Heritage Site. It is believed to house a tooth relic of the Buddha himself, brought to the island in the 4th century AD. The temple complex sits beside a serene lake, and the atmosphere — particularly during the evening puja (offering ceremony) when drummers and musicians perform and worshippers crowd the inner shrine — is deeply moving. The annual Esala Perahera festival (held in July–August) features the tooth relic paraded through the streets on the back of a decorated elephant, drawing hundreds of thousands of pilgrims and visitors. PKK tours to Kandy are timed to give pilgrims maximum time for prayer and reflection at the temple.",
      },
      {
        heading: 'Anuradhapura',
        body: "Anuradhapura, the ancient capital of Sri Lanka, is one of the oldest continuously inhabited cities in the world and the spiritual heartland of Theravada Buddhism. The city's most sacred site is the Sri Maha Bodhi — a fig tree grown from a cutting of the original Bodhi Tree under which the Buddha attained enlightenment. This tree, now over 2,300 years old, is believed to be the oldest living tree in the world with a recorded history, and it is an object of profound veneration for Buddhists everywhere. Nearby, the vast white dome of the Ruwanwelisaya Dagoba rises 91 metres into the sky — one of the great religious monuments of the ancient world. Pilgrims walking barefoot across the ancient stone precincts at dawn, offering flowers and incense at the sacred Bodhi Tree, experience a stillness and reverence that is hard to describe.",
      },
      {
        heading: 'Polonnaruwa',
        body: "The medieval city of Polonnaruwa served as the second capital of Sri Lanka and reached its golden age in the 12th century under King Parakramabahu I. Today its ruins — also a UNESCO World Heritage Site — spread across a wide parkland that is best explored by bicycle or tuk-tuk. The Gal Vihara is the highlight of any visit: four magnificent Buddha images carved directly into a single slab of granite, including a 15-metre reclining Parinirvana Buddha of serene beauty. The surrounding ruins of royal palaces, council chambers, and ancient irrigation tanks give a powerful sense of the sophistication and devotion of this ancient Buddhist kingdom.",
      },
      {
        heading: 'Travel Essentials',
        body: "Myanmar citizens require an ETA (Electronic Travel Authorisation) to visit Sri Lanka, which can be applied for online through the official Sri Lanka ETA portal. The process is straightforward and typically takes 24–48 hours to be approved. Flights from Yangon to Colombo (CMB) operate via Bangkok or Singapore, with a total travel time of approximately 5–8 hours depending on the connection. The best time to visit Sri Lanka's Cultural Triangle (Kandy, Anuradhapura, Polonnaruwa) is from May to September, when the northwest of the island enjoys dry weather. Our pilgrimage packages typically run for 5 to 7 nights and include all flights, hotel accommodation, meals, entrance fees to heritage sites, transfers, and a Burmese-speaking guide. Contact PKK Myanmar for our next available Sri Lanka pilgrimage departure.",
      },
    ],
  },
  {
    id: 6,
    slug: 'singapore-family-itinerary',
    title: 'Singapore in 4 Nights: The Perfect Family Itinerary',
    excerpt:
      "Gardens by the Bay, Sentosa Island, Universal Studios — here's how to make the most of 4 nights in Singapore with kids or family in tow.",
    category: 'Tour Packages',
    date: 'Mar 30, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        heading: 'Overview',
        body: "Singapore is one of Southeast Asia's most beloved family travel destinations — and with good reason. Clean, safe, bilingual, and packed with world-class attractions, it is a city that genuinely caters to every age. Children are captivated by Universal Studios, S.E.A. Aquarium, and the fantasy landscapes of Gardens by the Bay. Adults enjoy the food, the architecture, the shopping, and the sheer pleasure of a city that simply works. And for families travelling together from Myanmar, Singapore has the added advantage of being a short direct flight away, with no visa required. PKK Myanmar's 4 Night / 5 Day Singapore package is designed to pack in the best of the city without ever feeling rushed.",
      },
      {
        heading: 'Day 1: Arrival & Marina Bay',
        body: "After landing at Changi Airport — consistently rated the world's best airport — and checking in to your hotel, the evening is spent in the spectacular Marina Bay precinct. Marina Bay Sands is the unmistakable centrepiece: a three-tower hotel topped by an infinity pool and the Sands SkyPark observation deck, which offers what is arguably the finest city view in Asia. Across the water, the illuminated Supertrees of Gardens by the Bay glow against the night sky during the Garden Rhapsody light and sound show (free, held at 7:45 pm and 8:45 pm daily). The area around Marina Bay is also home to excellent food options at Lau Pa Sat hawker centre, where families can sample local Singapore dishes — laksa, char kway teow, satay — at very reasonable prices.",
      },
      {
        heading: 'Day 2: Sentosa Island & Universal Studios',
        body: "Day two is dedicated entirely to Sentosa Island — Singapore's resort island connected to the main city by cable car, monorail, or a short walk across a bridge. The highlight for most families is Universal Studios Singapore, which features rides and zones based on Transformers, Jurassic Park, Shrek, Minions, and more. Arrive at opening time (10 am) to beat the queues on the most popular rides. After Universal Studios, the family can explore the beach clubs and seafood restaurants along Sentosa's southern coast before taking the cable car back to the city at sunset — offering gorgeous panoramic views over the harbour and the evening skyline.",
      },
      {
        heading: 'Day 3: Gardens by the Bay & Shopping',
        body: "The morning begins with a proper visit to Gardens by the Bay in daylight — time to walk through the Cloud Forest (a dramatic indoor mountain covered in tropical plants, with a stunning waterfall at its heart) and the Flower Dome (a vast glass greenhouse containing flowers from around the world). After lunch, the afternoon is free for shopping. Orchard Road — Singapore's famous shopping street — is the traditional go-to, with malls including ION Orchard, Paragon, and Ngee Ann City offering everything from international luxury brands to affordable local fashion. For a more characterful shopping experience, visit the shophouses and boutiques of Haji Lane in the Arab Quarter or the antiques and treasures along Chinatown's Pagoda Street.",
      },
      {
        heading: 'Day 4: Departure',
        body: "Depending on your flight time, the final morning can be spent at the hotel's pool or making one last visit to a favourite spot — perhaps a hawker centre breakfast at Maxwell Food Centre or one final stroll along the waterfront. Changi Airport is worth arriving at early: the airport itself is a destination, home to the Jewel Changi — a vast glass dome containing a 40-metre indoor waterfall, lush gardens, and over 280 shops and restaurants. It is the perfect place to wait for your flight home, pick up last-minute gifts, and reflect on a wonderful family trip. PKK Myanmar's Singapore package includes return flights from Yangon, 4 nights in a centrally located hotel, daily breakfast, all airport-to-hotel transfers, and the services of a Burmese-speaking tour coordinator. Contact us today to book your family's Singapore adventure.",
      },
    ],
  },
];
 
export const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Travel Tips': 'bg-blue-50 text-blue-700',
  Destinations: 'bg-amber-50 text-amber-700',
  'Tour Packages': 'bg-emerald-50 text-emerald-700',
  Pilgrimage: 'bg-purple-50 text-purple-700',
};
