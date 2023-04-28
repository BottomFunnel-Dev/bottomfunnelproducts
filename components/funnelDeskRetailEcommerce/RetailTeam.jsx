import React from "react";
import styles from "./RetailTeam.module.css";

export const RetailTeam = () => {
  return (
    <div className={styles.retailteammainboxes}>
      <div className={styles.retailteamleftboxfortext}>
        <h1>Get your team on the same page</h1>
        <p>
          Shoppers don't differentiate between the agents they talk to online,
          the clerks in-store or the finance staff processing their refund,so
          why should you ? Good service requires collaboration.Work together to
          deliver delight to each and every customer.
        </p>
        <ul>
          <li>
            Bring internal teams & 3rd-party vendors into the support process.
          </li>
          <li>Share tasks across teams for increased efficiency.</li>
          <li>
            Build better visibility across teams by inifying customer operations
          </li>
        </ul>
        <h6 className={styles.colored}>Explore contextual collaboration </h6>
      </div>
        <div className={styles.retailteamboxrightforimageonly}>
          <img
            src="https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/Retail&ecommerce/Rectangle 5086.webp"
            alt="Retail&ecommerce/Rectangle 5086.webp"
          />
        </div>
      </div>
  );
};
