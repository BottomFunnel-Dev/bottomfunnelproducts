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
      name: "Jai Kishan Tewani",
      degination: "President & Partner, BlueBerry Group, SPJ Electronics, Next Holidays",
      desc: "it was a seamless experience with bottom funnel team, they built our consumer electronics brand spj electronics in the terms of web development and mobile applications development. we recommend bottom funnel team to everybody who have some technical requirements. at the same time it was a fun and great experience with the team",
      image: "https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/Images/testimonialsImages/JaiKishanTiwani.png",
      link: "https://www.linkedin.com/in/jai-kishan-tewani-b6b1a5148/",
      logo: "https://dn6g7abak8oqz.cloudfront.net/Images/testimonialsImages/linkedin.png",
    },
    {
      name: "Suresh Kirplani",
      degination: "President & Partner, BlueBerry Group, SPJ Electronics",
      desc: "It was an great expreience with bottom funnel team. they have complete our D2C travel brand name called  Next Holidays We glad that we connect to the bottom funnel technical team. It was an insane experience with the team.",
      image: "https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/Images/testimonialsImages/SureshRectangle.png",
      logo: "https://dn6g7abak8oqz.cloudfront.net/Images/testimonialsImages/linkedin.png",
    },
    {
      name: "Pradeep Kishnani",
      degination: "Vice President & Partner, BlueBerry Group, SPJ Electronics",
      desc: "It was a wonderfull experience with the Bottom funnel developers team they build our B2C B2B Mobile app development & website development As per our requirement they were so calm & patient we thankfull for their efforts time & energy I hope will get an oppurtunity to work with the team again in future cheers.",
      image: "https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/Images/testimonialsImages/PradeepRectangle.png",
      link: "https://www.linkedin.com/in/kishnani-pradeep-31967951/",
      logo: "https://dn6g7abak8oqz.cloudfront.net/Images/testimonialsImages/linkedin.png",
    },
    {
      name: "Vineet Changulani",
      degination: "Founder & CEO, TravelFlap, Bottom Funnel",
      desc: "It was a wonderfull experience with the Bottom funnel developers team they build our B2C B2B Mobile app development & website development As per our requirement they were so calm & patient we thankfull for their efforts time & energy I hope will get an oppurtunity to work with the team again in future cheers.",
      image: "https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/Images/testimonialsImages/VineetChangulani.png",
      link: "https://www.linkedin.com/in/vineet-changulani-b2b4aa1a0/",
      logo: "https://dn6g7abak8oqz.cloudfront.net/Images/testimonialsImages/linkedin.png",
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
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.textpart}>
                  <div>
                     <h3>{item.name}</h3>
                     <a href={item.link}><img src={item.logo} /></a>
                  </div>
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
