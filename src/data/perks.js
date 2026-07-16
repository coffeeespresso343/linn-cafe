import {
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  HeartPulse,
  Sunrise,
  Users,
} from "lucide-react";

export const perks = [
  {
    id: "student",
    label: "Students",
    icon: GraduationCap,
    discount: 15,
    tagline: "Fuel for late study sessions.",
    requirement: "Show a valid student ID at the counter.",
  },
  {
    id: "developer",
    label: "Developers",
    icon: Code2,
    discount: 15,
    tagline: "For the ones who live in the terminal.",
    requirement:
      "Show a company badge, GitHub profile, or just talk to us about your stack.",
  },
  {
    id: "teacher",
    label: "Teachers",
    icon: BookOpen,
    discount: 15,
    tagline: "A small thank you for shaping minds.",
    requirement: "Show a school ID or staff badge.",
  },
  {
    id: "healthcare",
    label: "Healthcare Workers",
    icon: HeartPulse,
    discount: 15,
    tagline: "On us, between shifts.",
    requirement: "Show a hospital or clinic ID badge.",
  },
  {
    id: "earlybird",
    label: "Early Birds",
    icon: Sunrise,
    discount: 5,
    tagline: "Morning coffee at a better price.",
    requirement: "Before 9:00 AM daily.",
  },
  {
    id: "office",
    label: "Offices",
    icon: Briefcase,
    discount: 10,
    tagline: "Perfect for meetings and team breaks.",
    requirement: "Orders over $50.",
  },
  {
    id: "group",
    label: "Groups",
    icon: Users,
    discount: 10,
    tagline: "Coffee tastes better together.",
    requirement: "For groups of 4 or more.",
  },
];

export function getPerkById(id) {
  return perks.find((p) => p.id === id) || null;
}
