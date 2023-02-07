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
      degination: "CEO, Digital PT",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas, nulla assumenda facilis officia voluptatem eum laborum odit esse in incidunt totam, perferendis reprehenderit modi consectetur obcaecati nihil distinctio saepe.",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Digital PT",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas, nulla assumenda facilis officia voluptatem eum laborum odit esse in incidunt totam, perferendis reprehenderit modi consectetur obcaecati nihil distinctio saepe.",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Digital PT",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas, nulla assumenda facilis officia voluptatem eum laborum odit esse in incidunt totam, perferendis reprehenderit modi consectetur obcaecati nihil distinctio saepe.",
      image: "Images/productsmainpage/Components/testimonial1.png",
    },
    {
      name: "Leslie al",
      degination: "CEO, Digital PT",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas, nulla assumenda facilis officia voluptatem eum laborum odit esse in incidunt totam, perferendis reprehenderit modi consectetur obcaecati nihil distinctio saepe.",
      image: "Images/productsmainpage/Components/testimonial1.png",
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
