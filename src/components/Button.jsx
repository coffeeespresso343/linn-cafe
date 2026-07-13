import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useState } from "react";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-espresso text-cream shadow-soft hover:shadow-glow dark:bg-gold dark:text-espresso-dark",
  gold: "bg-gold text-espresso shadow-soft hover:shadow-glow",
  outline:
    "border-2 border-cream/70 text-cream backdrop-blur-sm hover:bg-cream hover:text-espresso",
  ghost:
    "border border-espresso/20 text-espresso hover:border-gold hover:text-gold dark:border-cream/20 dark:text-cream",
};

const Button = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  className = "",
  icon: Icon,
  ...rest
}) => {
  const [ripples, setRipples] = useState([]);
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
    onClick?.(e);
  };

  const classes = cn("btn-base", VARIANTS[variant], className);

  const content = (
    <>
      {Icon && <Icon size={17} className="shrink-0" />}
      <span>{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-ping"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.045 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} onClick={handleClick} {...rest}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a
          href={href}
          className={classes}
          onClick={handleClick}
          target="_blank"
          rel="noreferrer"
          {...rest}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      onClick={handleClick}
      {...rest}
    >
      {content}
    </motion.button>
  );
};

export default Button;
