import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import FloatingBean from "../components/FloatingBeans";
import { Globe2, ThermometerSun, Droplets, Sprout } from "lucide-react";
import { team, timeline, stats } from "../data/team";
import CounterStat from "../components/CounterStat";

const brewSteps = [
  {
    icon: Globe2,
    title: "Sourced",
    text: "Green beans arrive directly from our twelve partner farms across three countries.",
  },
  {
    icon: ThermometerSun,
    title: "Roasted",
    text: "Small batches roasted in-house to bring out each origin\u2019s natural character.",
  },
  {
    icon: Droplets,
    title: "Brewed",
    text: "Dialed in daily by our baristas for the right extraction, every single pour.",
  },
  {
    icon: Sprout,
    title: "Served",
    text: "From bean to cup in under two weeks, always at peak freshness.",
  },
];

const About = () => {
  return (
    <div className="pb-24 pt-36">
      {/* Story */}
      <section className="container-page grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        <div>
          <SectionTitle
            align="left"
            eyebrow="A Cart That Grew Into a Community"
            subtitle="Linn Cafe started in 2025 as a single espresso cart parked on a quiet corner. What began 
          as one person's bosession with a perfect shot has grown into a small, dedicated team that roasts, bakes, 
          and pours with the same care every single day."
          />
          <p className="max-w-xl font-body text-sm leading-relaxed text-coffee/75 dark:text-latte/75">
            We believe great coffee starts long before it reaches your cup -
            with the farmers who grow it, the relationships we build with them,
            and the patience it takes to road it right. That philosophy has
            never changed, even as we have.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-4xl shadow-soft-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop"
            alt="Interior of Linn Cafe roastery"
            loading="lazy"
            className="h-99 w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Mission */}
      <section className="mt-28 bg-latte/25 dark:bg-white/3 py-24 ">
        <div className="container-page text-center">
          <SectionTitle
            eyebrow="Our Mission"
            title="Coffee Should Feel Personal"
            subtitle="We exist to slow people down five minutes - to source honestly, roast thoughtfully, 
          and serve every cup like it's the only one we're making today."
          />
        </div>
      </section>

      {/* Coffee Beans & Brewing Process */}
      <section className="container-page mt-28">
        <SectionTitle
          eyebrow="From Farm to Cup"
          title="Our Beans & Brewing Process"
          subtitle="Four simple steps guide every batch we roast, from origin to your table."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brewSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface p-7 text-center"
            >
              <span className="mx-auto mb-5 flex h-1/4 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <step.icon size={24} />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold text-espresso dark:text-cream">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-coffee/70 dark:text-latte/70">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Baristas */}
      <section className="mt-28">
        <div className="container-page">
          <SectionTitle
            eyebrow="The Team"
            title="Meet Our Baristas"
            subtitle="The hands and hearts behind every cup."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group card-surface overflow-hidden text-center"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg decoration-espresso text-espresso dark:text-cream">
                    {member.name}
                  </h3>
                  <p className="mb-2 font-body text-xs uppercase tracking-wide text-gold">
                    {member.role}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-coffee/65 dark:text-latte/65">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-28 bg-latte/25 py-24 dark:bg-white/3">
        <div className="container-page">
          <SectionTitle eyebrow="Our Journey" title="A Decade in the Making" />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-3.75 top-2 bottom-2 w-px bg-latte dark:bg-white/10 sm:left-1/2" />

            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-10 flex items-start gap-6 sm:mb-14 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:ml-0 sm:flex-row sm:pr-10 sm:text-right"
                    : "sm:ml-auto sm:flex-row-reverse sm:pl-10"
                }`}
              >
                <span className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-espresso shadow-soft sm:absolute sm:top-0 sm:mt-0 sm:h-4 sm:w-4 sm:translate-x-0 sm:-left-2.25 sm:right-auto" />

                <div>
                  <p className="font-display text-xl font-bold text-gold">
                    {event.year}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold text-espresso dark:text-cream">
                    {event.title}
                  </h4>
                  <p className="mt-1 font-body text-sm text-coffee/70 dark:text-latte/70">
                    {event.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="relative mt-28 overflow-hidden py-24">
        <div className="absolute inset-0 bg-espresso"></div>
        <FloatingBean />
        <div className="container-page relative">
          <SectionTitle
            light
            eyebrow="By the Numbers"
            title="Linn Caf&eacute; in Numbers"
          />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <CounterStat
                key={s.id}
                isHero={false}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
