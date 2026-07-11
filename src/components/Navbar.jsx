import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Menu, Moon, Sun, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import Button from "./Button";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth 
        ${
          scrolled
            ? "bg-cream/80 shadow-soft backdrop-blur-xl dark:bg-espresso-dark/80"
            : "bg-transparent"
        }
    `}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-gold 
          shadow-soft transition-transform duration-300 group-hover:rotate-12 dark:bg-gold dark:text-espresso-dark"
          >
            <Coffee size={18} />
          </span>
          <span
            className={`font-display text-xl font-semibold tracking-wide transition-colors ${
              scrolled || open ? "text-espresso dark:text-cream" : "text-cream"
            }`}
          >
            Linn Caf&eacute;
          </span>
        </NavLink>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative font-body text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "after:w-full" : "after:w-0"
                } ${
                  scrolled
                    ? isActive
                      ? "text-gold"
                      : "text-espresso hover:text-gold dark:text-cream"
                    : isActive
                      ? "text-gold"
                      : "text-cream hover:text-gold-light"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-espresso/15 text-espresso hover:border-gold hover:text-gold dark:border-cream/20 dark:text-center"
                : "border-cream/30 text-cream hover:border-gold-light hover:text-gold-light"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Button
            to="/reservation"
            variant="gold"
            className="px-6! py-2.5! text-sm"
          >
            Reserve Table
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toogle dark mode"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              scrolled || open
                ? "border-espresso/15 text-espresso dark:border-cream/20 dark:text-cream"
                : "border-cream/30 text-cream"
            }`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toogle navigation menu"
            aria-expanded={open}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              scrolled || open ? "text-espresso dark:text-cream" : "text-cream"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-espresso/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
