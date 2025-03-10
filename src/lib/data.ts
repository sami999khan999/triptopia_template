export const NavLinkData = [
  {
    name: "Home",
    items: [
      {
        name: "About Us",
        path: "/#about",
      },
      {
        name: "Destinations",
        path: "/#destinations",
      },
      {
        name: "Our Team",
        path: "/#ourTeam",
      },
      {
        name: "Get To Know Us",
        path: "/#getToKnowUs",
      },
      {
        name: "Popular Tour",
        path: "/#popularTour",
      },
      {
        name: "Top Travel Hotspots",
        path: "/#topTravelHotspot",
      },
      {
        name: "Trending Destinations",
        path: "/#trendingDestinations",
      },
      {
        name: "Testimonial",
        path: "/#testimonial",
      },
      {
        name: "FAQ",
        path: "/#faq",
      },
      {
        name: "Blog",
        path: "/#blog",
      },
    ],
  },
  {
    name: "Blog",
    items: [
      {
        name: "Latest News",
        path: "/blog",
      },
    ],
  },
  {
    name: "Destinations",
    items: [
      {
        name: "Popular Destinations",
        path: "/destinations",
      },
    ],
  },
  {
    name: "Pages",
    items: [
      {
        name: "Blog",
        path: "/blog",
      },
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "FAQ",
        path: "/faq",
      },
    ],
  },
];

export const searchParamsData = {
  searchType: ["tour", "hotels", "tickets", "rental", "activities"],
  location: [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Miami",
    "Las Vegas",
    "Orlando",
    "Seattle",
    "Boston",
    "Houston",
    "San Diego",
    "Denver",
    "Dallas",
    "Washington D.C.",
    "Phoenix",
  ],
  checkIn: [
    "2025-03-10",
    "2025-03-15",
    "2025-04-01",
    "2025-04-10",
    "2025-05-05",
    "2025-06-20",
    "2025-07-01",
    "2025-08-15",
    "2025-09-10",
    "2025-10-25",
  ],
  checkOut: [
    "2025-03-12",
    "2025-03-18",
    "2025-04-05",
    "2025-04-15",
    "2025-05-10",
    "2025-06-25",
    "2025-07-07",
    "2025-08-20",
    "2025-09-15",
    "2025-10-30",
  ],
  guests: [
    "1 adult",
    "2 adults",
    "2 adults, 1 child",
    "2 adults, 2 children",
    "3 adults",
    "Family (2 adults, 3 children)",
    "Group (4+ people)",
    "Corporate (Business Trip)",
    "Solo Traveler",
    "Honeymoon Couple",
  ],
};

export const topDestinationData = [
  {
    name: "Batu, East Java",
    destinationCount: 86,
    image: "/destination.png",
  },
  {
    name: "Ubud, Bali",
    destinationCount: 120,
    image: "/destination.png",
  },
  {
    name: "Kyoto, Japan",
    destinationCount: 95,
    image: "/destination.png",
  },
  {
    name: "Santorini, Greece",
    destinationCount: 78,
    image: "/destination.png",
  },
  {
    name: "Paris, France",
    destinationCount: 150,
    image: "/destination.png",
  },
  {
    name: "Maui, Hawaii",
    destinationCount: 102,
    image: "/destination.png",
  },
  {
    name: "Queenstown, New Zealand",
    destinationCount: 88,
    image: "/destination.png",
  },
  {
    name: "Cape Town, South Africa",
    destinationCount: 110,
    image: "/destination.png",
  },
];

export const outTeamData = [
  {
    name: "John Doe",
    position: "Web Developer",
    image: "/team-momber.png",
  },
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    image: "/team-momber.png",
  },
  {
    name: "Michael Johnson",
    position: "Project Manager",
    image: "/team-momber.png",
  },
];

export const getToKnowUsData = [
  {
    title: "Luxury Trip",
    description:
      "Our algorithm connects you with like minded partners using your interests.",
    image: "/getToKnow/luxury-trip.png",
  },
  {
    title: "Affordable Budget",
    description:
      "Your safety is a priority. We ensure strict security for your information.",
    image: "/getToKnow/affordable-budget.png",
  },
  {
    title: "Personalized approach",
    description:
      "Effortlessly navigate and find your perfect match with our user-friendly interface.",
    image: "/getToKnow/personalized-approach.png",
  },
  {
    title: "Experienced Guide",
    description:
      "Our team is available 24/7 to assist you with any queries or concern.",
    image: "/getToKnow/experienced-guide.png",
  },
];

