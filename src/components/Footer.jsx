import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";
import Logo from "../assets/logo.png";

const SOCIAL_ICONS = [
  { alt: "Instagram", src: "/instagram.svg" },
  { alt: "Facebook", src: "/facebook.svg" },
  { alt: "X", src: "/x.png" },
];

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/perks", label: "Perks" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-espresso-dark text-cream">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-espresso-dark">
                {/* <Coffee size={18} /> */}
                <img
                  src={Logo}
                  alt="Linn Cafe Logo"
                  className="rounded-4xl h-9 w-9 object-cover"
                />
              </div>
              <span className="font-display text-xl font-semibold">
                Linn Caf&eacute;
              </span>
            </Link>
            <p className="max-w-xs font-body text-sm leading-relaxed text-latte/70">
              Small-batch, freshly roasted coffee crafted with care - a warm
              corner for slow mornings and good conversation.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_ICONS.map((icon, i) => (
                <a
                  key={i}
                  href="/not-found"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-gold/30 hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-display text-lg font-semibold text-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-latte/75 transition-colors hover:text-gold hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-lg font-semibold text-gold">
              Visit Us
            </h4>
            <ul className="space-y-3 font-body text-sm text-latte/75">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-gold" />
                <span>128 Pyay Road, Yangon, Myanmar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                <span>+95 912 345 678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <span>hello@linncafe.com</span>
              </li>
              <li className="pt-2 text-latte/60">Mon-Fri: 7am - 7pm</li>
              <li className="text-latte/60">Sat-Sun: 8am - 8pm</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-lg font-semibold text-gold">
              Newsletter
            </h4>
            <p className="mb-4 font-body text-sm text-latte/70">
              Seasonal drops, roast notes, and the occasional discount — no
              spam, ever.
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-center font-body text-xs text-latte/50 sm:flex-row sm:text-left">
          <p>Crafted with care for coffee people, everywhere.</p>
          <p>
            &copy; {new Date().getFullYear()} Linn Cafe. All rights reserved.
          </p>

          <div className="flex  flex-col gap-2 items-center">
            <p>
              Developed by <span className="text-latte/70">Linn Khant</span>
            </p>
            <a
              href="https://github.com/coffeeespresso343"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.webp"
                alt="GitHub Logo"
                className="h-6 w-6 object-cover rounded-4xl ring-1 ring-gold"
              />
            </a>
            <p className="text-latte/30">
              Built with heart and too much coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
