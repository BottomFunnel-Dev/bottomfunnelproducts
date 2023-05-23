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
           <lottie-player
                src={"https://d3op2l77j7wnti.cloudfront.net/Animation/contactCenter/banner.json"}
                background="transparent"
                speed="1"
                loop
                autoplay
                >
            </lottie-player>
      </div>
    </div>
  );
}
