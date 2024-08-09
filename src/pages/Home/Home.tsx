import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { useActions } from "../../hooks/useActions";

import globalStyles from "../../App.module.sass";
import styles from "./Home.module.sass";
import "../../slider.css";

import { ServicesList } from "../../data/servicesList";
import { ApartamentsList } from "../../data/apartamentsList";
import { IService } from "../../types/service";
import { IServiceTag } from "../../types/serviceTag";
import { IApartament } from "../../types/apartament";

import BackgroundVideo from "../../assets/video/home_background.mp4";
import LandstadsIcon from "../../assets/images/landstads_gate.png";
import StationIcon from "../../assets/images/station.png";
import ApartmentsIcon from "../../assets/images/themed_apartments.png";
import SquareIcon from "../../assets/images/square.png";
import CheckInIcon from "../../assets/images/check_in.png";
import CheckOutIcon from "../../assets/images/check_out.png";
import SliderImage from "../../assets/images/slider_image.jpg";
import ArrowLeftIcon from "../../assets/images/arrow_left.png";
import ArrowRightIcon from "../../assets/images/arrow_right.png";

const HomePage = () => {
  const navigate = useNavigate();
  const { setSelectedService } = useActions();
  const [selectedApartament, setSelectedApartament] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef(null as Slider);

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 7500,
    arrows: false,
    afterChange: (index) => {
      setCurrentIndex(index);
    },
  };

  useEffect(() => {
    document.title = "LUX";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleServiceOnClick = (id: number) => {
    setSelectedService(id);
    navigate("/service");
  };

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
      <div className={`${styles.wrapper_container} ${styles.themes}`} id="apartament">
        <div className={styles.title}>
          Discover five different themes on each floor
          <div className={styles.description}>Apartaments from 33m² studios to 65m²</div>
        </div>
        <div className={styles.themes_container}>
          <div className={styles.themes_list}>
            {ApartamentsList.map((apartament: IApartament) => (
              <div
                className={`${styles.theme} ${selectedApartament === apartament.id ? styles.active : ""}`}
                onClick={() => setSelectedApartament(apartament.id)}
              >
                <div className={styles.info}>
                  <img src={apartament.icon} alt="" />
                  <div className={styles.content}>
                    <div className={styles.name}>{apartament.name}</div>
                    <div className={styles.description}>{apartament.description}</div>
                  </div>
                </div>
                <div className={styles.about}>
                  <div className={styles.column}>
                    <div className={styles.item}>
                      <div className={styles.label}>Hardengerfjord</div>
                      <div className={styles.value}>Workplace</div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.label}>Type</div>
                      <div className={styles.value}>2 soverom</div>
                    </div>
                  </div>
                  <div className={styles.column}>
                    <div className={styles.item}>
                      <div className={styles.label}>Hardengerfjord</div>
                      <div className={styles.value}>180cm bed and bunk bed</div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.label}>Hardengerfjord</div>
                      <div className={styles.value}>Balcony</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.slider}>
            <Slider ref={slider} {...settings}>
              {Array(6)
                .fill(1)
                .map(() => (
                  <img className={styles.image} src={SliderImage} alt="" />
                ))}
            </Slider>
            <div className={styles.actions}>
              <div
                className={`${styles.action} ${currentIndex !== 0 ? styles.active : ""}`}
                onClick={() => slider?.current?.slickPrev()}
              >
                <img className={styles.arrow} src={ArrowLeftIcon} alt="" />
              </div>
              <div
                className={`${styles.action} ${currentIndex !== 5 ? styles.active : ""}`}
                onClick={() => slider?.current?.slickNext()}
              >
                <img className={styles.arrow} src={ArrowRightIcon} alt="" />
              </div>
            </div>
            <div className={styles.pagination}>
              {Array(6)
                .fill(1)
                .map((_value, index: number) => (
                  <div
                    className={`${styles.item} ${index === currentIndex ? styles.active : ""}`}
                    onClick={() => slider?.current?.slickGoTo(index)}
                  />
                ))}
            </div>
          </div>
        </div>
        <button type="button" className={globalStyles.secondary} onClick={() => navigate("/apartament")}>
          <div className={globalStyles.content}>Read about apartments</div>
        </button>
      </div>
      <div className={`${styles.wrapper_container} ${styles.services}`} id="service">
        <div className={styles.title}>
          The complex will soon include a restaurant, wine bar, spa, sky bar, event spaces, and a car care center. Our LUX
          P-Hus garage is operational, ideal for guests arriving by car
        </div>
        <div className={styles.services_list}>
          {ServicesList.map((service: IService) => (
            <div
              className={`${styles.service} ${service.id == 0 ? styles.small : ""} ${service.id == 1 ? styles.medium : ""} ${
                service.id == 2 ? styles.big : ""
              }`}
            >
              <div className={styles.content}>
                <div className={styles.main_info}>
                  <div className={styles.tags_list}>
                    {service.tags.map((serviceTag: IServiceTag) => (
                      <div className={styles.tag}>{serviceTag.tag}</div>
                    ))}
                  </div>
                  <div className={styles.name}>{service.name}</div>
                </div>
                <div className={styles.actions}>
                  <button type="button" className={styles.book}>
                    <div className={globalStyles.content}>{`Book ${service.name.toLowerCase()}`}</div>
                  </button>
                  <button
                    type="button"
                    className={`${globalStyles.blur} ${styles.more}`}
                    onClick={() => handleServiceOnClick(service.id)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
