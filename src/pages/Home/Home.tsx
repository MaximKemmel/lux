import { useEffect, useState } from "react";

import styles from "./Home.module.sass";

import BackgroundVideo from "../../assets/video/home_background.mp4";
import LandstadsIcon from "../../assets/images/landstads_gate.png";
import StationIcon from "../../assets/images/station.png";
import ApartmentsIcon from "../../assets/images/themed_apartments.png";
import SquareIcon from "../../assets/images/square.png";
import CheckInIcon from "../../assets/images/check_in.png";
import CheckOutIcon from "../../assets/images/check_out.png";
import LeiraImage from "../../assets/images/leira.png";
import LofotenImage from "../../assets/images/lofoten.png";
import HardengerfjordImage from "../../assets/images/hardengerfjord.png";
import ØstmarkaImage from "../../assets/images/Østmarka.png";
import ØsterdalenImage from "../../assets/images/Østerdalen.png";

const HomePage = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);

  useEffect(() => {
    document.title = "LUX";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.face}>
        <div className={styles.video_container}>
          <video className="videoTag" autoPlay loop muted>
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          <div className={styles.welcome}>
            <div className={styles.subtitle}>Welcome to LUX</div>
            <div className={styles.title}>
              Hotel
              <br />
              Apartments
              <br />
              in Lillestrøm
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={LandstadsIcon} alt="" />
              </div>
              <div className={styles.text}>Landstads gate 60</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={StationIcon} alt="" />
              </div>
              <div className={styles.text}>7 min to Lillestrøm station</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={ApartmentsIcon} alt="" />
              </div>
              <div className={styles.text}>Themed apartments</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={SquareIcon} alt="" />
              </div>
              <div className={styles.text}>Min square 33m²</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={CheckInIcon} alt="" />
              </div>
              <div className={styles.text}>Check–in from 4 pm</div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <img src={CheckOutIcon} alt="" />
              </div>
              <div className={styles.text}>Check–out from 11 am</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.themes}`}>
        <div className={styles.title}>
          Discover five different themes on each floor
          <div className={styles.description}>Apartaments from 33m² studios to 65m²</div>
        </div>
        <div className={styles.themes_container}>
          <div className={styles.themes_list}>
            <div
              className={`${styles.theme} ${selectedTheme === 0 ? styles.active : ""}`}
              onClick={() => setSelectedTheme(0)}
            >
              <img src={LeiraImage} alt="" />
              <div className={styles.content}>
                <div className={styles.name}>Leira</div>
                <div className={styles.description}>Studio</div>
              </div>
            </div>
            <div
              className={`${styles.theme} ${selectedTheme === 1 ? styles.active : ""}`}
              onClick={() => setSelectedTheme(1)}
            >
              <img src={LofotenImage} alt="" />
              <div className={styles.content}>
                <div className={styles.name}>Lofoten</div>
                <div className={styles.description}>Studio with balcony</div>
              </div>
            </div>
            <div
              className={`${styles.theme} ${selectedTheme === 2 ? styles.active : ""}`}
              onClick={() => setSelectedTheme(2)}
            >
              <img src={HardengerfjordImage} alt="" />
              <div className={styles.content}>
                <div className={styles.name}>Hardengerfjord</div>
                <div className={styles.description}>Apartment with balcony</div>
              </div>
            </div>
            <div
              className={`${styles.theme} ${selectedTheme === 3 ? styles.active : ""}`}
              onClick={() => setSelectedTheme(3)}
            >
              <img src={ØstmarkaImage} alt="" />
              <div className={styles.content}>
                <div className={styles.name}>Østmarka</div>
                <div className={styles.description}>Deluxe studio</div>
              </div>
            </div>
            <div
              className={`${styles.theme} ${selectedTheme === 4 ? styles.active : ""}`}
              onClick={() => setSelectedTheme(4)}
            >
              <img src={ØsterdalenImage} alt="" />
              <div className={styles.content}>
                <div className={styles.name}>Østerdalen</div>
                <div className={styles.description}>Deluxe apartment with balcony</div>
              </div>
            </div>
          </div>
          <div className={styles.slider_wrapper}></div>
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.complexes}`}>
        <div className={styles.title}>
          The complex will soon include a restaurant, wine bar, spa, sky bar, event spaces, and a car care center. Our LUX
          P-Hus garage is operational, ideal for guests arriving by car
        </div>
        <div className={styles.complexes_list}>
          <div className={`${styles.complex} ${styles.small}`}>
            <div className={styles.content}>
              <div className={styles.main_info}>
                <div className={styles.tags_list}>
                  <div className={styles.tag}>Good spirits</div>
                  <div className={styles.tag}>Alcohol 18+</div>
                  <div className={styles.tag}>New people</div>
                </div>
                <div className={styles.name}>Rooftop</div>
              </div>
              <div className={styles.actions}></div>
            </div>
          </div>
          <div className={`${styles.complex} ${styles.medium}`}>
            <div className={styles.content}>
              <div className={styles.main_info}>
                <div className={styles.tags_list}>
                  <div className={styles.tag}>Business meetings</div>
                  <div className={styles.tag}>Work</div>
                </div>
                <div className={styles.name}>Meeting room</div>
              </div>
              <div className={styles.actions}></div>
            </div>
          </div>
          <div className={`${styles.complex} ${styles.big}`}>
            <div className={styles.content}>
              <div className={styles.main_info}>
                <div className={styles.tags_list}>
                  <div className={styles.tag}>Spa</div>
                  <div className={styles.tag}>Yoga</div>
                  <div className={styles.tag}>Massage</div>
                </div>
                <div className={styles.name}>Spa</div>
              </div>
              <div className={styles.actions}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
