import { Route, Routes } from "react-router-dom";

import styles from "./App.module.sass";

import HomePage from "./pages/Home/Home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
