import { useEffect, useRef } from "react";
import Slider from "react-slick";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSeletor";

import globalStyles from "../../App.module.sass";
import styles from "./Service.module.sass";
import "../../slider.css";

import { ServicesList } from "../../data/servicesList";
import { IService } from "../../types/service";

import RooftopImage from "../../assets/images/rooftop.jpg";
import MeetingRoomImage from "../../assets/images/meeting_room.jpg";
import SpaImage from "../../assets/images/spa.png";
import RooftopSmallImage from "../../assets/images/rooftop_small.png";
import MeetingSmallRoomImage from "../../assets/images/meeting_room_small.png";
import SpaSmallImage from "../../assets/images/spa_small.png";
import ArrowTopRightIcon from "../../assets/images/arrow_top_right.png";

const ServicePage = () => {
  const { setSelectedService } = useActions();
  const selectedService = useTypedSelector((state) => state.mainReducer.selectedService);
  const slider = useRef(null as Slider);
  const smallImages = [RooftopSmallImage, MeetingSmallRoomImage, SpaSmallImage];

  const settings = {
    infinite: false,
    slidesToShow: 1,
    vertical: true,
    autoplay: false,
    arrows: false,
    afterChange: (index) => {
      setSelectedService(index);
    },
  };

  useEffect(() => {
    var service = ServicesList.find((serviceItem: IService) => serviceItem.id === selectedService);
    document.title = service!.name;
    window.scrollTo({ top: 0, behavior: "smooth" });
    slider?.current?.slickGoTo(selectedService);
  }, []);

  useEffect(() => {
    var service = ServicesList.find((serviceItem: IService) => serviceItem.id === selectedService);
    document.title = service!.name;
    slider?.current?.slickGoTo(selectedService);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedService]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <Slider ref={slider} {...settings}>
          <div className={styles.image}>
            <img src={RooftopImage} alt="" />
          </div>
          <div className={styles.image}>
            <img src={MeetingRoomImage} alt="" />
          </div>
          <div className={styles.image}>
            <img src={SpaImage} alt="" />
          </div>
        </Slider>
        <div className={styles.content}>
          <div className={styles.name}>
            {ServicesList.find((serviceItem: IService) => serviceItem.id === selectedService)!.name}
          </div>
          <button type="button" className={styles.book}>
            <div className={globalStyles.content}>{`Book ${ServicesList.find(
              (serviceItem: IService) => serviceItem.id === selectedService
            )!.name.toLowerCase()}`}</div>
          </button>
        </div>
        <div className={styles.services_list}>
          {ServicesList.map((service: IService, index: number) => (
            <div
              className={`${styles.service} ${selectedService === service.id ? styles.active : ""}`}
              onClick={() => setSelectedService(service.id)}
            >
              <img src={smallImages[index]} alt="" />
              <div className={styles.info}>
                <div className={styles.name}>
                  {service.name}
                  <img src={ArrowTopRightIcon} alt="" />
                </div>
                <div className={styles.price}>{`Orders from $${service.min_price}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.main_info}`}>
        <div className={styles.images}>
          <img className={styles.top} src={RooftopImage} alt="" />
          <img className={styles.bottom} src={MeetingRoomImage} alt="" />
        </div>
        <div className={styles.values}>
          <div className={styles.item}>
            <div className={styles.value}>65</div>
            <div className={styles.label}>pax. max. capacity</div>
          </div>
          <div className={styles.item}>
            <div className={styles.value}>235</div>
            <div className={styles.label}>m²</div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper_container} ${styles.line}`} />
      <div className={`${styles.wrapper_container} ${styles.about}`}>
        <div className={styles.title}>
          LUX Hotels presenterer det første og største taket med møterom og bar i Lillestrøm
        </div>
        <div className={styles.description}>
          I likhet med de andre styrerommene, men med plass til 14 personer, er dette rommet oppkalt etter kunstneren Gerhard
          Munthe, hvis drømmende og tidsriktige illustrasjoner av norsk folklore inspirerte interiøret
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
