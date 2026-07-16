import { BookOpen, Code2, GraduationCap, HeartPulse } from "lucide-react";

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
    discount: 10,
    tagline: "A small thank you for shaping minds.",
    requirement: "Show a school ID or staff badge.",
  },
  {
    id: "healthcare",
    label: "Healthcare Workers",
    icon: HeartPulse,
    discount: 10,
    tagline: "On us, between shifts.",
    requirement: "Show a hospital or clinic ID badge.",
  },
];

export function getPerkById(id) {
  return perks.find((p) => p.id === id) || null;
}
