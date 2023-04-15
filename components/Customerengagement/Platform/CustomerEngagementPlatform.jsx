import React ,{useState}from 'react'
import styles from "./CustomerEngagementPlatform.module.css";
const CustomerEngagementPlatform = () => {
  const [path,sethPath]=useState("/Images/Customerengagement/screen1.png")
  return (
    <div className={styles.customerEngagmentplatformMainDiv}>
      <div className={styles.customerEngagmentContentDiv}>
        <h2>A scalable platform, built for everyone</h2>
        <p>
          Neo is the enterprise-grade, scalable, and secure foundation that
          powers all Freshworks products, making our products delightfully easy
          to onboard, use, and extend. What’s more- it makes Freshworks products
          seamlessly interoperable with each other
        </p>
        <h4>
          Now create, connect, and innovate as you wish to, Neo has got your
          back
        </h4>
      </div>

      <div className={styles.customerEngagmentBannerDiv}>
        <div className={styles.customerEngagmentBannerContentBoxDiv}>
          <div onMouseOver={()=>sethPath("/Images/Customerengagement/screen1.png")}>
            <h5>Efficient Operations</h5>
            <p>
              Enable business leaders to achieve more with less - improve agent
              productivity, save on hiring costs, and accelerate time to value
              from tech investment
            </p>
          </div>

          <div onMouseOver={()=>sethPath("/Images/Customerengagement/screen2.png")}>
            <h5>Unified Messaging Platform</h5>
            <p>
            Talk to customers on their preferred messaging
channels & unify their experience
            </p>
          </div>

          <div onMouseOver={()=>sethPath("/Images/Customerengagement/screen3.png")}>
            <h5>Automated Support</h5>
            <p>
            Offer customer support through intuitive selfservice
            </p>
          </div>

        </div>

        <div className={styles.customerEngagmentBannerImgDiv}>
          <img   src={path}
            alt="image"
            />
        </div>
      </div>
    </div>
  );
};

export default CustomerEngagementPlatform;
