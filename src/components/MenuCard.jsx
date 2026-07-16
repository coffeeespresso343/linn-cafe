import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const MenuCard = ({ item, index = 0, discountPercent = 0 }) => {
  const hasDiscount = discountPercent > 0;
  const discountPrice = hasDiscount
    ? item.price * (1 - discountPercent / 100)
    : item.price;

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
        <span className="absolute flex items-center gap-1.5 bottom-4 right-4 rounded-full bg-espresso/50 px-3 py-1 font-display text-sm font-semibold text-gold backdrop-blur-sm">
          {hasDiscount && (
            <span className="font-body text-xs text-latte/70 line-through">
              ${item.price.toFixed(2)}
            </span>
          )}

          <span className="font-display text-sm font-semibold text-gold">
            ${discountPrice.toFixed(2)}
          </span>
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream">
            {item.name}
          </h3>
        </div>
        <p className="font-body text-sm leading-relaxed text-coffee/75 dark:text-latte/75">
          {item.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-block font-body text-xs uppercase tracking-wide text-gold">
            {item.category}
          </span>
          {hasDiscount && (
            <span className="rounded-full bg-gold/15 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wide text-gold">
              -{discountPercent}% applied
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default MenuCard;