export const popularTourData = [
  {
    title: "Experience Ottoman Empire and Vibrant Culture",
    location: "California",
    price: 150,
    stars: 5,
    reviews: 32,
    image: "/popular-tour-card.png",
  },
  {
    title: "Explore the Ancient Wonders of Rome",
    location: "Italy",
    price: 200,
    stars: 4.8,
    reviews: 45,
    image: "/popular-tour-card.png",
  },
  {
    title: "Tropical Paradise Adventure in Bali",
    location: "Indonesia",
    price: 180,
    stars: 4.9,
    reviews: 60,
    image: "/popular-tour-card.png",
  },
  {
    title: "Northern Lights Expedition in Iceland",
    location: "Iceland",
    price: 300,
    stars: 5,
    reviews: 25,
    image: "/popular-tour-card.png",
  },
  {
    title: "Safari and Wildlife Tour in Kenya",
    location: "Kenya",
    price: 250,
    stars: 4.7,
    reviews: 38,
    image: "/popular-tour-card.png",
  },
  {
    title: "Discover the Mysteries of Machu Picchu",
    location: "Peru",
    price: 220,
    stars: 4.9,
    reviews: 50,
    image: "/popular-tour-card.png",
  },
];

export const popularTureCategory = [
  {
    name: "Day Long Tour",
  },
  {
    name: "Adventure Trip",
  },
  {
    name: "Group Tour",
  },
  {
    name: "Solo tour",
  },
];

export const trendingDestinations = [
  {
    title: "Manila",
    stars: 5,
    ratings: 22,
    price: 150,
    image: "/trending-destination.png",
  },
  {
    title: "Paris",
    stars: 5,
    ratings: 120,
    price: 300,
    image: "/trending-destination.png",
  },
  {
    title: "Tokyo",
    stars: 4,
    ratings: 95,
    price: 280,
    image: "/trending-destination.png",
  },
  {
    title: "New York",
    stars: 5,
    ratings: 85,
    price: 350,
    image: "/trending-destination.png",
  },
  {
    title: "Bangkok",
    stars: 4,
    ratings: 60,
    price: 180,
    image: "/trending-destination.png",
  },
  {
    title: "Dubai",
    stars: 5,
    ratings: 200,
    price: 400,
    image: "/trending-destination.png",
  },
  {
    title: "Sydney",
    stars: 4,
    ratings: 75,
    price: 320,
    image: "/trending-destination.png",
  },
  {
    title: "London",
    stars: 5,
    ratings: 140,
    price: 310,
    image: "/trending-destination.png",
  },
  {
    title: "Rome",
    stars: 4,
    ratings: 90,
    price: 250,
    image: "/trending-destination.png",
  },
];

export const testimonialData = [
  {
    name: "Berk Arisoy",
    position: "Product Designer",
    testimonial:
      "I can't thank Triptopia enough for helping me find love! Initially, I was hesitant about online dating, but this platform changed my perspective entirely. The user-friendly interface, personalized matches, and the welcoming community made me feel at ease from the very beginning.",
    image: "/testimonial.png",
  },
  {
    name: "Emma Collins",
    position: "Marketing Specialist",
    testimonial:
      "Triptopia made dating so much easier! The matchmaking algorithm is spot on, and I met someone who shares my interests and values. Highly recommend it for anyone looking for meaningful connections.",
    image: "/testimonial.png",
  },
  {
    name: "David Lee",
    position: "Software Engineer",
    testimonial:
      "I've tried multiple dating platforms, but Triptopia stands out. The profiles are genuine, and the app's design makes conversations flow naturally. I met my partner here, and we couldn’t be happier!",
    image: "/testimonial.png",
  },
  {
    name: "Sophia Martinez",
    position: "Entrepreneur",
    testimonial:
      "At first, I was skeptical about online dating, but Triptopia's community is different. It feels safe, and the support team is always helpful. I found love, and I’m forever grateful!",
    image: "/testimonial.png",
  },
  {
    name: "James Anderson",
    position: "Photographer",
    testimonial:
      "Triptopia is a game-changer! The detailed profiles and compatibility insights helped me connect with someone truly special. It’s not just another dating app; it’s an experience worth trying.",
    image: "/testimonial.png",
  },
];

