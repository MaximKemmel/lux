import styles from "./Footer.module.sass";

import Logo from "../../assets/images/footer_logo.png";
import EmailIcon from "../../assets/images/email.png";
import PhoneIcon from "../../assets/images/phone.png";
import LocationIcon from "../../assets/images/location.png";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import DesignerIcon from "../../assets/images/designer.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.main_info}>
          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={styles.general}>
            <div className={styles.title}>General</div>
            <div className={styles.items}>
              <div className={styles.item}>
                <img src={EmailIcon} alt="" />
                stay@luxhotel.no
              </div>
              <div className={styles.item}>
                <img src={PhoneIcon} alt="" />
                +47 63 81 90 00
              </div>
              <div className={styles.item}>
                <img src={LocationIcon} alt="" />
                Landstads gate 60
              </div>
            </div>
          </div>
          <div className={styles.themes_services}>
            <div className={styles.themes}>
              <div className={styles.title}>Apartments themes</div>
              <div className={styles.items}>
                <div className={styles.item}>Leira</div>
                {", "}
                <div className={styles.item}>Lofoten</div>
                {", "}
                <div className={styles.item}>Østmarka</div>
                {", "}
                <div className={styles.item}>Hardengerfjord</div>
                {", "}
                <div className={styles.item}>Østerdalen</div>
              </div>
            </div>
            <div className={styles.services}>
              <div className={styles.title}>Services</div>
              <div className={styles.items}>
                <div className={styles.item}>Sky bar</div>
                {", "}
                <div className={styles.item}>Spa</div>
                {", "}
                <div className={styles.item}>Meeting room</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.empty}></div>
          <div className={styles.socials_list}>
            <div className={styles.social}>
              <img src={FacebookIcon} alt="" />
              Follow us
              <br />
              on facebook
            </div>
            <div className={styles.social}>
              <img src={InstagramIcon} alt="" />
              Follow us
              <br />
              on instagram
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.designer}>
            <img src={DesignerIcon} alt="" />
          </div>
          <div className={styles.links}>
            <div className={styles.link}>Terms @ Conditions</div>
            <div className={styles.link}>Privacy policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
