import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialCard = ({ testimonial, index = 0 }) => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-surface flex h-full flex-col justify-between p-7"
    >
      <Quote size={30} className="mb-4 text-gold/50" />

      <blockquote className="flex-1 font-body text-sm leading-relaxed text-coffee/85 dark:text-latte/85">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/30"
        />
        <div>
          <figcaption className="font-display text-sm font-semibold text-espresso dark:text-cream">
            {testimonial.name}
          </figcaption>
          <p className="font-body text-xs text-coffee/60 dark:text-latte/60">
            {testimonial.role}
          </p>
        </div>
        <div className="ml-auto flex gap-0.5 text-gold">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
    </motion.figure>
  );
};

export default TestimonialCard;
