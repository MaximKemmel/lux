import styles from "./Home.module.sass";

import BackgroundVideo from "../../assets/video/home_background.mp4";
import LandstadsIcon from "../../assets/images/landstads_gate.png";
import StationIcon from "../../assets/images/station.png";
import ApartmentsIcon from "../../assets/images/themed_apartments.png";
import SquareIcon from "../../assets/images/square.png";
import CheckInIcon from "../../assets/images/check_in.png";
import CheckOutIcon from "../../assets/images/check_out.png";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
