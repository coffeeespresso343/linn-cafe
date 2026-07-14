import FloatingBeans from "./FloatingBeans";
import CoffeeSteam from "./CoffeeSteam";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "./Button";

const container = {
  hidden: {},
  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen items-center overflow-hidden bg-espresso">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1974&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/80 to-espresso/40" />
      <div className="absolute inset-0 bg-linear-to-r from-espresso/90 via-espresso/40 to-transparent" />
      <div className="bg-grain absolute inset-0 opacity-[0.03] mix-blend-overlay" />

      <FloatingBeans />

      <div className="pointer-events-none absolute bottom-24 right-[8%] hidden sm:block">
        <CoffeeSteam />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative z-10 flex flex-col items-start pt-24"
      >
        <motion.span
          variants={item}
          className="eyebrow mb-5 rounded-full border border-gold/30 px-4 py-1.5"
        >
          Small-batch &middot; Freshly Roasted &middot; Est.2025
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] text-cream sm:text-6xl md:text-7xl"
        >
          Every Cup Tells a{" "}
          <span className="text-gradient-gold italic">Story</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg font-body text-base leading-relaxed text-latte/85 sm:text-lg"
        >
          Freshly roasted coffee crafted with passion. Sourced directly from
          small farms, roasted in-house, poured with care.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/menu" variant="gold">
            Explore Menu
          </Button>
          <Button to="/reservation" variant="outline">
            Reserve Table
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-3 gap-8 border-t border-cream/10 pt-8 sm:gap-14"
        >
          {[
            ["1+", "Year Roasting"],
            ["850+", "Cups Daily"],
            ["12", "Partner Farms"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-latte/60 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-latte/60"
        >
          <span className="font-body text-[11px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
