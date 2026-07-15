import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div>
      <div></div>
      <div>
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-espresso"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            d="M3 8h13a3 3 0 0 1 0 6h-1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 8v6a4 4 0 0 0 4 4h5a4 4 0 0 0 4-4v-1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 3c-.5 1 .5 1.4 0 2.4M9.5 3c-.5 1 .5 1.4 0 2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <motion.p>Linn Cafe</motion.p>
      <motion.p>Brewing your experience</motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
