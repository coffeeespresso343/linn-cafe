import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useScrollTop } from "../hooks/useScrollTop";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  useScrollTop();

  return (
    <div className="flex min-h-screen flex-col bg-cream text-espresso dark:bg-espresso-dark dark:text-cream">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
