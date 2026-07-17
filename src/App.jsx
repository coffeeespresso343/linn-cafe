import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Perks from "./pages/Perks";
import { useToast } from "./context/ToastContext";
import { useLocalStorage } from "./hooks/useLocalStorage";

const PageTranslation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PageTranslation>
                <Home />
              </PageTranslation>
            }
          />
          <Route
            path="/menu"
            element={
              <PageTranslation>
                <Menu />
              </PageTranslation>
            }
          />
          <Route
            path="/about"
            element={
              <PageTranslation>
                <About />
              </PageTranslation>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageTranslation>
                <Gallery />
              </PageTranslation>
            }
          />
          <Route
            path="/reservation"
            element={
              <PageTranslation>
                <Reservation />
              </PageTranslation>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTranslation>
                <Contact />
              </PageTranslation>
            }
          />
          <Route
            path="/perks"
            element={
              <PageTranslation>
                <Perks />
              </PageTranslation>
            }
          />
          <Route
            path="*"
            element={
              <PageTranslation>
                <NotFound />
              </PageTranslation>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useLocalStorage(
    "linn-cafe-visited",
    false,
  );
  const { showToast } = useToast();

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    showToast("Welcome to Linn Cafe! Take a look around.", "success");

    if (isLoading) return;

    if (sessionStorage.getItem("linn-cafe-toast-shown")) return;

    if (hasVisited) {
      showToast("Welcome back! Good to see you again \u2615", "info");
    } else {
      showToast("Welcome to Linn Cafe! Take a look around.", "success");
      setHasVisited(true);
    }

    sessionStorage.setItem("linn-cafe-toast-shown", "true");
  }, [isLoading, hasVisited, setHasVisited, showToast]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="isLoading" />}
        {!isLoading && <AnimatedRoutes />}
      </AnimatePresence>
    </>
  );
}

export default App;
