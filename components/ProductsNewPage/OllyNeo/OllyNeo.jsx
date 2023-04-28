import React from 'react';
import styles from "./OllyNeo.module.css";
import Image from 'next/image';
import Link from 'next/link';

const OllyNeo = () => {

    return (
        <div className={styles.ollyNeoMainDiv}>
            <div className={styles.ollyNeoImage1}>
                <div className={styles.neoAnimationHomePage}>
                    <lottie-player
                        src={"/Animation/OllyNeo/neo.json"}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    >
                    </lottie-player>
                </div>

                <div className={styles.ollyNeoContent1}>
                    <h2> Bottom Funnel Neo </h2>
                    <p>
                       Secure your data with an end to end data security platform to avoid security breaches. With an end to end data security platform, you can rest assured that your data is safe and secure at all times.
                    </p>
                    <Link href={"/neo-mainpage"}>
                        <button className={styles.ollyNeoContentButton}> Explore Now </button>
                    </Link>
                </div>
            </div>

            <div className={styles.ollyNeoImage2}>
                <Image
                    src={"/Images/productsmainpage/olly.png"}
                    alt="img"
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                />

                <div className={styles.ollyNeoContent2}>
                    <h2> Dive into next-level customer engagement </h2>
                    <p>
                        Meet Olly, our AI powered tool for all your customer engagement needs with a human centric response. Delight your customers with an extra service.
                    </p>

                    <Link href={"/olly-ai"}>
                        <button className={styles.ollyMainPageContentButton}> Explore Now </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OllyNeo;