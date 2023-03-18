import React from "react";
import styles from "./NeoAdminBilling.module.css";
import Image from "next/image";

export const NeoAdminBilling = () => {
  return (
     
    <div className={styles.neoAdminBillingMainDiv}>
        <h1 className={styles.neoAdminBillingHeading}>
            Simplified administration and manageability
        </h1>
        <div className={styles.neoAdminBillingPassword}>
            <div className={styles.neoAdminBillingImage}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group2.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminBillingText}>
                <h1>
                    All Subscription access
                </h1>
                <p className={styles.neoAdminBillingContent}>
                    Get a bird's eye view of all your Freshworks<br/>
                    subscriptions, across products, at one go.Esaily<br/>
                    manange your plans across products,
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminBillingPassword1}>
            <div className={styles.neoAdminBillingText1}>
                <h1>
                    Invoices and payment <br/>
                    information
                </h1>
                <p className={styles.neoAdminBillingContent}>
                    Update payment information, billing or shipping <br/>
                    addesss, and billing frequencies, across subscription.<br/>
                    Track invoices,and download them for quick access.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminBillingImage1}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Frame3.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
        </div>
        <div className={styles.neoAdminBillingPassword}>
            <div className={styles.neoAdminBillingImage}>
                <Image
                    src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/neoAdmin/Group3.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminBillingText}>
                <h1>
                    Self-serve capabilities
                </h1>
                <p className={styles.neoAdminBillingContent}>
                    Buy additional licenses or add-ons, and upgrade plans <br/>
                    at your own pace from a unified portal.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
    </div>

  );
};