export const faqData = [
  {
    id: 1,
    question: "What destinations do you offer tours to?",
    answer:
      "We offer tours to a variety of destinations worldwide, including Europe, Asia, North America, and exotic locations like the Maldives and Bali.",
  },
  {
    id: 2,
    question: "What types of service do you provide?",
    answer:
      "Triptopia provides travel planning, guided tours, custom vacation packages, hotel bookings, and transportation arrangements.",
  },
  {
    id: 3,
    question: "What is included in the tour package?",
    answer:
      "Our tour packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions may vary based on the package selected.",
  },
  {
    id: 4,
    question: "What should I pack for my trip?",
    answer:
      "It depends on the destination and season. We recommend packing comfortable clothing, travel essentials, necessary documents, and any specific items needed for activities like hiking or beach trips.",
  },
];

export const blogFeedData = [
  {
    id: 1,
    title: "Tracing Ancient Ruins and Roman Relics",
    type: "Solo Travel",
    date: "03 Aug",
    author: "Robert Fox",
    image: "/blog.png",
    authorImage: "/blog-author.png",
  },
  {
    id: 2,
    title: "Honoring History in the Land of Heroes",
    type: "Cody Fisher",
    date: "03 Aug",
    author: "Cody Fisher",
    image: "/blog.png",
    authorImage: "/blog-author.png",
  },
  {
    id: 3,
    title: "Witnessing Sunrise Amongst the Statues",
    type: "Group Tour",
    date: "03 Aug",
    author: "Jerome Bell",
    image: "/blog.png",
    authorImage: "/blog.png",
  },
];

export const BlogCategory = [
  {
    id: 1,
    name: "Destination Guides",
  },
  {
    id: 2,
    name: "Travel Tips and Hacks",
  },
  {
    id: 3,
    name: "Cultural Immersion",
  },
  {
    id: 4,
    name: "Responsible Travel",
  },
  {
    id: 5,
    name: "Business",
  },
  {
    id: 6,
    name: "Entertainment",
  },
];

