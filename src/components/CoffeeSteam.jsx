export default function CoffeeSteam({ className = "" }) {
  return (
    <div
      className={`pointer-events-none flex items-end justify-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <span className="h-10 w-2 rounded-full bg-cream/50 blur-xs animate-steam1" />
      <span className="h-14 w-2.5 rounded-full bg-cream/60 blur-[5px] animate-steam2" />
      <span className="h-10 w-2 rounded-full bg-cream/50 blur-xs animate-steam3" />
    </div>
  );
}
