import React from "react";
import styles from "./CustomerRate.module.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { IconContext } from "react-icons/lib";
import { useRouter } from "next/router";
import Image from "next/image";
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
      img: "/Images/productsmainpage/Components/icons/clutch.webp",
    },
    {
      icon: <FaStar />,
      path: "https://www.appfutura.com/companies/bottom-funnel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/futura.webp",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/google.webp",
    },
    {
      icon: <FaStar />,
      path: "https://www.goodfirms.co/company/bottom-funnel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/goodfirm.webp",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/itfirm.webp",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/topdev.webp",
    },
    {
      icon: <FaStar />,
      path: "https://www.upwork.com/agencies/1549703270292094976/",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/upwork.webp",
    },
    {
      icon: <FaStar />,
      path: "",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi rem corporis ratione molestiae mollitia, quis excepturi sint voluptas itaque.",
      img: "/Images/productsmainpage/Components/icons/sd.webp",
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
                <div className={styles.imagesicon}>
                  <Image
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className={styles.ratings}>
                  <IconContext.Provider value={{ className: styles.ratings }}>
                    {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}{" "}
                  </IconContext.Provider>
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
