import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, X, XCircle } from "lucide-react";
import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "success", duration = 5000) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, type }]);
      window.setTimeout(() => removeToast(id), duration);
    },
    [removeToast],
  );
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-100 flex w-full max-w-sm flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = ICONS[toast.type] || Info;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: 60,
                  scale: 0.9,
                  transition: { duration: 0.25 },
                }}
                transition={{
                  type: "spring",
                  scale: 0.9,
                  stiffness: 260,
                  damping: 22,
                }}
                className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-latte/50 bg-white/90 p-4 pr-3 shadow-soft-lg backdrop-blur-xl dark:border-white/10 dark:bg-espresso/90"
              >
                <Icon
                  size={20}
                  className={
                    toast.type === "success"
                      ? "mt-0.5 shrink-0 text-emerald-600"
                      : toast.type === "error"
                        ? "mt-0.5 shrink-0 text-red-500"
                        : "mt-0.5 shrink-0 text-gold"
                  }
                />
                <p className="font-body text-sm text-espresso dark:text-cream">
                  {toast.message}
                </p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="ml-auto shrink-0 rounded-full p-1 text-coffee/50 transition hover:bg-latte/40 hover:text-espresso dark:text-latte/50 dark:hover:bg-white/10 dark:hover:text-cream"
                  aria-label="Dismiss notification"
                >
                  <X size={14} />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");

  return ctx;
}
