import React from 'react';
import styles from "./OllyNeo.module.css";
import Image from 'next/image';

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
                <h2>Bottom Funnel Neo</h2>
                <p>Respond to challenges and scale your business on Bottom funnel with the help of the unified Messaging API, easy integrations using pre-built marketplace apps, and customizable analytics. Meet the needs of an expanding customer base with the combined power of a flexible.</p>
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
                <h2>Take customer engagement to the next level</h2>
                <p>Deliver a highly personalized and human-centered customer engagement experience with Freddy AI-powered bots that go beyond just issue resolution and create true customer delight.</p>
            </div>
        </div>
    </div>
  )
}

export default OllyNeo;