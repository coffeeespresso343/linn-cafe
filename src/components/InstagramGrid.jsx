import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";
import { ArrowBigDown } from "lucide-react";

const posts = galleryImages.slice(0, 6);

const InstagramGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-6">
      {posts.map((post, i) => (
        <motion.a
          key={post.id}
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
          aria-label="View on Instagram"
        >
          <img
            src={post.src}
            alt={post.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-espresso/0 text-cream opacity-0 transition-all duration-300 group-hover:bg-espresso/50 group-hover:opacity-100">
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="h-12 w-12 opacity-70"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default InstagramGrid;
