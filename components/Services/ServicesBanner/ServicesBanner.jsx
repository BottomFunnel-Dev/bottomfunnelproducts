import React from "react";
import Image from "next/image";
import styles from "./ServicesBanner.module.css";

export default function ServicesBanner() {
  return (
    <div>
      <div className={styles.ServicesBanner}>
        <Image
          src={"/Images/services_resources/banner.png"}
          alt={"img"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className={styles.ServicesHeading}>
        <h2>Welcome to the Bottom Funnel Community</h2>
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Hit magic in every search" />
      </div>
    </div>
  );
}
