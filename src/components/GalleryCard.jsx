import { motion } from "framer-motion";
import { Expand } from "lucide-react";

const GalleryCard = ({ image, index = 0, onClick }) => {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      onClick={onClick}
      className={`group relative mb-4 block w-full overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 ${
        image.tall ? "aspect-3/4 " : "aspect-4/3"
      }`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-espresso/80 via-espresso/0 to-transparent p-4 opacity-100 md:opacity-0 transition-opacity duration-400 md:group-hover:opacity-100">
        <span className="mb-1 flex items-center gap-1.5 font-body text-[11px] uppercase tracking-wide text-gold">
          <Expand size={12} /> {image.category}
        </span>
        <span className="font-body text-xs text-cream/80">{image.alt}</span>
      </div>
    </motion.button>
  );
};

export default GalleryCard;
