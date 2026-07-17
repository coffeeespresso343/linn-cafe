import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { useMemo } from "react";
import { galleryFilters, galleryImages } from "../data/gallery";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    return activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pb-24 pt-36">
      <section className="container-page">
        <SectionTitle
          eyebrow="Our Gallery"
          title="Moments Worth Savoring"
          subtitle="A look inside Linn Cafe - the coffee, the corners, the people who make it what it is."
        />

        <div className="mb-14 flex flex-wrap justify-center gap-2.5">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 font-body text-xs font-medium uppercase tracking-wide translate-all duration-300 sm:text-sm ${
                activeFilter === filter
                  ? "border-espresso dark:border-gold bg-espresso dark:bg-gold text-cream dark:text-espresso-dark shadow-soft"
                  : "border-latte text-coffee/70 hover:border-gold hover:text-gold dark:border-white/15 dark:text-latte/70"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <GalleryCard
                key={img.id}
                image={img}
                index={i}
                onClick={() =>
                  setActiveIndex(filtered.findIndex((f) => f.id === img.id))
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
};

export default Gallery;
