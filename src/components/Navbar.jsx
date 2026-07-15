import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import Logo from "../assets/logo.png";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservation", label: "Reservation" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const overDarkHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color, backdrop-filter, box-shadow] duration-500 ease-smooth
        ${
          overDarkHero
            ? "bg-transparent"
            : "bg-white/70 shadow-soft backdrop-blur-xl dark:bg-black/60"
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
            className="flex h-10 w-10 items-center justify-center rounded-4xl bg-espresso
          shadow-soft transition-transform duration-300 group-hover:rotate-12 "
          >
            <img
              src={Logo}
              alt="Linn Cafe Logo"
              className="rounded-full h-9 w-9 object-cover"
            />
          </span>
          <span
            className={`font-display text-xl font-semibold tracking-wide transition-colors ${
              overDarkHero ? "text-cream" : "text-espresso dark:text-cream"
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
                  overDarkHero
                    ? isActive
                      ? "text-gold"
                      : "text-cream hover:text-gold-light"
                    : isActive
                      ? "text-gold"
                      : "text-espresso hover:text-gold dark:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              overDarkHero
                ? "border-cream/30 text-cream hover:border-gold-light hover:text-gold-light"
                : "border-espresso/15 text-espresso hover:border-gold hover:text-gold dark:border-cream/20 dark:text-cream"
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
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              overDarkHero || open
                ? "border-cream/30 text-cream"
                : "border-espresso/15 text-espresso dark:border-cream/20 dark:text-cream"
            }`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              overDarkHero ? "text-cream " : "text-espresso dark:text-cream"
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

      {/* Hamburgar Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-20 z-60 rounded-bl-4xl flex h-[calc(100vh-5rem)] w-[80%] max-w-sm flex-col gap-2 bg-cream/95 px-8 py-4 shadow-soft-lg dark:bg-espresso-dark/95 lg:hidden"
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-latte/80 py-3 font-display text-xl transition-colors dark:border-white/20 ${
                      isActive ? "text-gold" : "text-espresso dark:text-cream"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8"
            >
              <Button
                to="/reservation"
                variant="gold"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Reserve Table
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
