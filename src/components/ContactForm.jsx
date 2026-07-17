import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessagesSquare, Send, User } from "lucide-react";
import { validateContact } from "../utils/validators.js";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";
import { useToast } from "../context/ToastContext.jsx";

const initialValues = { name: "", email: "", message: "" };
const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateContact(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    showToast("Message sent! We'll get back to you within a day.", "success");
    setValues(initialValues);
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      noValidate
      className="card-surface space-y-5 p-7 sm:p-9"
    >
      <div>
        <label
          htmlFor="c-name"
          className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
        >
          Full Name*
        </label>
        <div className="relative">
          <User
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
          />
          <input
            type="text"
            id="c-name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`input-base pl-11 ${errors.name ? "border-red-400" : ""}`}
          />
        </div>
        {errors.name && (
          <p className="mt-1.5 font-body text-xs text-red-500">{errors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="c-email"
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
            id="c-email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`input-base pl-11 ${errors.name ? "border-red-400" : ""}`}
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
          htmlFor="c-message"
          className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
        >
          Message*
        </label>
        <div className="relative">
          <MessagesSquare
            size={16}
            className="pointer-events-none absolute left-4 top-4 text-coffee/40 dark:text-latte/40"
          />
          <textarea
            name="message"
            id="c-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            placeholder="How can we help?"
            className={`input-base resize-none pl-11 ${errors.message ? "border-red-500" : ""}`}
          />
        </div>
        {errors.message && (
          <p className="mt-1.5 font-body text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
        icon={isSubmitting ? "undefined" : Send}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-1.5">
            <LoadingSpinner size={16} /> Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
