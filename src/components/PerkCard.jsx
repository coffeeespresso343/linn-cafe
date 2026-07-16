import { motion } from "framer-motion";

const PerkCard = ({ perk, index = 0 }) => {
  const Icon = perk.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="card-surface relative overflow-hidden p-7"
    >
      <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-body text-xs font-semibold text-espresso shadow-soft">
        {perk.discount}% OFF
      </span>
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
        <Icon size={26} />
      </span>

      <h3 className="font-display text-xl font-semibold text-espresso dark:text-cream">
        {perk.label}
      </h3>
      <p className="mt-1.5 font-body text-sm text-coffee/70 dark:text-latte/70">
        {perk.tagline}
      </p>

      <div className="mt-5 rounded-xl bg-latte/30 p-3.5 dark:bg-white/5">
        <p className="font-body text-xs leading-relaxed text-coffee/70 dark:text-latte/70">
          <span className="font-semibold text-espresso dark:text-cream">
            How to claim:{" "}
          </span>
          {perk.requirement}
        </p>
      </div>
    </motion.article>
  );
};

export default PerkCard;
