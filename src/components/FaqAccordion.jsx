import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const FaqAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);
  return (
    <div className="mx-auto max-w-2xl divide-y divide-latte/40 dark:divide-white/10">
      {items.map((faq, i) => {
        const isOpen = openId === faq.id;

        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-espresso dark:text-cream sm:text-lg">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold"
              >
                <Plus size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-body text-sm leading-relaxed text-coffee/75 dark:text-latte/75">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
