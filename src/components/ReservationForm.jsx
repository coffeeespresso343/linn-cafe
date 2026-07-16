import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  User,
  Users,
} from "lucide-react";
import { validateReservation } from "../utils/validators.js";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  request: "",
};
const FIELD_ICONS = {
  name: User,
  email: Mail,
  phone: Phone,
  date: Calendar,
  time: Clock,
  guests: Users,
};

const ReservationForm = () => {
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
    const validationErrors = validateReservation(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrors((err) => ({ ...err, [name]: undefined }));
      // Toast later
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1200));
    setIsSubmitting(false);
    // Toast Later
    setValues(initialValues);
  };

  const inputWrap = (name, label, type = "text", extra = {}) => {
    const Icon = FIELD_ICONS[name];

    return (
      <div>
        <label
          htmlFor={name}
          className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
        >
          {label}*
        </label>
        <div className="relative min-w-0">
          {Icon && (
            <Icon
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
            />
          )}
          <input
            id={name}
            name={name}
            type={type}
            value={values[name]}
            onChange={handleChange}
            className={`input-base w-full min-w-0 ${Icon ? "pl-11" : ""} ${errors[name] ? "border-red-400 focus:border-red-400 focus:ring-red-100" : ""}`}
            {...extra}
          />
        </div>
        {errors[name] && (
          <p className="mt-1.5 font-body text-xs text-red-500">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      noValidate
      className="card-surface grid grid-cols-1 gap-5 p-7 sm:grid-cols-2 sm:p-9"
    >
      {inputWrap("name", "Full Name", "text", { placeholder: "Linn Khant" })}

      {inputWrap("email", "Email Address", "email", {
        placeholder: "linnkhant@gmail.com",
      })}

      {inputWrap("phone", "Phone Number", "tel", {
        placeholder: "+95 9 123 456 789",
      })}

      <div className="relative min-w-0">
        <label
          htmlFor="guests"
          className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
        >
          Number of Guests*
        </label>
        <div className="relative">
          <Users
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
          />
          <select
            name="guests"
            id="guests"
            value={values.guests}
            onChange={handleChange}
            className={`input-base min-w-0 appearance-none pl-11 ${errors.guests ? "border-red-400" : ""}`}
          >
            <option value="" className="dark:bg-espresso-dark">
              Select guests
            </option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="dark:bg-espresso-dark">
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-coffee/40 dark:text-latte/40"
          />
        </div>
        {errors.guests && (
          <p className="mt-1.5 font-body text-xs text-red-500">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:contents gap-4">
        <div className="min-w-0">{inputWrap("date", "Date", "date")}</div>

        <div className="min-w-0">{inputWrap("time", "Time", "time")}</div>
      </div>

      <div className="min-w-0 sm:col-span-2">
        <label
          htmlFor="request"
          className="mb-2 block font-body text-xs font-medium uppercase tracking-wide text-coffee/70 dark:text-latte/70"
        >
          Special Request{" "}
          <span className="normal-case text-coffee/40">(optional)</span>
        </label>
        <div className="relative min-w-0">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute left-4 top-4 text-coffee/40 dark:text-latte/40"
          />
          <textarea
            name="request"
            id="request"
            rows={4}
            value={values.request}
            onChange={handleChange}
            placeholder="Window seat, birthday celebration, dietary notes..."
            className="input-base resize-none pl-11"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <LoadingSpinner size={16} /> Reserving...
            </div>
          ) : (
            "Confirm Reservation"
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default ReservationForm;
