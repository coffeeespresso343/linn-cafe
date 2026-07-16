import { motion } from "framer-motion";
import { HelpCircle, Mail, Send } from "lucide-react";
import { useState } from "react";
import { validateQuestion } from "../utils/validators";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

const initialValues = { emali: "", question: "" };

const AskQuestionForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateQuestion(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Toast later
      setErrors((err) => ({ ...err, [name]: undefined }));
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsSubmitting(false);
    // Toast later
    setValues(initialValues);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-surface mx-auto mt-10 max-w-2xl p-7 sm:p-9"
    >
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
          <HelpCircle size={20} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-espresso dark:text-cream">
            Didn't find your answer?
          </h3>
          <p className="font-body text-sm text-coffee/70 dark:text-latte/70">
            Ask us directly and we'll get back to you by email.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label
            htmlFor="q-email"
            className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
          >
            Email Address*
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
            />
            <input
              type="email"
              id="q-email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className={`input-base pl-11 ${errors.email ? "border-red-400" : ""}`}
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 font-body text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="q-question"
            className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
          >
            Your Question*
          </label>
          <div className="relative">
            <HelpCircle
              size={16}
              className="pointer-events-none absolute left-4 top-4 text-coffee/40 dark:text-latte/40"
            />
            <textarea
              id="q-question"
              name="question"
              rows={4}
              value={values.question}
              onChange={handleChange}
              placeholder="Ask about hours, catering, allergens, anything..."
              className={`input-base resize-none pl-11 ${errors.question ? "border-red-400" : ""}`}
            />
          </div>
          {errors.question && (
            <p className="mt-1.5 font-body text-xs text-red-500">
              {errors.question}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full "
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : Send}
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size={16} /> Sending...
            </>
          ) : (
            "Ask Your Question"
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default AskQuestionForm;
