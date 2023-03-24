
import React from "react";
import styles from "./ServiceCatalogueBanner.module.css";
import Image from "next/image";
export const ServiceCatalogueBanner = () => {
    return (
        <div className={styles.ServiceCatalogueBannerparent}>
           
            <div className={styles.ServiceCatalogueBannerparentContent} >
                <h1>Add to cart with the service
                    catalog</h1>
                <h5>
                    Simplify access with a unified service portal for all service requests
                    and streamline service delivery
                </h5>
                <div className={styles.ServiceCatalogueBannerparenttButtonDiv}>
                    <button>SIGN UP FOR FREE</button>
                    <button>REQUEST DEMO</button>
                </div>
            </div>
        </div>
    )
}