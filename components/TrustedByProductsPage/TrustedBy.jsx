import React from "react";
import styles from "./TrustedBy.module.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const TrustedBy = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 9000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.trustedByrotationalbox}>

      <div className={styles.trustedByContentDiv}>
        <div className={styles.trustedByHeadingDiv}>
          <h1>
            Trusted by 50K+ customers big and small
          </h1>

          <p>
            We are a leading provider of the modern SaaS solutions that solve multiple, complex business problems to
            companies of all sizes. Businesses from more than 120 countries around the world use Bottom Funnel products to
            delight their customers and employees every day.
          </p>
        </div>
      </div>

      <div className={styles.trustedByMainslide}>
        <Slider {...settings}>
          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/bluenile.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/brewdos.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img
                src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/bridgestone.png" alt="image"
              />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/fiver.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/itv.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/klarna.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/multichoice.png" alt="image" />
            </div>
          </div>

          <div className={styles.trustedByslideDivSection}>
            <div>
              <img src="https://d3op2l77j7wnti.cloudfront.net/Images/TrustedBy/travix.png" alt="image" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBy;
