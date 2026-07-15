import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import FaqAccordion from "../components/FaqAccordion";
import { faqs } from "../data/faqs";
import ContactForm from "../components/ContactForm";

const SOCIAL_ICONS = [
  { alt: "Instagram", src: "/instagram.svg" },
  { alt: "Facebook", src: "/facebook.svg" },
  { alt: "X", src: "/x.png" },
];
const details = [
  { icon: MapPin, title: "Location", text: "128 Pyay Road, Yangon, Myanmar" },
  { icon: Mail, title: "Email", text: "hello@linncafe.com" },
  { icon: Phone, title: "Phone", text: "+95 912 345 678" },
  { icon: Clock, title: "Hours", text: "Mon–Fri 7am–7pm · Sat–Sun 8am–8pm" },
];

const Contact = () => {
  return (
    <div className="pb-24 pt-36">
      <section className="container-page">
        <SectionTitle
          eyebrow="Get in Touch"
          title="We'd Love to Hear From You"
          subtitle="Questions, feedback, or catering inquiries - send us a note and we'll respond within a day."
        />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {details.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-surface flex items-start gap-3 p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <item.icon size={17} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-espresso dark:text-cream">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs leading-relaxed text-coffee/70 dark:text-latte/70">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mb-10 flex gap-3">
              {SOCIAL_ICONS.map((icon, i) => (
                <a
                  key={i}
                  href="/not-found"
                  aria-label="Social media link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-latte transition-all duration-300 hover:border-gold dark:border-white/15 "
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-full w-full rounded-full object-cover ring-2 ring-gold/30"
                  />
                </a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl shadow-soft"
            >
              <iframe
                title="Linn Cafe Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5818.633490563193!2d96.13080073600243!3d16.80596950658756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb46890098cb%3A0x705a0ebc0e973dbc!2sMyaynigone%2C%20Yangon%2C%20Myanmar%20(Burma)!5e1!3m2!1sen!2snl!4v1784054546560!5m2!1sen!2snl"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="grayscale-20"
              />
            </motion.div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="mt-28 pt-12 bg-latte/25 dark:bg-white/3">
        <div className="container-page">
          <SectionTitle eyebrow="FAQ" title="Common Questions" />
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
