import { motion } from "framer-motion";
import Hero from "../components/Hero";
import FloatingBeans from "../components/FloatingBeans";
import SectionTitle from "../components/SectionTitle";
import { menuItems } from "../data/menuData";
import { testimonials } from "../data/testimonials";
import { galleryImages } from "../data/gallery";

import CoffeeCard from "../components/CoffeeCard";
import Button from "../components/Button";
import { ArrowRight, Award, Leaf, Play, Users } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import GalleryCard from "../components/GalleryCard";
import InstagramGrid from "../components/InstagramGrid";
import NewsletterForm from "../components/NewsletterForm";

const featured = menuItems.filter((item) =>
  ["esp-01", "cap-01", "lat-01", "moc-01"].includes(item.id),
);

const bestSellers = menuItems.filter((m) => m.popular).slice(0, 6);

const galleryPreview = galleryImages.slice(0, 6);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, ``] },
  },
};

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Featured Coffee */}
      <section className="relative overflow-hidden py-24">
        <FloatingBeans className="opacity-60" />

        <div className="container-page relative">
          <SectionTitle
            eyebrow="Featured Coffee"
            title="This Week's Pour"
            subtitle="A roating selection of our most-loved brews, chosen fresh from this week's roast."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <CoffeeCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-latte/25 py-24 dark:bg-white/3">
        <div className="container-page">
          <SectionTitle
            eyebrow="Guest Favorites"
            title="Best Sellers"
            subtitle="The drinks and treats our regulars order again adn again."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bestSellers.map((item, i) => (
              <CoffeeCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Button to="/menu" variant="ghost" icon={ArrowRight}>
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-4xl shadow-soft-lg">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
                alt="Barista preparing coffee at Linn Cafe"
                loading="lazy"
                className="h-105 w-full object-cover sm:h-225"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-52 rounded-2xl border border-latte/50 bg-cream/95 p-5 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-espresso/95 sm:block">
              <p className="font-display text-3xl font-bold text-gold">1+</p>
              <p className="font-body text-xs uppercase tracking-wide text-coffee/70 dark:text-latte/70">
                Years of Roasting Craft
              </p>
            </div>
          </motion.div>

          <div>
            <SectionTitle
              align="left"
              eyebrow="About Linn Cafe"
              title="Rooted in Craft, Served with Warmth"
              subtitle="Linn Cafe began as a single espresso cart in 2025. Today, we roast every bean in-house and pour each cup with the smae care as our very first."
            />

            <motion.div
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                {
                  icon: Leaf,
                  title: "Direct-Trade Beans",
                  text: "Sourced from twelve partner farms we work with directly.",
                },
                {
                  icon: Award,
                  title: "Award-Winning Roasts",
                  text: "Recognized by regional roasting guilds.",
                },
                {
                  icon: Users,
                  title: "A Neighborhood Table",
                  text: "A warm space built for slow morings adn real conversion.",
                },
              ].map((f) => (
                <motion.div
                  variants={fadeUp}
                  key={f.title}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <f.icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-espresso dark:text-cream">
                      {f.title}
                    </h4>
                    <p className="font-body text-sm text-coffee/70 dark:text-latte/70">
                      {f.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8">
              <Button to="/about" variant="primary" icon={ArrowRight}>
                View Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brewing Video */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="container-page relative flex flex-col items-center text-center">
          <SectionTitle
            light
            eyebrow="Behind the Bar"
            title="Watch Our Bewing Process"
            subtitle="From green bean to golden crema - see how every batch is roasted, rested, and poured."
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gold/95 text-espresso shadow-glow"
            aria-label="Play brewing process video"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40"></span>
            <Play size={26} fill="currentColor" className="relative ml-1" />
          </motion.button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-latte/25 py-24 dark:bg-white/3">
        <div className="container-page">
          <SectionTitle
            eyebrow="Kind Words"
            title="What Our Guests Say"
            subtitle="Real feedback from the regulars who make Linn Cafe feel like home."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24">
        <div className="container-page">
          <SectionTitle
            eyebrow="A Glimpse Inside"
            title="Gallery"
            subtitle="Coffee, corners, and the little details that make the space."
          />

          <div className="columns-2 gap-4 sm:columns-3">
            {galleryPreview.map((img, i) => (
              <GalleryCard
                key={img.id}
                image={img}
                index={i}
                onClick={() => console.log("I Need To Add Gallery Later")}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button to="/gallery" variant="ghost" icon={ArrowRight}>
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="bg-latte/25 py-24 dark:bg-white/3">
        <div>
          <SectionTitle eyebrow="@linncafe" title="Follow Along on Instagram" />
          <InstagramGrid />
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-espresso"></div>
        <FloatingBeans />
        <div className="container-page relative text-center">
          <SectionTitle
            light
            eyebrow="Stay in the Loop"
            title="Get Roast Notes in Your Inbox"
            subtitle="New seasonal drinks, roastery updates, and the occasional treat - straight to your inbox."
          />
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
