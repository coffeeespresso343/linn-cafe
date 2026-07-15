import { motion } from "framer-motion";
import { Clock, MapPin, PhoneCall } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ReservationForm from "../components/ReservationForm";

const info = [
  { icon: Clock, title: "Hours", text: "Mon–Fri 7am–7pm · Sat–Sun 8am–8pm" },
  { icon: MapPin, title: "Location", text: "128 Pyay Road, Yangon, Myanmar" },
  { icon: PhoneCall, title: "Call Ahead", text: "+95 912 345 678" },
];

const Reservation = () => {
  return (
    <div className=" pb-24 pt-36">
      <section className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            align="left"
            eyebrow="Reserve a Table"
            title="Save Your Seat"
            subtitle="Whether it's a quite moring coffee or a celebration with friends, we'll have a table ready. Fill out the form we will confirm within the hour."
          />

          <div className="space-y-5">
            {info.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <item.icon size={19} />
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-espresso dark:text-cream">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-coffee/70 dark:text-latte/70">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop"
              alt="Table seating inside Linn Cafe"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
          </motion.div>
        </div>

        <ReservationForm />
      </section>
    </div>
  );
};

export default Reservation;
