import React from "react";
import styles from "./CustomerRate.module.css";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Image from "next/image";

export const CustomerRate = () => {
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

  const navigate = useRouter();
  const settings = {
    infinite: true,
    speed: 300,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const data = [
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "https://clutch.co/profile/bottom-funnel",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.7 on clutch platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/clutch.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "https://www.appfutura.com/companies/bottom-funnel",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.5 on AppFutura.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/futura.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.9 on Google platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/google.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "https://www.goodfirms.co/company/bottom-funnel",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.5 on GoodFirms platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/goodfirm.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.7 on ITFirms platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/itfirm.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.8 on TopDevelopers platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/topdev.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "https://www.upwork.com/agencies/1549703270292094976/",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.5 on UpWork platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/upwork.webp",
    },
    {
      icon: <i class="bi bi-star-fill"></i>,
      path: "",
      desc: "Bottom Funnel is a leading Mobile App & Web Solution Development company in the USA,UK, UAE, India and Africa having proficient and dedicated developers and digital marketing experts with a reputation for getting things done. We are rated with the ratings of 4.4 on TopSoftwareDevelopers platform.",
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/icons/sd.webp",
    },
  ];

  return (
    <div className={styles.customerRateMainDiv}>
      <h1>Customer has Consistently rated around 4.7 / 5</h1>
      <div className={styles.customerRateDContainer}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className={styles.mainsliderDiv}
              onClick={() => {
                navigate.push(item.path);
              }}
            >
              <div className={styles.maincontent}>
                <div className={styles.imagesicon}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.img}
                    alt={`${item.title}`}
                  />
                </div>
                <div className={styles.ratings}>
                  <div className={styles.ratings}>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}{" "}
                  </div>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