export const BlogData = [
  {
    id: 1,
    title: "Soaking in the Natural Thermal Springs and Cotton Castle Terraces",
    image: "/blog.png",
    sectionHeading: {
      title: "The Beauty of Pamukkale",
      paragraphs: [
        "Pamukkale, located in Turkey, is renowned for its stunning white terraces formed by calcium-rich thermal waters. The cascading pools create a mesmerizing sight that looks like a frozen waterfall, earning it the name 'Cotton Castle.'",
        "The site is a UNESCO World Heritage destination, attracting thousands of tourists each year. Visitors flock to this natural wonder to witness its ethereal beauty and experience the healing properties of its mineral-rich waters.",
      ],
    },
    sectionBody: {
      title: "A Natural Wonder",
      paragraphs: [
        "Visitors can enjoy warm thermal pools that have been used for relaxation and healing for centuries. These waters contain high levels of minerals that are believed to have therapeutic benefits, making it a popular destination for wellness seekers.",
        "The mineral deposits create an otherworldly landscape that is both breathtaking and serene. Walking barefoot on the travertine terraces while soaking in the panoramic views of the valley below is an unforgettable experience.",
      ],
    },
    sectionFooter: {
      title: "Things to Do in Pamukkale",
      paragraphs: [
        "Explore the ancient city of Hierapolis, which sits above the terraces. This Greco-Roman city boasts well-preserved ruins, including an amphitheater, necropolis, and ancient baths, offering a glimpse into the past.",
        "Take a dip in the Cleopatra Pool, a historical hot spring where you can swim among ancient ruins. The legend says that the Egyptian queen herself once bathed in these warm, mineral-rich waters, which are believed to have rejuvenating properties.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "A trip to Pamukkale offers both natural beauty and historical richness, making it a must-visit destination. Whether you're seeking relaxation, history, or adventure, this breathtaking location has something for everyone.",
    },
    tags: ["Nature", "Travel", "Turkey"],
    date: "2024-03-10",
    category: "Destination Guides",
    comments: [1, 4, 2, 6],
    shares: "1.3k",
  },
  {
    id: 2,
    title: "Exploring the Ancient Ruins of Machu Picchu",
    image: "/blog.png",
    sectionHeading: {
      title: "Mystery of the Incas",
      paragraphs: [
        "Machu Picchu, nestled high in the Peruvian Andes, is an archaeological marvel that offers a glimpse into the sophisticated Inca civilization.",
        "This ancient citadel, shrouded in mist and surrounded by lush greenery, continues to intrigue travelers and historians alike.",
      ],
    },
    sectionBody: {
      title: "Journey Through History",
      paragraphs: [
        "Wander through terraced fields and stone structures that have withstood centuries. The panoramic views of the surrounding mountains make the trek as rewarding as the destination itself.",
        "Every corner of Machu Picchu tells a story of ingenuity, spirituality, and the harmonious relationship between nature and architecture.",
      ],
    },
    sectionFooter: {
      title: "Experiences Not to Miss",
      paragraphs: [
        "Hike the Inca Trail for a multi-day adventure or take the bus from Aguas Calientes to the site. Don't forget to visit the Temple of the Sun and the Room of the Three Windows.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Machu Picchu is more than a destination; it’s a journey back in time that offers awe-inspiring landscapes and a deep connection with ancient history.",
    },
    tags: ["History", "Travel", "Peru"],
    date: "2024-03-11",
    category: "Travel Tips and Hacks",
    comments: [5, 2, 3],
    shares: "2.1k",
  },
  {
    id: 3,
    title: "A Journey Through the Vibrant Streets of Marrakech",
    image: "/blog.png",
    sectionHeading: {
      title: "The Heart of Morocco",
      paragraphs: [
        "Marrakech is a city bursting with color, where ancient traditions blend seamlessly with modern energy.",
        "The vibrant souks, fragrant spices, and lively street performances create an unforgettable urban tapestry.",
      ],
    },
    sectionBody: {
      title: "Exploring the Medina",
      paragraphs: [
        "Wander the labyrinthine alleys of the medina to uncover hidden courtyards and traditional artisan shops.",
        "Every twist and turn reveals new surprises, from bustling markets to serene riads tucked away from the crowds.",
      ],
    },
    sectionFooter: {
      title: "Local Experiences",
      paragraphs: [
        "Indulge in traditional Moroccan cuisine, relax in a centuries-old hammam, and enjoy the sensory delights of street food vendors.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Marrakech offers an immersive experience that engages all the senses, making it a top destination for cultural explorers.",
    },
    tags: ["Culture", "Travel", "Morocco"],
    date: "2024-03-12",
    category: "Cultural Immersion",
    comments: [4, 7, 1],
    shares: "1.8k",
  },
  {
    id: 4,
    title: "Chasing the Northern Lights in Iceland",
    image: "/blog.png",
    sectionHeading: {
      title: "Nature's Light Show",
      paragraphs: [
        "Iceland's rugged landscapes and clear, dark skies create the perfect backdrop for witnessing the ethereal aurora borealis.",
        "This natural light display captivates visitors with its ever-changing colors and mesmerizing motion.",
      ],
    },
    sectionBody: {
      title: "Under the Arctic Sky",
      paragraphs: [
        "Bundle up and venture into the remote wilderness where the Northern Lights dance overhead.",
        "Local guides offer unforgettable tours that combine adventure with insights into Icelandic folklore.",
      ],
    },
    sectionFooter: {
      title: "Things to Do",
      paragraphs: [
        "After the light show, unwind in geothermal spas, explore ice caves, or take a scenic drive along the rugged coast.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "A trip to Iceland promises a magical encounter with nature’s most spectacular phenomena, making it a must-see destination for adventurers.",
    },
    tags: ["Nature", "Travel", "Iceland"],
    date: "2024-03-13",
    category: "Responsible Travel",
    comments: [2, 8, 3],
    shares: "2.5k",
  },
  {
    id: 5,
    title: "Sailing the Greek Islands: A Mediterranean Adventure",
    image: "/blog.png",
    sectionHeading: {
      title: "The Charm of the Aegean",
      paragraphs: [
        "The Greek Islands offer a perfect escape with their crystal-clear waters, charming villages, and ancient ruins.",
        "Each island has its own unique flavor, blending mythology, culture, and natural beauty.",
      ],
    },
    sectionBody: {
      title: "Island Hopping",
      paragraphs: [
        "Set sail between islands to experience idyllic beaches, scenic harbors, and vibrant local traditions.",
        "Enjoy fresh seafood, sunset views, and the relaxed pace of island life.",
      ],
    },
    sectionFooter: {
      title: "What to Explore",
      paragraphs: [
        "Visit Santorini for its iconic sunsets, Mykonos for its lively nightlife, and Crete for its historical sites.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Sailing the Greek Islands offers a harmonious blend of leisure, adventure, and cultural immersion in one of the Mediterranean's most picturesque settings.",
    },
    tags: ["Mediterranean", "Travel", "Greece"],
    date: "2024-03-14",
    category: "Business",
    comments: [7, 4, 6],
    shares: "3.0k",
  },
  {
    id: 6,
    title: "Discovering the Mystical Temples of Angkor Wat",
    image: "/blog.png",
    sectionHeading: {
      title: "Ancient Wonders",
      paragraphs: [
        "Angkor Wat is a vast temple complex in Cambodia that embodies the grandeur of the Khmer Empire.",
        "Its intricate carvings and sprawling layout make it one of the most important archaeological sites in Southeast Asia.",
      ],
    },
    sectionBody: {
      title: "The Heart of Khmer Architecture",
      paragraphs: [
        "Explore towering temples and serene ponds surrounded by lush jungle, each structure telling its own story.",
        "The balance between nature and architecture here is both humbling and inspiring.",
      ],
    },
    sectionFooter: {
      title: "Visitor Tips",
      paragraphs: [
        "Arrive early to catch the sunrise, and consider hiring a knowledgeable guide to uncover the temple's hidden details.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Angkor Wat is a profound encounter with history and spirituality, offering visitors a deep connection with an ancient world.",
    },
    tags: ["History", "Culture", "Cambodia"],
    date: "2024-03-15",
    category: "Entertainment",
    comments: [9, 3, 2],
    shares: "2.7k",
  },
  {
    id: 7,
    title: "The Urban Oasis: A Guide to New York City’s Hidden Gems",
    image: "/blog.png",
    sectionHeading: {
      title: "Beyond the Skyline",
      paragraphs: [
        "New York City is famous for its towering skyscrapers, yet its true charm lies in the undiscovered corners of its diverse neighborhoods.",
        "From secluded gardens to underground art scenes, the city is a mosaic of contrasting experiences.",
      ],
    },
    sectionBody: {
      title: "Discovering Local Treasures",
      paragraphs: [
        "Explore quaint cafes, hidden bookstores, and local art galleries that capture the essence of New York’s creative spirit.",
        "Each neighborhood offers a unique story waiting to be discovered by the curious traveler.",
      ],
    },
    sectionFooter: {
      title: "Insider Tips",
      paragraphs: [
        "Skip the tourist traps and dive into community events, pop-up markets, and street performances that bring the city to life.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "New York City is a vibrant urban playground that rewards those willing to venture off the beaten path.",
    },
    tags: ["Urban", "Travel", "USA"],
    date: "2024-03-16",
    category: "Destination Guides",
    comments: [5, 4, 1],
    shares: "3.2k",
  },
  {
    id: 8,
    title: "A Trek Through the Amazon Rainforest",
    image: "/blog.png",
    sectionHeading: {
      title: "Into the Wild",
      paragraphs: [
        "The Amazon Rainforest spans multiple countries and is home to an unmatched diversity of life.",
        "Its dense canopy and winding rivers create an environment where nature thrives in its most raw form.",
      ],
    },
    sectionBody: {
      title: "A Journey of Discovery",
      paragraphs: [
        "Embark on guided treks that reveal the secrets of the jungle, from exotic wildlife to rare plant species.",
        "Learn from local experts about the intricate balance of this vibrant ecosystem.",
      ],
    },
    sectionFooter: {
      title: "Adventure Awaits",
      paragraphs: [
        "Experience night safaris, river cruises, and immersive cultural encounters with indigenous communities.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "A trek through the Amazon is not just an adventure; it’s a profound connection with one of Earth’s most vital ecosystems.",
    },
    tags: ["Nature", "Adventure", "South America"],
    date: "2024-03-17",
    category: "Travel Tips and Hacks",
    comments: [3, 6, 2],
    shares: "1.9k",
  },
  {
    id: 9,
    title: "The Splendor of the Swiss Alps: Hiking and Adventure",
    image: "/blog.png",
    sectionHeading: {
      title: "Majestic Peaks",
      paragraphs: [
        "The Swiss Alps captivate visitors with their dramatic mountain ranges, pristine valleys, and charming alpine villages.",
        "This iconic landscape is a playground for outdoor enthusiasts seeking both thrill and serenity.",
      ],
    },
    sectionBody: {
      title: "Hiking Trails",
      paragraphs: [
        "Discover a network of trails that wind through verdant meadows and up to panoramic summits.",
        "Each path offers breathtaking views and a unique connection with nature.",
      ],
    },
    sectionFooter: {
      title: "Outdoor Activities",
      paragraphs: [
        "From skiing in winter to hiking in summer, the Alps provide year-round adventure and relaxation opportunities.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Whether you’re an adrenaline junkie or simply looking to unwind, the Swiss Alps promise an unforgettable escape into nature.",
    },
    tags: ["Hiking", "Nature", "Switzerland"],
    date: "2024-03-18",
    category: "Cultural Immersion",
    comments: [4, 5, 3],
    shares: "2.8k",
  },
  {
    id: 10,
    title: "Island Hopping in Thailand: Beaches, Culture, and Cuisine",
    image: "/blog.png",
    sectionHeading: {
      title: "Tropical Paradise",
      paragraphs: [
        "Thailand's islands offer an idyllic retreat with their white-sand beaches, clear waters, and rich cultural traditions.",
        "Each island has its own unique vibe—from lively party scenes to serene escapes.",
      ],
    },
    sectionBody: {
      title: "Explore Diverse Islands",
      paragraphs: [
        "Travel from the bustling energy of Phuket to the tranquil charm of Koh Samui and the untouched beauty of Koh Lipe.",
        "Every island presents a different facet of Thailand’s natural and cultural allure.",
      ],
    },
    sectionFooter: {
      title: "Local Adventures",
      paragraphs: [
        "Dive into snorkeling adventures, savor street food delicacies, and visit ancient temples along the coast.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Island hopping in Thailand blends relaxation with adventure, offering travelers a vibrant taste of Southeast Asia.",
    },
    tags: ["Beaches", "Travel", "Asia"],
    date: "2024-03-19",
    category: "Responsible Travel ",
    comments: [6, 3, 5],
    shares: "3.5k",
  },
  {
    id: 11,
    title: "Experiencing the Rich History of Rome",
    image: "/blog.png",
    sectionHeading: {
      title: "Eternal City",
      paragraphs: [
        "Rome is a living museum where ancient ruins and modern life coexist harmoniously.",
        "The city’s cobbled streets, historic monuments, and vibrant piazzas exude timeless charm.",
      ],
    },
    sectionBody: {
      title: "Walking Through Time",
      paragraphs: [
        "Explore landmarks such as the Colosseum, Roman Forum, and Pantheon to immerse yourself in history.",
        "Every stone and column tells a story of a civilization that has shaped the modern world.",
      ],
    },
    sectionFooter: {
      title: "Historical Highlights",
      paragraphs: [
        "Don’t miss the Vatican Museums, the Trevi Fountain, and savoring authentic Italian cuisine at a local trattoria.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Rome offers a journey through time where history, art, and culture converge to create an unforgettable experience.",
    },
    tags: ["History", "Travel", "Italy"],
    date: "2024-03-20",
    category: "Business",
    comments: [7, 2, 4],
    shares: "2.6k",
  },
  {
    id: 12,
    title: "Wildlife Safari in the Serengeti",
    image: "/blog.png",
    sectionHeading: {
      title: "The Great Migration",
      paragraphs: [
        "The Serengeti in Tanzania is synonymous with wildlife, where nature’s spectacle unfolds across vast savannas.",
        "Witness the annual migration and observe the majestic big cats in their natural habitat.",
      ],
    },
    sectionBody: {
      title: "Into the Wild",
      paragraphs: [
        "Join expert-led safaris that offer close encounters with elephants, lions, and zebras roaming freely.",
        "The expansive plains and dramatic landscapes create a setting unlike any other.",
      ],
    },
    sectionFooter: {
      title: "Safari Highlights",
      paragraphs: [
        "Opt for a camping experience under the starlit sky, and explore the region’s diverse ecosystems with seasoned guides.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "A wildlife safari in the Serengeti is a life-changing adventure, connecting you with nature’s raw beauty and timeless rhythms.",
    },
    tags: ["Wildlife", "Travel", "Africa"],
    date: "2024-03-21",
    category: "Entertainment",
    comments: [5, 6, 3],
    shares: "3.1k",
  },
  {
    id: 13,
    title: "The Enchanting Charm of Paris: Beyond the Eiffel Tower",
    image: "/blog.png",
    sectionHeading: {
      title: "City of Lights",
      paragraphs: [
        "Paris is renowned for its iconic landmarks, yet its true magic lies in the charming streets and hidden courtyards.",
        "From quaint cafes to intimate art galleries, the city offers endless delights beyond its famous attractions.",
      ],
    },
    sectionBody: {
      title: "Local Delights",
      paragraphs: [
        "Stroll along the Seine, explore vibrant markets, and experience the unique rhythm of Parisian life.",
        "Every neighborhood has a story to tell, inviting you to discover its secrets at your own pace.",
      ],
    },
    sectionFooter: {
      title: "Must-See Spots",
      paragraphs: [
        "Visit Montmartre, the Latin Quarter, and savor gourmet dishes at local bistros to truly experience the Parisian lifestyle.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Paris captivates with its blend of history, art, and romance, promising an experience that lingers in your memory long after you leave.",
    },
    tags: ["Romance", "Travel", "France"],
    date: "2024-03-22",
    category: "Destination Guides",
    comments: [3, 5, 1],
    shares: "2.9k",
  },
  {
    id: 14,
    title: "A Cultural Journey through Kyoto, Japan",
    image: "/blog.png",
    sectionHeading: {
      title: "Traditional Elegance",
      paragraphs: [
        "Kyoto, the former imperial capital of Japan, is a city where time seems to stand still.",
        "Its ancient temples, serene gardens, and traditional tea houses evoke a deep sense of history and tranquility.",
      ],
    },
    sectionBody: {
      title: "Timeless Traditions",
      paragraphs: [
        "Explore the city's many shrines and temples, and participate in tea ceremonies that reflect centuries-old customs.",
        "The harmony between nature and tradition in Kyoto creates a peaceful and reflective atmosphere.",
      ],
    },
    sectionFooter: {
      title: "Cultural Experiences",
      paragraphs: [
        "Attend seasonal festivals, wander through historic districts, and indulge in authentic Japanese cuisine.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Kyoto is a living canvas of Japan's cultural heritage, offering a serene escape into a world where tradition reigns supreme.",
    },
    tags: ["Culture", "Travel", "Japan"],
    date: "2024-03-23",
    category: "Travel Tips and Hacks",
    comments: [4, 6, 2],
    shares: "3.3k",
  },
  {
    id: 15,
    title: "Road Tripping Across the American Southwest",
    image: "/blog.png",
    sectionHeading: {
      title: "Desert Landscapes",
      paragraphs: [
        "The American Southwest boasts dramatic desert vistas, red rock formations, and expansive canyons that stir the soul.",
        "A road trip through this region promises scenic highways and unforgettable natural wonders.",
      ],
    },
    sectionBody: {
      title: "Epic Road Trip",
      paragraphs: [
        "Cruise along winding roads that lead to national parks and historic landmarks, each stop offering a unique adventure.",
        "The vast, open spaces and rugged terrain create a sense of freedom that is hard to find elsewhere.",
      ],
    },
    sectionFooter: {
      title: "Adventure Itinerary",
      paragraphs: [
        "Explore the Grand Canyon, Monument Valley, and Zion National Park to experience nature at its most majestic.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "A road trip across the American Southwest is an exploration of raw beauty and cultural heritage, ideal for those with a spirit of adventure.",
    },
    tags: ["Adventure", "Travel", "USA"],
    date: "2024-03-24",
    category: "Cultural Immersion",
    comments: [6, 2, 5],
    shares: "3.4k",
  },
  {
    id: 16,
    title: "Exploring the Fjords of Norway",
    image: "/blog.png",
    sectionHeading: {
      title: "Majestic Fjords",
      paragraphs: [
        "Norway’s fjords are nature’s masterpieces, where towering cliffs and deep blue waters create a scene of unparalleled beauty.",
        "The serene landscapes and cascading waterfalls make it a dream destination for nature lovers.",
      ],
    },
    sectionBody: {
      title: "Nature's Masterpiece",
      paragraphs: [
        "Cruise along the fjords to experience dramatic vistas, and hike through trails that reveal secret waterfalls and panoramic views.",
        "Each moment in this rugged landscape offers a profound connection with nature.",
      ],
    },
    sectionFooter: {
      title: "Scenic Highlights",
      paragraphs: [
        "Join a boat tour, capture stunning photographs, and explore the quaint villages dotting the fjord edges.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Norway’s fjords offer an escape into a world of natural splendor and tranquility, perfect for both adventurers and relaxation seekers.",
    },
    tags: ["Nature", "Travel", "Norway"],
    date: "2024-03-25",
    category: "Responsible Travel",
    comments: [5, 3, 4],
    shares: "2.4k",
  },
  {
    id: 17,
    title: "Unwinding in Bali: A Spiritual Retreat",
    image: "/blog.png",
    sectionHeading: {
      title: "Island of the Gods",
      paragraphs: [
        "Bali is a tropical paradise celebrated for its lush landscapes, vibrant culture, and deep spiritual traditions.",
        "The island offers a serene escape where nature and spirituality blend seamlessly.",
      ],
    },
    sectionBody: {
      title: "Wellness and Serenity",
      paragraphs: [
        "Participate in yoga retreats, experience traditional healing practices, and relax on tranquil beaches.",
        "The island’s natural beauty and cultural depth create a rejuvenating atmosphere for the soul.",
      ],
    },
    sectionFooter: {
      title: "Relaxation and Adventure",
      paragraphs: [
        "Explore ancient temples, stroll through verdant rice terraces, and savor the rich flavors of Balinese cuisine.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Bali is the perfect destination for those seeking a harmonious blend of relaxation, spirituality, and cultural exploration.",
    },
    tags: ["Wellness", "Travel", "Indonesia"],
    date: "2024-03-26",
    category: "Business",
    comments: [4, 7, 3],
    shares: "3.6k",
  },
  {
    id: 18,
    title: "The Colorful Markets of Istanbul",
    image: "/blog.png",
    sectionHeading: {
      title: "Cultural Crossroads",
      paragraphs: [
        "Istanbul is a city where East meets West, renowned for its vibrant bazaars and rich cultural tapestry.",
        "The bustling markets offer a sensory journey through spices, textiles, and ancient traditions.",
      ],
    },
    sectionBody: {
      title: "Bazaar Adventures",
      paragraphs: [
        "Meander through centuries-old bazaars and discover treasures ranging from handcrafted ceramics to intricate jewelry.",
        "The dynamic energy of the markets reflects Istanbul’s unique blend of history and modernity.",
      ],
    },
    sectionFooter: {
      title: "Local Flavors",
      paragraphs: [
        "Taste authentic Turkish delights, sip traditional tea, and engage with local artisans to truly feel the pulse of the city.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Istanbul’s markets are a vibrant gateway into the city’s soul, offering both historical insights and contemporary experiences.",
    },
    tags: ["Culture", "Travel", "Turkey"],
    date: "2024-03-27",
    category: "Entertainment",
    comments: [3, 5, 2],
    shares: "2.2k",
  },
  {
    id: 19,
    title: "Diving into the Great Barrier Reef, Australia",
    image: "/blog.png",
    sectionHeading: {
      title: "Underwater Wonders",
      paragraphs: [
        "The Great Barrier Reef is the largest coral reef system in the world, renowned for its vibrant marine life and kaleidoscopic coral formations.",
        "Diving here unveils an underwater realm full of color and life.",
      ],
    },
    sectionBody: {
      title: "A Diver’s Paradise",
      paragraphs: [
        "Whether you’re a seasoned diver or a curious beginner, the reef offers encounters with tropical fish, graceful manta rays, and intricate coral gardens.",
        "Snorkeling and scuba diving tours provide a close-up view of this living wonder.",
      ],
    },
    sectionFooter: {
      title: "Ocean Adventures",
      paragraphs: [
        "Join guided tours, learn about marine conservation efforts, and capture the beauty of the underwater world with your camera.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "Diving into the Great Barrier Reef is an awe-inspiring experience that connects you with one of nature’s most spectacular creations.",
    },
    tags: ["Diving", "Travel", "Australia"],
    date: "2024-03-28",
    category: "Destination Guides",
    comments: [6, 4, 5],
    shares: "3.7k",
  },
  {
    id: 20,
    title: "The Hidden Beauty of the Canadian Rockies",
    image: "/blog.png",
    sectionHeading: {
      title: "Majestic Mountains",
      paragraphs: [
        "The Canadian Rockies are a breathtaking expanse of towering peaks, crystal-clear lakes, and dense pine forests.",
        "This rugged landscape offers an escape into a world where nature’s grandeur reigns supreme.",
      ],
    },
    sectionBody: {
      title: "Outdoor Exploration",
      paragraphs: [
        "Hike along scenic trails, ski down powdery slopes, or simply marvel at the serene beauty of glacier-fed lakes.",
        "Every turn in the Rockies presents an opportunity for adventure and discovery.",
      ],
    },
    sectionFooter: {
      title: "Adventure Awaits",
      paragraphs: [
        "Visit iconic spots like Banff, Jasper, and Lake Louise, each offering its own unique natural wonders and recreational activities.",
      ],
      images: ["/blog.png", "/blog.png", "/blog.png"],
      conclusion:
        "The Canadian Rockies are a haven for outdoor enthusiasts and nature lovers, promising unforgettable experiences in every season.",
    },
    tags: ["Adventure", "Travel", "Canada"],
    date: "2024-03-29",
    category: "Travel Tips and Hacks",
    comments: [4, 5, 3],
    shares: "2.0k",
  },
];

export const blogTagsData = [
  "Nature",
  "Travel",
  "Turkey",
  "History",
  "Peru",
  "Culture",
  "Morocco",
  "Iceland",
  "Mediterranean",
  "Greece",
  "Cambodia",
];
