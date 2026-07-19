import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import Logo from "../assets/logo.png";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-6 flex items-center justify-center rounded-ful"
      >
        <div className="relative h-18 w-18 flex items-center justify-center">
          <motion.span
            className="absolute h-full w-full rounded-full border border-gold/40"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={Logo}
            alt="Linn Cafe logo"
            loading="lazy"
            className="rounded-full h-full w-full object-cover shadow-glow"
          />
        </div>
      </motion.div>
      <h1 className="font-display text-5xl font-bold text-espresso dark:text-cream sm:text-6xl">
        404
      </h1>
      <h3 className="mt-1 font-display text-2xl font-bold text-espresso dark:text-cream sm:text-3xl">
        This page is not available yet.
      </h3>

      <p className="mt-3 max-w-sm font-body text-sm text-coffee/70 dark:text-latte/70">
        Let's get you back to something warm.
      </p>
      <div className="mt-8 ">
        <Button to="/" variant="primary" icon={ArrowLeft}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
