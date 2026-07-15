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

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 1400);

    return () => window.clearTimeout(t);
  }, []);

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
