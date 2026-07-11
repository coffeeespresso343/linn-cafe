import { motion } from "framer-motion";
import { Star } from "lucide-react";

const CoffeeCard = ({ item, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl shadow-soft">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-72 w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 2, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso/85 via-espresso/10 to-transparent" />

        {item.popular && (
          <span className="absolute right-4 top-4 flex items-center gap-1 pr-1 pl-1 rounded-full bg-gold/95 font-body text-[11px] font-semibold uppercase tracking-wide text-espresso">
            <Star size={11} fill="currentColor" /> Best Seller
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl font-semibold text-cream">
            {item.name}
          </h3>

          <p className="mt-1 line-clamp-2 font-body text-xs text-latte/80">
            {item.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display text-lg font-semibold text-gold">
              ${item.price.toFixed(2)}
            </span>
            <span className="translate-x-1 font-body text-xs uppercase tracking-wide text-cream/70 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {item.category}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CoffeeCard;
