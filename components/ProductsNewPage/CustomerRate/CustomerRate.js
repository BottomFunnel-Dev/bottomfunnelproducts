import React from "react";
import styles from "./CustomerRate.module.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
export const CustomerRate = () => {
  const settings = {
    infinite: true,
    dots: true,
    accessibility: false,
    autoplaySpeed: 300,
    speed: 100,
    slidesToScroll: 1,
    initialSlide: 3,
    draggable: true,
    touchMove: false,
    slidesToShow: 3,
    pauseOnHover: false,
    // autoplay: true,
    cssEase: "linear",
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          draggable: true,
          touchMove: true,
        },
      },
    ],
  };

  return (
    <div className={styles.customerRateMainDiv}>
      <h1>Customer has Consistently rated around 4.7 / 5</h1>
      <div className={styles.customerRateDContainer}>
        <Slider {...settings}>
          <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.customerText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi veritatis pariatur, quis harum inventore eos omnis..
              </p>
            </div>
            <div className={styles.customerRateImage}>
              <img src="/Images/productmainpageicons/appfutura.png" />
            </div>
          </div>


          <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.customerText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi veritatis pariatur, quis harum inventore eos omnis..
              </p>
            </div>
            <div className={styles.customerRateImage}>
              <img src="/Images/productmainpageicons/appfutura.png" />
            </div>
          </div>


          <div className={styles.customerRatedata}>
            <div className={styles.customerStar}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.customerText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi veritatis pariatur, quis harum inventore eos omnis..
              </p>
            </div>
            <div className={styles.customerRateImage}>
              <img src="/Images/productmainpageicons/appfutura.png" />
            </div>
          </div>


        </Slider>
      </div>
    </div>
  );
};
