import React from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.css";

export default function Testimonial() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        styles.prevButton + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i class="bi bi-arrow-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        styles.nextButton +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i class="bi bi-arrow-right"></i>
    </button>
  );

  const settings = {
    infinite: true,
    dots: false,
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: true,
    touchMove: false,
    slidesToShow: 1,
    pauseOnHover: false,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          draggable: true,
          touchMove: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 500,
        },
      },
    ],
  };

  const data = [
    {
      name: "Leslie al",
      degination: "CEO, SPJ Electronics",
      desc: "it was a seamless experience with bottom funnel team, they built our consumer electronics brand spj electronics in the terms of web development and mobile applications development. we recommend bottom funnel team to everybody who have some technical requirements. at the same time it was a fun and great experience with the team",
      image: "/Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Next Holidays",
      desc: "It was an great expreience with bottom funnel team. they have complete our D2C travel brand name called  Next Holidays We glad that we connect to the bottom funnel technical team. It was an insane experience with the team.",
      image: "/Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Digital PT",
      desc: "It was a wonderfull experience with the Bottom funnel developers team they build our B2C B2B Mobile app development & website development As per our requirement they were so calm & patient we thankfull for their efforts time & energy I hope will get an oppurtunity to work with the team again in future cheers.",
      image: "/Images/productsmainpage/Components/testimonial1.png",
    },
  ];

  return (
    <div className={styles.testimonials}>
      <h1>Testimonials</h1>
      <p>Using basic skills you can improve your business stuff </p>
      <div className={styles.sliderDivcomp}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className={styles.mainsliderDiv}>
              <div className={styles.slidingDiv}>
                <div className={styles.imgpart}>
                  <div className={styles.productBannerPlayIcon}>
                    <i class="bi bi-play-circle"></i>
                  </div>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.textpart}>
                  <h3>{item.name}</h3>
                  <h6>{item.degination}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
