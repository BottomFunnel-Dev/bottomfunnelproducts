import React from "react";
import styles from "./ProductsNewPageBanner.module.css";
import { IconContext } from "react-icons/lib";
import { BsPlayCircle } from "react-icons/bs";
import { useRouter } from "next/router";

export const ProductsNewPageBanner = () => {
  const data = [
    {
      img: "/Images/productsmainpage/Components/desk.png",
      title: "Bottomfunnel Desk",
      path: "funneldesk"
    },
    {
      img: "/Images/productsmainpage/Components/teams.png",
      title: "Bottomfunnel Team",
      path: "/"
    },
    {
      img: "/Images/productsmainpage/Components/service.png",
      title: "Bottomfunnel Services",
      path: "/"
    },
    {
      img: "/Images/productsmainpage/Components/marketer.png",
      title: "Bottomfunnel Marketer",
      path: "/"
    },
    {
      img: "/Images/productsmainpage/Components/sales.png",
      title: "Bottomfunnel Sales",
      path: "sales"
    },
    {
      img: "/Images/productsmainpage/Components/chat.png",
      title: "Bottomfunnel Chat",
      path: "/"
    },
    {
      img: "/Images/productsmainpage/Components/omnichannel.png",
      title: "Bottomfunnel Omnichannel",
      path:"/"
    },
    {
      img: "/Images/productsmainpage/Components/contact.png",
      title: "Bottomfunnel Contact Center",
      path:"/"
    },
    {
      img: "/Images/productsmainpage/Components/customersuccess.png",
      title: "Bottomfunnel Customer Success",
      path:"/"
    },
  ];

  const router = useRouter()

  return (
    <div className={styles.productsbanner}>
      <div className={styles.productsBannerBannerParentDiv}>
        <div className={styles.productsBannerMeatBannerContentDiv}>
          <div className={styles.productPageBannerContent}>
            <h1>
              Build Your Brands presence With BOTTOM FUNNEL
              {/* <span className={styles.productPageAnimatedTitle}>BOTTOM FUNNEL</span> */}
            </h1>
            <p>
              Welcome to Bottom Funnel, the world's leading app development
              company for fintech and startup companies.
            </p>
          </div>

          <div className={styles.productsBannerButtonsDiv}>
            <input type="text" placeholder="Input your mail" />
            <div>Free Trial</div>
          </div>
        </div>

        <div className={styles.productsBannerBannerImageDiv}>
          <IconContext.Provider
            value={{ className: styles.productBannerPlayIcon }}
          >
            <BsPlayCircle />
          </IconContext.Provider>
          <img
            className={styles.mainImage}
            src="/Images/ProductsPage/ProductBannerimage.png"
            alt="image"
          />
          <img
            className={styles.backImage}
            src="/Images/productsmainpage/Components/mainback.png"
            alt=""
          />
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
            <IconContext.Provider
              value={{ className: styles.productBannerPlay }}
            >
              <BsPlayCircle />
            </IconContext.Provider>
            <img
              className={styles.mainImagesecond}
              src="/Images/ProductsPage/ProductBannerimage.png"
              alt="image"
            />
            <img
              className={styles.backImagesecond}
              src="/Images/productsmainpage/Components/backorange.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.productright}>
          {data.map((item, index) => (
            <div onClick={()=>{router.push(`${item.path}`)}} key={index} className={styles.productsLogo}  >
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
