import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card-surface overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden bg-latte/50 dark:bg-white/5">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <div className="h-4 w-2/3 rounded-full bg-latte/50 dark:bg-white/10" />
        <div className="h-3 w-full rounded-full bg-latte/40 dark:bg-white/5" />
        <div className="h-3 w-4/5 rounded-full bg-latte/40 dark:bg-white/5" />
        <div className="h-5 w-16 rounded-full bg-latte/50 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default SkeletonCard;
