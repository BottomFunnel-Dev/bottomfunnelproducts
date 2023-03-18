import React from "react";
import styles from "./NeoAdminBanner.module.css";
import Image from "next/image";

export const NeoAdminBanner = () => {
  return (
    <div className={styles.neoAdminBannerDiv}>
        <div className={styles.neoAdminBannerText}>
            <div className={styles.neoAdminBannerContent}>
                <h1>Unify administration across <br/> Bottom funnel Products</h1>
                <p>
                    Power admins to secure data, enable users,and <br/>
                    manage subscription billing,from one console, no <br/>
                    matter what the scale!
                </p>
                <button>Start free trial</button>
            </div>
        </div>
        <div className={styles.neoAdminBannerImage}>
            <Image
                src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/OBJECTS.webp"}
                alt={"image"}
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
                />
        </div>
    </div>
  );
};
