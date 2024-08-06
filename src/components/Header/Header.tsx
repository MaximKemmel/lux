import { useState } from "react";
import { Link } from "react-router-dom";

import globalStyles from "../../App.module.sass";
import styles from "./Header.module.sass";

import Logo from "../../assets/images/logo.png";
import EngIcon from "../../assets/images/eng.png";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>
          <nav className={styles.links}>
            <Link to="">About apartment</Link>
            <Link to="">Services</Link>
            <Link to="">Question–Answer</Link>
          </nav>
        </div>
        <div className={styles.actions}>
          <div className={styles.language_selector}>
            <div className={styles.icon}>
              <img src={EngIcon} alt="" />
            </div>
            ENG
          </div>
          <button type="button">
            <div className={globalStyles.content}>Book</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
