import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const MenuCard = ({ item, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -6 }}
      className="card-surface group relative overflow-hidden "
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {item.popular && (
          <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-espresso shadow-soft">
            <Flame size={12} /> Popular
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-espresso/50 px-3 py-1 font-display text-sm font-semibold text-gold backdrop-blur-sm">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-center justify-between  gap-2">
          <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream">
            {item.name}
          </h3>
        </div>
        <p className="font-body text-sm leading-relaxed text-coffee/75 dark:text-latte/75">
          {item.description}
        </p>
        <span className="mt-3 inline-block font-body text-xs uppercase tracking-wide text-gold">
          {item.category}
        </span>
      </div>
    </motion.article>
  );
};

export default MenuCard;
