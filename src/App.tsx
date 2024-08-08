import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import styles from "./App.module.sass";

import HomePage from "./pages/Home/Home";
import ServicePage from "./pages/Service/Service";
import TermsPage from "./pages/Terms/Terms";
import PrivacyPolicyPage from "./pages/PrivacyPolicy/PrivacyPolicy";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <section className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
