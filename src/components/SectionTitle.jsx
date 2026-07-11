import { motion } from "framer-motion";

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`font-display text-3xl font-semibold sm:text-4xl md:text-5xl ${
          light ? "text-cream" : "text-espresso dark:text-cream"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`mt-4 max-w-xl font-body text-base leading-relaxed ${
            light ? "text-latte" : "text-coffee/80 dark:text-latte/80"
          }`}
        >
          {subtitle}
        </motion.p>
      )}{" "}
    </div>
  );
};

export default SectionTitle;
