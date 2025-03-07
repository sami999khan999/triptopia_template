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
