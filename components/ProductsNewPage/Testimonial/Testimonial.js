import React from "react";
import Slider from "react-slick";
import styles from "./testimonial.module.css";
import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function SampleNextArrow() {
    // const { className, style, onClick } = props;
    return (
        <div>
        <BsPlayCircle color="red"/>
    </div>
    );
  }
  
  function SamplePrevArrow() {
    // const { className, style, onClick } = props;
    return (
    <div>
        <BsPlayCircle color="green"/>
    </div>
    );
  }



export default function Testimonial() {




  const settings = {
    infinite: true,
    dots: true,
    accessibility: false,
    autoplaySpeed: 300,
    speed: 100,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: true,
    touchMove: false,
    slidesToShow: 1,
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

  const data = [
    {
      name: "Leslie al",
      degination: "CEO, SPJ Electronics",
      desc: "it was a seamless experience with bottom funnel team, they built our consumer electronics brand spj electronics in the terms of web development and mobile applications development. we recommend bottom funnel team to everybody who have some technical requirements. at the same time it was a fun and great experience with the team",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Next Holidays",
      desc: "It was an great expreience with bottom funnel team. they have complete our D2C travel brand name called  Next Holidays We glad that we connect to the bottom funnel technical team. It was an insane experience with the team.",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Digital PT",
      desc: "It was a wonderfull experience with the Bottom funnel developers team they build our B2C B2B Mobile app development & website development As per our requirement they were so calm & patient we thankfull for their efforts time & energy I hope will get an oppurtunity to work with the team again in future cheers.",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    // {
    //   name: "Leslie al",
    //   degination: "CEO, Digital PT",
    //   desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas, nulla assumenda facilis officia voluptatem eum laborum odit esse in incidunt totam, perferendis reprehenderit modi consectetur obcaecati nihil distinctio saepe.",
    //   image: "Images/productsmainpage/Components/testimonial1.png",
    // },
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
                  <IconContext.Provider
                    value={{ className: styles.productBannerPlayIcon }}
                  >
                    <BsPlayCircle />
                  </IconContext.Provider>
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
