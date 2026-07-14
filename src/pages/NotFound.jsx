import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold"
      >
        <Coffee size={34} />
      </motion.span>
      <h1 className="font-display text-5xl font-bold text-espresso dark:text-cream sm:text-6xl">
        404
      </h1>
      <h3 className="mt-1 font-display text-2xl font-bold text-espresso dark:text-cream sm:text-3xl">
        This page is not available yet.
      </h3>

      <p className="mt-3 max-w-sm font-body text-sm text-coffee/70 dark:text-latte/70">
        Let's get you back to something warm.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
