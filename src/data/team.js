import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar-light.png";
import avatar3 from "../assets/avatar-dark.png";

export const team = [
  {
    id: 1,
    name: "Linn Khant",
    role: "Founder & Head Roaster",
    bio: "Fifteen years behind the roaster, obsessed with single-origin beans and consistency.",
    image: avatar,
    // "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Jonah Reyes",
    role: "Head Barista",
    bio: "Regional latte-art finalist who trains every new barista on our bar standards.",
    image: avatar3,
    // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sofia Lindqvist",
    role: "Pastry Chef",
    bio: "Bakes everything in-house daily, from croissants to seasonal fruit tarts.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Theo Brandt",
    role: "Coffee Sourcing Lead",
    bio: "Travels twice a year to build direct relationships with our partner farms.",
    image: avatar2,
  },
];

export const timeline = [
  {
    year: "2025 - Jan",
    title: "A Small Cart",
    text: "Linn Cafe began as a single espresso cart on a quiet corner.",
  },
  {
    year: "2025 - Apr",
    title: "First Storefront",
    text: "We opened our first shop, doubling down on direct-trade beans.",
  },
  {
    year: "2025 - Dec",
    title: "In-House Roastery",
    text: "Brought roasting under our own roof to control every batch.",
  },
  {
    year: "2026 - April",
    title: "Second Location",
    text: "Grew to a second neighborhood, staying true to the original recipe.",
  },
  {
    year: "2026",
    title: "Today",
    text: "A small team obsessed with the details, one cup at a time.",
  },
];

export const stats = [
  { id: 1, label: "Cups Served Daily", value: 128, suffix: "+" },
  { id: 2, label: "Beans Sourced Directly", value: 12, suffix: " Farms" },
  { id: 3, label: "Year Roasting", value: 1, suffix: "+" },
  { id: 4, label: "Happy Regulars", value: 256, suffix: "+" },
];
