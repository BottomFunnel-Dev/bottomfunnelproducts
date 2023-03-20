import Image from "next/image";
import styles from "./securitySSO.module.css";
import React from "react";

export const SecuritySSO = () => {
  return (
    <div className={styles.securitySSOContainer}>
      <span>
        <Image
          src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/funneldeskSecurityhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animation.webp"}
          alt={"funneldeskSecurityhttps://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Animations.gif"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
      </span>
      <div>
        <h2>Simplify secure login through SSO</h2>
        <p>
          Set up a single sign-on (SSO) script to authenticate agents and users
          on your Freskdesk account by letting them use their existing
          credentials. Simplify account management by enabling SSO to work with
          your existing databases like Active Directory or social accounts like
          Google, Facebook and Twitter.
        </p>
      </div>
    </div>
  );
};
