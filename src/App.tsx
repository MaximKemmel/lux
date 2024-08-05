import { Route, Routes } from "react-router-dom";

import styles from "./App.module.sass";

import HomePage from "./pages/Home/Home";

function App() {
  return (
    <section className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </section>
  );
}

export default App;
