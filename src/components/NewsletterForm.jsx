import { Send } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";
import { isValidEmail } from "../utils/validators";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

const NewsletterForm = ({ compact = false }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    showToast(
      "You're subscribed! Watch your inbox for our next roast notes.",
      "success",
    );

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={compact ? "" : "mx-auto max-w-md"}
    >
      <div className="flex items-stretch gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="Your email address"
          aria-label="Email address"
          className={`w-full rounded-full border px-4 py-3 font-body text-sm outline-none transition-all duration-300 ${
            compact
              ? "border-cream/20 bg-cream/5 text-cream placeholder:text-latte/40 focus:border-gold"
              : "border-latte bg-white/70 text-espresso placeholder:text-coffee/40 focus:border-gold focus:ring-4 focus:ring-gold/15"
          } ${error ? "border-red-400" : ""}`}
        />
        <button
          type="submit"
          disabled={submitting}
          aria-label="Subscribe to newsletter"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-espresso shadow-soft transition-all duration-300 hover:shadow-glow disabled:opacity-60"
        >
          {submitting ? <LoadingSpinner size={16} /> : <Send size={16} />}
        </button>
      </div>
      {error && <p className="mt-2 font-body text-xs text-red-400">{error}</p>}
    </form>
  );
};

export default NewsletterForm;
