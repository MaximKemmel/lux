import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import styles from "./Apartaments.module.sass";
import "../../slider.css";

import { ApartamentsList } from "../../data/apartamentsList";
import { IApartament } from "../../types/apartament";

import ArrowTopRightIcon from "../../assets/images/arrow_top_right.png";
import GalleryImageOne from "../../assets/images/galery_1.png";
import GalleryImageTwo from "../../assets/images/galery_2.png";
import ArrowRightIcon from "../../assets/images/arrow_right.png";

const ApartamentsPage = () => {
  const [selectedApartament, setSelectedApartament] = useState(0);
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
        </div>
        <div className={styles.apartaments_list}>
          {ApartamentsList.map((apartament: IApartament, index: number) => (
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
    </div>
  );
};

export default ApartamentsPage;
