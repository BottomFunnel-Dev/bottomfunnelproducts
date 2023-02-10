import React from "react";
import styles from "./CustomerRate.module.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { IconContext } from "react-icons/lib";
import { useRouter } from "next/router";

export const CustomerRate = () => {
  const navigate = useRouter();
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  const data = [
    {
      icon: <FaStar />,
      path: "https://clutch.co/profile/bottom-funnel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/clutch.png",
    },
    {
      icon: <FaStar />,
      path: "https://www.appfutura.com/companies/bottom-funnel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/futura.png",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/google.png",
    },
    {
      icon: <FaStar />,
      path: "https://www.goodfirms.co/company/bottom-funnel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/goodfirm.png",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/itfirm.png",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/topdev.png",
    },
    {
      icon: <FaStar />,
      path: "https://www.upwork.com/agencies/1549703270292094976/",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/upwork.png",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "Images/productsmainpage/Components/sd.png",
    },
  ];

  return (
    <div className={styles.customerRateMainDiv}>
      <h1>Customer has Consistently rated around 4.7 / 5</h1>
      <div className={styles.customerRateDContainer}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className={styles.mainsliderDiv}>
              <div className={styles.maincontent}>
                <div className={styles.ratings}>
                  <IconContext.Provider value={{ className: styles.ratings }}>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}{" "}
                  </IconContext.Provider>
                </div>
                <p>{item.desc}</p>
                <div className={styles.imagesicon}>
                  <img src={item.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
