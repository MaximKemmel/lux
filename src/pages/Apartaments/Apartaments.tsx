import { useEffect, useRef } from "react";
import Slider from "react-slick";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

import globalStyles from "../../App.module.sass";
import styles from "./Apartaments.module.sass";
import "../../slider.css";

import { ApartamentsList } from "../../data/apartamentsList";
import { IApartament } from "../../types/apartament";

import ArrowTopRightIcon from "../../assets/images/arrow_top_right.png";
import GalleryImageOne from "../../assets/images/galery_1.png";
import GalleryImageTwo from "../../assets/images/galery_2.png";
import ArrowRightIcon from "../../assets/images/arrow_right.png";
import CheckIcon from "../../assets/images/check.png";

const ApartamentsPage = () => {
  const { setSelectedApartament } = useActions();
  const selectedApartament = useTypedSelector((state) => state.mainReducer.selectedApartament);
  const slider = useRef(null as Slider);
  const gallerySlider = useRef(null as Slider);

  const settings = {
    infinite: false,
    swipeToSlide: false,
    slidesToShow: 1,
    vertical: true,
    autoplay: false,
    arrows: false,
    afterChange: (index) => {
      setSelectedApartament(index);
    },
  };

  const gallerySettings = {
    className: "slider variable-width",
    infinite: true,
    swipeToSlide: false,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: false,
    arrows: false,
  };

  useEffect(() => {
    document.title = ApartamentsList[0].name;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    var apartament = ApartamentsList.find((apartamentItem: IApartament) => apartamentItem.id === selectedApartament);
    document.title = apartament!.name;
    slider?.current?.slickGoTo(selectedApartament);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedApartament]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <Slider ref={slider} {...settings}>
          {ApartamentsList.map((apartamentItem: IApartament) => (
            <div className={styles.image}>
              <img src={apartamentItem.main_image} alt="" />
            </div>
          ))}
        </Slider>
        <div className={styles.content}>
          <div className={styles.name}>
            {ApartamentsList.find((apartamentItem: IApartament) => apartamentItem.id === selectedApartament)!.name}
          </div>
          <div className={styles.apartaments_list}>
            {ApartamentsList.map((apartament: IApartament) => (
              <div
                className={`${styles.apartament} ${selectedApartament === apartament.id ? styles.active : ""}`}
                onClick={() => setSelectedApartament(apartament.id)}
              >
                <img src={apartament.icon} alt="" />
                <div className={styles.info}>
                  <div className={styles.name}>
                    {apartament.name}
                    <img src={ArrowTopRightIcon} alt="" />
                  </div>
                  <div className={styles.description}>{apartament.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.features}`}>
        <div className={styles.main_info}>
          <div className={styles.title_container}>
            <div className={styles.title}>Apartment features</div>
            <div className={styles.description}>Apartaments from 33m² studios to 65m²</div>
          </div>
          <div className={styles.line} />
          <div className={styles.features_list}>
            <div className={styles.feature}>
              <div className={styles.label}>Hardengerfjord</div>
              <div className={styles.value}>Dining table for 6</div>
            </div>
            <div className={styles.feature}>
              <div className={styles.label}>Type</div>
              <div className={styles.value}>2 bedrooms</div>
            </div>
            <div className={styles.feature}>
              <div className={styles.label}>Hardengerfjord</div>
              <div className={styles.value}>Balcony</div>
            </div>
            <div className={styles.feature}>
              <div className={styles.label}>Hardengerfjord</div>
              <div className={styles.value}>180cm bed and 2 90cm beds</div>
            </div>
          </div>
        </div>
        <img
          className={styles.schema}
          src={ApartamentsList.find((apartament: IApartament) => apartament.id === selectedApartament)!.scheme_image}
          alt=""
        />
        <div className={styles.more_container}>
          <div className={styles.more_list}>
            <div className={styles.label}>General</div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              One 180cm king-size double bed and 90x200cm twin beds
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Renowned Scandinavian Høie bedding.
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              58” TV with casting in the main room (no TV channels)
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              In-room safe
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Iron facilities
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Exclusive Molton Brown toiletries
            </div>
          </div>
          <div className={styles.more_list}>
            <div className={styles.label}>Other</div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Combined built-in bidet
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Walk-in shower
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Hairdryer
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Nespresso coffee machine and kettle
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Kitchen with dishwasher, fridge, freezer, and a combo stove-microwave
            </div>
            <div className={styles.value}>
              <img src={CheckIcon} alt="" />
              Basic cooking equipment and kitchenware
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.gallery}`}>
        <Slider ref={gallerySlider} {...gallerySettings}>
          <div className={styles.image}>
            <img src={GalleryImageOne} alt="" />
          </div>
          <div className={styles.image}>
            <img src={GalleryImageTwo} alt="" />
          </div>
        </Slider>
        <div className={styles.action} onClick={() => gallerySlider?.current?.slickNext()}>
          <img className={styles.arrow} src={ArrowRightIcon} alt="" />
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.book}`}>
        The complex will soon include a restaurant, wine bar, spa, sky bar, event spaces, and a car care center. Our LUX
        P-Hus garage is operational, ideal for guests arriving by car
        <button type="button" className={globalStyles.secondary}>
          <div className={globalStyles.content}>Book apartament</div>
        </button>
      </div>
    </div>
  );
};

export default ApartamentsPage;
