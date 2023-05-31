import React from "react";
import styles from "./GoogleBusinessMessageBanner.module.css"
import Image from "next/image";
export const GoogleBusinessMessageBanner = () => {
    return (

        <div className={styles.googleBusinessBannerParent}>
            <div className={styles.googleBusinessBannerone}>
                <Image
                
                    src={"https://d3op2l77j7wnti.cloudfront.net/Images/GoogleBusiness/banner.webp"}
                    alt={"img"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <div className={styles.googleBusinessBannertwo}>
                <h1>Supporting customers when they need with Google Business Messages </h1>
                <hr className={styles.hr}/>

                <p>In the age of instant gratification, businesses must be readily available to support customers whenever and wherever they need assistance. With Google Business Messages, companies can provide real-time support, personalized interactions, seamless transitions between channels, proactive assistance, and convenient self-service options. Explore how this platform empowers businesses to support customers in their moments of need.</p>
                <button>Explore Now</button>
            </div>





        </div>

    );
}