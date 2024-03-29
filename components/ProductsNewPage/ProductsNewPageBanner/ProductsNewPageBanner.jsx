import React from "react";
import styles from "./ProductsNewPageBanner.module.css";
import { IconContext } from "react-icons/lib";
import { BsPlayCircle } from "react-icons/bs";
import { useRouter } from "next/router";

// import video from "next/Video";

export const ProductsNewPageBanner = () => {
  const data = [
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/desk.png",
      title: "Bottom Funnel Desk",
      path: "/bottomfunnel-support-desk",
      color: "#d6ffe8",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/teams.png",
      title: "Bottom Funnel Team",
      path: "/",
      color: "#ffaf9c",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/service.png",
      title: "Bottomfunnel-service",
      path: "/bottomfunnel-service",
      color: "#e1e1e1",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/marketer.png",
      title: "Bottom Funnel Marketer",
      path: "/bottomfunnel-marketer",
      color: "#ffcf9c",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/sales.png",
      title: "Bottom Funnel Sales",
      path: "/bottomfunnel-sales",
      color: "#ffaf9a",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/chat.png",
      title: "Bottom Funnel Chat",
      path: "/bottomfunnel-chat",
      color: "#a1ffca",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/omnichannel.png",
      title: "Bottom Funnel Omnichannel",
      path: "/bottomfunnel-omnichannel",
      color: "#d6ffe8",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/contact.png",
      title: "Bottom Funnel Contact Center",
      path: "/bottomfunnel-contact-center",
      color: "#d6ffe8",
    },
    {
      img: "https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/customersuccess.png",
      title: "Bottom Funnel Customer Success",
      path: "/bottomfunnel-customersuccess",
      color: "#d6ffe8",
    },
  ];

  const router = useRouter();

  return (
    <div className={styles.productsbanner}>
      <div className={styles.productsBannerBannerParentDiv}>
        <div className={styles.productsBannerMeatBannerContentDiv}>
          <div className={styles.productPageBannerContent}>
            <h1>Build Your Brands presence With BOTTOM FUNNEL</h1>
            <p>
              Customer solution, IT, and CRM software that's incredibly effective, yet fast, easy, and affordable.
            </p>
          </div>

          <div className={styles.productsBannerButtonsDiv}>
            <input type="text" placeholder="Input your mail" />
            <div> Send Mail </div>
          </div>
        </div>

        <div className={styles.productsBannerBannerImageDiv}>
          {/* <IconContext.Provider
            value={{ className: styles.productBannerPlayIcon }}
          >
            <BsPlayCircle />
          </IconContext.Provider> */}

          {/* <lottie-player
            src="https://d3op2l77j7wnti.cloudfront.net/Animation/white.json"
            background="transparent"
            speed="1.5"
            loop
            autoplay
          ></lottie-player> */}

          {/* <img
            className={styles.mainImage}
            src="https://d3op2l77j7wnti.cloudfront.net/Images/ProductsPage/ProductBannerimage.png"
            alt="image"
          /> */}
          <video className={styles.mainImage} autoplay loop muted playsinline
            autoPlay controls preload="true" poster="one-does-not-simply-placeholder.jpg">
            <source src="https://d3op2l77j7wnti.cloudfront.net/All+Products+video+Bottom+funnel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.dottedlines}></div>
      <div className={styles.multipleproducts}>
        <div className={styles.productsleft}>
        <h3>
             CRM Business software Services that is widely used and trusted in Europe, Middle East and in Asia. Our CRM services 
             will help you build the future of your brand. 
          </h3>
          <div className={styles.productsimg}>
            {/* <IconContext.Provider
              value={{ className: styles.productBannerPlay }}
            >
              <BsPlayCircle />
            </IconContext.Provider> */}

            {/* <img
                className={styles.mainImagesecond}
                src="https://d3op2l77j7wnti.cloudfront.net/Images/productsmainpage/Components/prods.png"
                alt="image"
              /> */}

            <video className={styles.mainImagesecond} autoplay loop muted playsinline
              autoPlay controls preload="true" poster="one-does-not-simply-placeholder.jpg">
              <source src="https://d3op2l77j7wnti.cloudfront.net/All+Products+video+Bottom+funnel.mp4" type="video/webm" />
            </video>

          </div>
        </div>

        <div className={styles.productright}>
          {data.map((item, index) => (
            <div
              onClick={() => {
                router.push(`${item.path}`);
              }}
              key={index}
              className={styles.productsLogo}
              style={{ "--i": `${item.color}` }}
            >
              <div className={styles.logoProduct}>
                <img src={item.img} alt="" />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
