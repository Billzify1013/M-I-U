// ===== Hotel Malay Inn Ujjain Data =====
const HOTEL_DATA = {
  name: "HOTEL MALAY INN",
  tagline: "UJJAIN — COMFORT & HOSPITALITY",
  heroTitle: "Your perfect stay<br>awaits <em>here</em>.",
  heroSubtitle: "Experience warm hospitality and comfortable accommodations in the sacred city of Ujjain. Perfectly located near Mahakaleshwar Temple.",
  heroImage: "images/hotel-hero.jpg",
  
  aboutTitle: "Welcome to <em>Malay Inn</em>.",
  aboutImage: "images/hotel-about.jpg",
  aboutText: "Located just 7 minutes walk from the revered Mahakaleshwar Jyotirlinga Temple, Malay Inn is a 3-star hotel offering comfortable stays for pilgrims and travelers visiting Ujjain.\n\nOur hotel features six thoughtfully designed room categories to suit every guest's needs. With attentive service, modern amenities, and a convenient location in the Indore Road area, we ensure every guest enjoys a memorable experience.\n\nWhether you're here for spiritual purposes or a relaxing getaway, Malay Inn provides the perfect base to explore the ancient city of Ujjain.",
  signature: "Malay Inn Team",
  signatureRole: "HOSPITALITY EXCELLENCE",
  
  phone: "+91 90094 44999",
  email: "info@malayinn.com",
  address: "Harifatak Bridge Chouraha, Ujjain\nMadhya Pradesh 456006, India",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5633894622483!2d75.77509!3d23.18122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396371234567!2sHotel%20Malay%20Inn%20Ujjain!5e0!3m2!1sen!2sin!4v1700000000000",
  
  facebook: "#",
  instagram: "#",
  twitter: "#",
  
  rooms: [
    {
      name: "Deluxe Room",
      desc: "Comfortable and spacious room with modern amenities, air-conditioning, and a private bathroom. Ideal for budget-conscious travelers.",
      price: "2,310",
      image: "images/deluxe-room.jpg",
      size: "30 sqm",
      guests: "2 Guests",
      bed: "Double Bed"
    },
    {
      name: "Deluxe Suite Room",
      desc: "Upgraded suite with additional living space, premium bedding, and enhanced bathroom facilities for a more luxurious experience.",
      price: "3,200",
      image: "images/deluxe-suite.jpg",
      size: "42 sqm",
      guests: "2-3 Guests",
      bed: "King Bed"
    },
    {
      name: "Deluxe Triple Bed Room",
      desc: "Perfect for small families or groups, featuring three comfortable beds and all essential amenities for a pleasant stay.",
      price: "4,000",
      image: "images/triple-bed.jpg",
      size: "38 sqm",
      guests: "3 Guests",
      bed: "3 Single Beds"
    },
    {
      name: "Family Studio Room",
      desc: "Spacious studio room designed for families with a separate living area, kitchenette, and comfortable sleeping arrangements.",
      price: "4,800",
      image: "images/family-studio.jpg",
      size: "50 sqm",
      guests: "4 Guests",
      bed: "Double + Single Bed"
    },
    {
      name: "Family Suite 3+1",
      desc: "Our premium family suite offering three bedrooms plus one additional room, perfect for large families or group travelers.",
      price: "6,500",
      image: "images/family-suite.jpg",
      size: "75 sqm",
      guests: "5-6 Guests",
      bed: "Multiple Beds"
    },
    {
      name: "Premium Double Bed",
      desc: "Top-tier accommodation with premium furnishings, premium bedding, and exclusive amenities for the most discerning guests.",
      price: "5,500",
      image: "images/premium-double.jpg",
      size: "45 sqm",
      guests: "2 Guests",
      bed: "King Bed"
    }
  ],
  
  amenities: [
    { icon: "ti-wifi", name: "Free WiFi", desc: "High-speed internet" },
    { icon: "ti-tools-kitchen-2", name: "Room Service", desc: "24-hour support" },
    { icon: "ti-car", name: "Airport Transfers", desc: "Indore & Bhopal routes" },
    { icon: "ti-headphones", name: "24-hour Front Desk", desc: "Always available" },
    { icon: "ti-parking", name: "Parking", desc: "Free onsite parking" },
    { icon: "ti-ac-unit", name: "Air Conditioning", desc: "In all rooms" },
    { icon: "ti-shield-check", name: "Safe & Secure", desc: "Secure environment" },
    { icon: "ti-door-exit", name: "Quick Checkout", desc: "Flexible timings" }
  ],
  
  gallery: [
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=900&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80",
    "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80"
  ],
  
  testimonials: [
    { quote: "Best location near Mahakaleshwar Temple! The staff was very helpful and accommodating. Rooms were clean and comfortable.", author: "Rajesh Pandey — Indore", stars: 5 },
    { quote: "Great value for money. The room was spacious and the service was prompt. Will definitely stay again when visiting Ujjain.", author: "Priya Sharma — Delhi", stars: 5 },
    { quote: "Excellent hospitality. The family suite was perfect for our group. Recommended for anyone visiting the temples in Ujjain.", author: "Aditya Kumar — Mumbai", stars: 5 }
  ]
};

function loadHotelData() {
  try {
    const saved = localStorage.getItem('hotelData');
    if (saved) return { ...HOTEL_DATA, ...JSON.parse(saved) };
  } catch (e) {}
  return HOTEL_DATA;
}

const DATA = loadHotelData();
