import { AnimatePresence, motion } from "framer-motion";
import PerkCard from "../components/PerkCard";
import FloatingBean from "../components/FloatingBeans";
import SectionTitle from "../components/SectionTitle";
import { perks } from "../data/perks";
import Button from "../components/Button";
import { ArrowRight, BadgePercent } from "lucide-react";

const Perks = () => {
  return (
    <div className="pb-24 pt-36">
      <section className="container-page">
        <SectionTitle
          eyebrow="Community Perks"
          title="Made for Our Community"
          subtitle="Thoughtfully crafted rewards for students, developers, teachers, and healthcare professionals who inspire us every day."
        />

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {perks.map((perk, i) => (
              <PerkCard key={perk.id} perk={perk} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Button to="/menu" variant="ghost" icon={ArrowRight}>
            Preview Your Discount on the Menu
          </Button>
        </div>
      </section>

      <section className="relative mt-28 overflow-hidden py-20">
        <div className="absolute inset-0 bg-espresso" />
        <FloatingBean />
        <div className="container-page relative flex flex-col items-center text-center">
          <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
            <BadgePercent size={26} />
          </span>
          <SectionTitle
            light
            eyebrow="Not Sure You Qualify"
            title="Just Ask at the Counter"
            subtitle="Our baristas are happy to help you find the right discount - no app, no sign-up, no fuss."
          />
        </div>
      </section>
    </div>
  );
};

export default Perks;
