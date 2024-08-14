import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import globalStyles from "../../App.module.sass";
import styles from "./Header.module.sass";

import Logo from "../../assets/images/logo.png";
import BlackLogo from "../../assets/images/footer_logo.png";
import EngIcon from "../../assets/images/eng.png";
import NorIcon from "../../assets/images/nor.png";
import MenuIcon from "../../assets/images/menu.png";
import CloseIcon from "../../assets/images/close.png";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isNavActive, setIsNavActive] = useState(false);
  const [isLanguageSelectorActive, setIsLanguageSelectorActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  useEffect(() => {
    setIsLanguageSelectorActive(false);
  }, [selectedLanguage]);

  const handleLinkOnClick = (link: string) => {
    if (pathname === "/") {
      var element = document.getElementById(link);
      if (element !== null) {
        element!.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      if (pathname !== `/${link}`) {
        navigate(`/${link}`);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <div className={`${styles.container} ${pathname === "/terms" || pathname === "/privacy_policy" ? styles.dark : ""}`}>
        <div className={styles.navigation}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            <img src={pathname === "/terms" || pathname === "/privacy_policy" ? BlackLogo : Logo} alt="" />
          </div>
          <nav className={styles.links}>
            <div className={styles.link} onClick={() => handleLinkOnClick("apartament")}>
              About apartament
            </div>
            <div className={styles.link} onClick={() => handleLinkOnClick("service")}>
              Services
            </div>
            <Link to="">Question–Answer</Link>
          </nav>
        </div>
        <div className={styles.actions}>
          <div className={styles.language_selector}>
            <div
              className={`${styles.language} ${isLanguageSelectorActive ? styles.active : ""}`}
              onClick={() => setIsLanguageSelectorActive(!isLanguageSelectorActive)}
            >
              <img src={selectedLanguage === "En" ? EngIcon : NorIcon} alt="" />
              <div className={styles.language_link}>{selectedLanguage}</div>
            </div>
            <div className={`${styles.languages_list} ${isLanguageSelectorActive ? styles.active : ""}`}>
              <div
                className={`${styles.language} ${selectedLanguage === "En" ? styles.active : ""}`}
                onClick={() => setSelectedLanguage("En")}
              >
                <img src={EngIcon} alt="" />
                <div className={styles.language_link}>English</div>
              </div>
              <div
                className={`${styles.language} ${selectedLanguage === "No" ? styles.active : ""}`}
                onClick={() => setSelectedLanguage("No")}
              >
                <img src={NorIcon} alt="" />
                <div className={styles.language_link}>Norway</div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className={pathname === "/terms" || pathname === "/privacy_policy" ? globalStyles.secondary : ""}
          >
            <div className={globalStyles.content}>Book</div>
          </button>
          <div className={styles.menu_button} onClick={() => setIsNavActive(!isNavActive)}>
            <img src={isNavActive ? CloseIcon : MenuIcon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
