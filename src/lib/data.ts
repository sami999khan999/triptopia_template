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
        path: "/Blog",
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
    image: "/blog-feed.png",
    authorImage: "/blog-author.png",
  },
  {
    id: 2,
    title: "Honoring History in the Land of Heroes",
    type: "Cody Fisher",
    date: "03 Aug",
    author: "Cody Fisher",
    image: "/blog-feed.png",
    authorImage: "/blog-author.png",
  },
  {
    id: 3,
    title: "Witnessing Sunrise Amongst the Statues",
    type: "Group Tour",
    date: "03 Aug",
    author: "Jerome Bell",
    image: "/blog-feed.png",
    authorImage: "/blog-author.png",
  },
];
