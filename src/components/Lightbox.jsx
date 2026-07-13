import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { useCallback } from "react";

const Lightbox = ({ images, activeIndex, onClose, onNavigate }) => {
  const image = activeIndex !== null ? images[activeIndex] : null;

  //   console.log(image);

  const handleKey = useCallback(
    (e) => {
      if (image === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1) % images.length);
    },
    [image, activeIndex, images.length, onClose, onNavigate],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-99 flex items-center justify-center bg-espresso-dark/95 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10"
          >
            <X size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(activeIndex - 1 + images.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-16 max-h-[80vh] max-w-3xl overflow-hidden rounded-2xl shadow-soft-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[60vh] w-full object-contain"
            />
            <div className="bg-espresso-dark/90 p-4 text-center">
              <p className="font-body text-sm text-cream/80">{image.alt}</p>
              <span className="font-body text-xs uppercase tracking-wide text-gold">
                {image.category}
              </span>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:bg-cream/10 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
