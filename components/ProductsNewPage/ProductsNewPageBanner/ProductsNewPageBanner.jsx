import React from "react";
import styles from "./ProductsNewPageBanner.module.css";
import { IconContext } from "react-icons/lib";
import { BsPlayCircle } from "react-icons/bs";
import { useRouter } from "next/router";

// import video from "next/Video";

export const ProductsNewPageBanner = () => {
  const data = [
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/desk.png",
      title: "Bottom Funnel Desk",
      path: "funneldesk",
      color: "#d6ffe8",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/teams.png",
      title: "Bottom Funnel Team",
      path: "/",
      color: "#ffaf9c",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/service.png",
      title: "Bottom Funnel Services",
      path: "/",
      color: "#e1e1e1",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/marketer.png",
      title: "Bottom Funnel Marketer",
      path: "marketer",
      color: "#ffcf9c",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/sales.png",
      title: "Bottom Funnel Sales",
      path: "sales",
      color: "#ffaf9a",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/chat.png",
      title: "Bottom Funnel Chat",
      path: "/",
      color: "#a1ffca",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/omnichannel.png",
      title: "Bottom Funnel Omnichannel",
      path: "/",
      color: "#d6ffe8",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/contact.png",
      title: "Bottom Funnel Contact Center",
      path: "/",
      color: "#d6ffe8",
    },
    {
      img: "https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/customersuccess.png",
      title: "Bottom Funnel Customer Success",
      path: "customersuccess",
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
              Customer Service, IT, and CRM software that's incredibly powerful, yet fast, easy and cost effective.
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
            src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/white.json"
            background="transparent"
            speed="1.5"
            loop
            autoplay
          ></lottie-player> */}

          {/* <img
            className={styles.mainImage}
            src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/ProductsPage/ProductBannerimage.png"
            alt="image"
          /> */}
          <video className={styles.mainImage} autoplay loop muted playsinline
           autoPlay controls preload="true" poster="one-does-not-simply-placeholder.jpg">
            <source src="https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/All+Products+video+Bottom+funnel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.dottedlines}></div>
      <div className={styles.multipleproducts}>
        <div className={styles.productsleft}>
          <h3>
            Try the business software used by over 50,000 companies acorss the
            globe to exceed customer and employess expectations.
          </h3>
          <div className={styles.productsimg}>
            {/* <IconContext.Provider
              value={{ className: styles.productBannerPlay }}
            >
              <BsPlayCircle />
            </IconContext.Provider> */}

            {/* <img
                className={styles.mainImagesecond}
                src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/productsmainpage/Components/prods.png"
                alt="image"
              /> */}

            <video className={styles.mainImagesecond} style={{outline: "none", border: "none"}} autoPlay loop muted controls preload="auto" poster="one-does-not-simply-placeholder.jpg">
              <source src="https://bottom-funnel-fe.s3.ap-south-1.amazonaws.com/All+Products+video+Bottom+funnel.mp4" type="video/webm" />
            </video>

            {/* <div className={styles.backImagesecond}>
              <lottie-player
                src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation/backorangeproductpage.json"
                background="transparent"
                speed="1.5"
                loop
                autoplay
                style={{
                  width: "700px",
                  heigth: "700px",
                }}
              ></lottie-player>
            </div> */}
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
