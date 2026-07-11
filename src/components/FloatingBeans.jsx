const BEANS = [
  { top: "12%", left: "6%", size: 22, delay: "0s", anim: "animate-float" },
  {
    top: "68%",
    left: "3%",
    size: 16,
    delay: "1.2s",
    anim: "animate-float-slow",
  },
  {
    top: "24%",
    left: "92%",
    size: 18,
    delay: "0.6s",
    anim: "animate-float-slow",
  },
  { top: "78%", left: "90%", size: 24, delay: "1.8s", anim: "animate-float" },
  {
    top: "48%",
    left: "96%",
    size: 14,
    delay: "0.3s",
    anim: "animate-float-slow",
  },
];

function Bean({ size }) {
  return (
    <span
      className="bean block rounded-[50%] opacity-30 shadow-soft dark:opacity-20"
      style={{ width: size, height: size * 1.35, transform: "rotate(-15deg)" }}
    >
      <span className="block h-full w-[1.5px] mx-auto bg-cream/40" />
    </span>
  );
}

export default function FloatingBeans({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {BEANS.map((b, i) => (
        <div
          key={i}
          className={`absolute ${b.anim}`}
          style={{ top: b.top, left: b.left, animationDelay: b.delay }}
        >
          <Bean size={b.size} />
        </div>
      ))}
    </div>
  );
}
