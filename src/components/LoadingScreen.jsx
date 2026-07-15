import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-espresso"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <motion.span
          className="absolute h-full w-full rounded-full border border-gold/40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 shadow-glow">
          {/* <Coffee /> */}
          <img
            src={Logo}
            alt="Linn Cafe Logo"
            className="h-full w-full object-cover rounded-4xl"
          />
        </div>
      </div>
      <motion.p className="mt-6 font-display text-xl tracking-wide text-cream">
        Linn Cafe
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-1 font-body text-xs uppercase tracking-[0.3rem] text-latte/70"
      >
        Brewing your experience
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
