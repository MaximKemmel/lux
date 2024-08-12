import { useNavigate } from "react-router-dom";

import { useActions } from "../../hooks/useActions";

import styles from "./Footer.module.sass";

import { ServicesList } from "../../data/servicesList";
import { IService } from "../../types/service";
import { ApartamentsList } from "../../data/apartamentsList";
import { IApartament } from "../../types/apartament";

import Logo from "../../assets/images/footer_logo.png";
import EmailIcon from "../../assets/images/email.png";
import PhoneIcon from "../../assets/images/phone.png";
import LocationIcon from "../../assets/images/location.png";
import FacebookIcon from "../../assets/images/facebook.png";
import InstagramIcon from "../../assets/images/instagram.png";
import DesignerIcon from "../../assets/images/designer.png";

const Footer = () => {
  const navigate = useNavigate();
  const { setSelectedService, setSelectedApartament } = useActions();

  const handleServiceOnClick = (id: number) => {
    setSelectedService(id);
    navigate("/service");
  };

  const handleApartamentOnClick = (id: number) => {
    setSelectedApartament(id);
    navigate("/apartament");
  };

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.main_info}>
          <div className={styles.logo} onClick={() => navigate("/")}>
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
          <div className={styles.socials_mobile}>
            <div className={styles.empty}></div>
            <div className={styles.socials_list}>
              <a className={styles.social} href="https://www.facebook.com/luxhotelnorway/" target="_blank">
                <img src={FacebookIcon} alt="" />
                Follow us
                <br />
                on facebook
              </a>
              <a className={styles.social} href="https://www.instagram.com/luxhotelnorway/" target="_blank">
                <img src={InstagramIcon} alt="" />
                Follow us
                <br />
                on instagram
              </a>
            </div>
          </div>
          <div className={styles.themes_services}>
            <div className={styles.themes}>
              <div className={styles.title}>Apartments themes</div>
              <div className={styles.items}>
                {ApartamentsList.map((apartament: IApartament, index: number) => (
                  <>
                    {index > 0 ? ", " : null}
                    <div className={styles.item} onClick={() => handleApartamentOnClick(apartament.id)}>
                      {apartament.name}
                    </div>
                  </>
                ))}
              </div>
              <div className={styles.items_mobile}>
                {ApartamentsList.map((apartament: IApartament) => (
                  <div className={styles.item} onClick={() => handleApartamentOnClick(apartament.id)}>
                    {apartament.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.themes}>
              <div className={styles.title}>Services</div>
              <div className={styles.items}>
                {ServicesList.map((service: IService, index: number) => (
                  <>
                    {index > 0 ? ", " : null}
                    <div className={styles.item} onClick={() => handleServiceOnClick(service.id)}>
                      {service.name}
                    </div>
                  </>
                ))}
              </div>
              <div className={styles.items_mobile}>
                {ServicesList.map((service: IService) => (
                  <div className={styles.item} onClick={() => handleServiceOnClick(service.id)}>
                    {service.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.empty}></div>
          <div className={styles.socials_list}>
            <a className={styles.social} href="https://www.facebook.com/luxhotelnorway/" target="_blank">
              <img src={FacebookIcon} alt="" />
              Follow us
              <br />
              on facebook
            </a>
            <a className={styles.social} href="https://www.instagram.com/luxhotelnorway/" target="_blank">
              <img src={InstagramIcon} alt="" />
              Follow us
              <br />
              on instagram
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.designer}>
            <img src={DesignerIcon} alt="" />
          </div>
          <div className={styles.links}>
            <div className={styles.link} onClick={() => navigate("/terms")}>
              Terms @ Conditions
            </div>
            <div className={styles.link} onClick={() => navigate("/privacy_policy ")}>
              Privacy policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
