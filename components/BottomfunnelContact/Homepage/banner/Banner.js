import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannercontent}>
       <div>
       <h1>Elivate care with fast and easy conversations</h1>
        <p>
          make it easy for your agents to provide exceptional voice service with
          an intutive, all-in-one contact center solution
        </p>
        <button>START FREE TRIAL</button>
       </div>
      </div>
      <div className={styles.bannerImages}>
        <Image
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
          src="https://d1krs40fxb67ye.cloudfront.net/Images/contactcenter/banner.webp"
          alt="Images/contactcenter/banner.webp"
        />
      </div>
    </div>
  );
}
