import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { BadgePercent, Coffee, Search } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { categories, menuItems } from "../data/menuData";
import MenuCard from "../components/MenuCard";
import SkeletonCard from "../components/SkeletonCard";
import { useDebounce } from "react-use";
import { useRef } from "react";
import { getPerkById, perks } from "../data/perks";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const [activePerkId, setActivePerkId] = useState(
    location.state?.perkId ?? null,
  );

  const activePerk = getPerkById(activePerkId);

  const resultRef = useRef(null);
  const perkRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    if (!location.state?.perkId) return;

    requestAnimationFrame(() => {
      perkRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.state]);

  useEffect(() => {
    if (!debouncedQuery.trim()) return;

    resultRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [debouncedQuery]);

  useDebounce(
    () => {
      setDebouncedQuery(query);
    },
    800,
    [query],
  );

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 600);

    return () => window.clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(debouncedQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [debouncedQuery, activeCategory]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setQuery("");

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleCategoryRef = () => {
    requestAnimationFrame(() => {
      categoryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  return (
    <div className="pb-24 pt-36">
      <section className="container-page">
        <SectionTitle
          eyebrow="Our Menu"
          title="Crafted With Intention"
          subtitle="Every item, roasted, brewed, and baked with the same standard - from our first espresso to our last croissant."
        />

        <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute pointer-events-none left-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu..."
              aria-label="Search menu items"
              className="input-base pl-11"
            />
          </div>
        </div>

        {/* Community perks */}
        <div
          ref={perkRef}
          className="scroll-mt-50 mx-auto mb-8 max-w-3xl rounded-2xl border border-gold/25 bg-gold/6 p-5 sm:p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <BadgePercent size={17} className="text-gold" />
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-coffee/80 dark:text-latte/80">
              I am a...
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActivePerkId(null)}
              className={`rounded-full border px-4 py-2 font-body text-xs font-medium transition-all duration-300 sm:text-sm ${
                activePerkId === null
                  ? "border-espresso bg-espresso text-cream shadow-soft dark:border-gold dark:bg-gold dark:text-espresso-dark"
                  : "border-latte text-coffee/70 hover:border-gold hover:text-gold dark:border-white/15 dark:text-latte/70"
              }`}
            >
              Regular Guest
            </button>
            {perks.map((perk) => (
              <button
                key={perk.id}
                onClick={() => {
                  setActivePerkId(perk.id);
                  handleCategoryRef();
                }}
                className={`rounded-full border px-4 py-2 font-body text-xs font-medium transition-all duration-300 sm:text-sm ${
                  activePerkId === perk.id
                    ? "border-espresso bg-espresso text-cream shadow-soft dark:border-gold dark:bg-gold dark:text-espresso-dark"
                    : "border-latte text-coffee/70 hover:border-gold hover:text-gold dark:border-white/15 dark:text-latte/70"
                }`}
              >
                {perk.label.slice(0, -1)} . {perk.discount}% off
              </button>
            ))}
          </div>
          {activePerk && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-body text-xs text-coffee/70 dark:text-latte/70"
            >
              Price below reflect your {activePerk.discount}%{" "}
              {activePerk.label.toLowerCase()} discount.{" "}
              {activePerk.requirement}{" "}
              <Link
                to="/perks"
                className="text-gold underline underline-offset-2 hover:text-gold-light"
              >
                More about perks
              </Link>
            </motion.p>
          )}
        </div>

        <div
          ref={categoryRef}
          className="scroll-mt-26 mb-14 flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                handleCategoryChange(cat);
              }}
              className={`rounded-full border px-4 py-2 font-body text-xs font-medium uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                activeCategory === cat
                  ? "border-espresso bg-espresso text-cream shadow-soft dark:border-gold dark:bg-gold dark:text-espresso-dark"
                  : "border-latte text-coffee/70 hover:border-gold hover:text-gold dark:border-white/15 dark:text-latte/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={resultRef} className="scroll-mt-105 sm:scroll-mt-68">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    index={i}
                    discountPercent={activePerk?.discount ?? 0}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card-surface flex flex-col items-center gap-4 py-20 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-latte/40 text-coffee/50 dark:bg-white/5 dark:text-latte/50">
                <Coffee size={26} />
              </span>
              <p className="font-display text-xl text-espresso dark:text-cream">
                No items match with "{query}"
              </p>
              <p className="font-body text-sm text-coffee/60 dark:text-latte/60">
                Try a different keyword or browse another category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
