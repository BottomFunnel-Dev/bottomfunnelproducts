import React from "react";
import styles from "./NeoAdminBilling.module.css";
import Image from "next/image";

export const NeoAdminBilling = () => {
  return (
     
    <div className={styles.neoAdminBillingMainDiv}>
        <h1 className={styles.neoAdminBillingHeading}>
        Multi-product billing option for seamless operation
        </h1>
        <div className={styles.neoAdminBillingPassword}>
            <div className={styles.neoAdminBillingImage}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/neoAdmin/Group2.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminBillingText}>
                <h1>
                Data collection
                </h1>
                <p className={styles.neoAdminBillingContent}>
                View everything you have subscribed to, across products, in one go. Effortlessly managing your plans across multiple products.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
        <div className={styles.neoAdminBillingPassword1}>
            <div className={styles.neoAdminBillingText1}>
                <h1>
                Unified billing and invoice information
                </h1>
                <p className={styles.neoAdminBillingContent}>
                Update subscription payment, billing address, and billing frequency information across your subscriptions.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
            <div className={styles.neoAdminBillingImage1}>
                <Image
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/neoAdmin/Frame3.webp"}
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
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/neoAdmin/Group3.webp"}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                    />
            </div>
            <div className={styles.neoAdminBillingText}>
                <h1>
                Ease of administration and handleability
                </h1>
                <p className={styles.neoAdminBillingContent}>
                Easily extend your license or plan options from a single portal, with the ability to buy additional licenses or add-ons at your leisure from an intuitive shopping portal.
                </p>
                <p className={styles.neoAdminLink}>Learn More</p>
            </div>
        </div>
    </div>

  );
};
