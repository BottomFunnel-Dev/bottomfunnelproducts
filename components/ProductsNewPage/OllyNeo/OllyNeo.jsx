import React from 'react';
import styles from "./OllyNeo.module.css";
import Image from 'next/image';

const OllyNeo = () => {

  return (
    <div className={styles.ollyNeoMainDiv}>
        <div className={styles.ollyNeoImage1}>
            <Image
                src={"/Images/productsmainpage/Neo.png"}
                alt="img"
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
            />   
            <div className={styles.ollyNeoContent1}>
                <h2>Bottom Funnel Neo</h2>
                <p>Respond to challenges and scale your business on Bottom funnel with the help of the unified Messaging API, easy integrations using pre-built marketplace apps, and customizable analytics. Meet the needs of an expanding customer base with the combined power of a flexible, secure, and enterprise grade platform and bottom funnel.</p>
            </div>
        </div>
        <div className={styles.ollyNeoImage1}>
            <Image
                src={"/Images/productsmainpage/olly.png"}
                alt="img"
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "100%", height: "100%" }}
            />   
            <div className={styles.ollyNeoContent2}>
                <h2>Bottom Funnel Neo</h2>
                <p>Respond to challenges and scale your business on Bottom funnel with the help of the unified Messaging API, easy integrations using pre-built marketplace apps, and customizable analytics. Meet the needs of an expanding customer base with the combined power of a flexible, secure, and enterprise grade platform and bottom funnel.</p>
            </div>
        </div>
    </div>
  )
}

export default OllyNeo;