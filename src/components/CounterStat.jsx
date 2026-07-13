import { motion } from "framer-motion";
import useCountUp from "../hooks/useCountUp";

const CounterStat = ({ value, suffix = "", label, index = 0 }) => {
  const { ref, value: current } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
        {current.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 font-body text-xs uppercase tracking-wide text-latte/70 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default CounterStat;
