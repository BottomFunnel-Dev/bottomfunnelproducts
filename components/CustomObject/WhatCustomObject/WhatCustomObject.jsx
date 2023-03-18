
import React from "react";
import styles from "./WhatCustomObject.module.css";
import Image from "next/image";

export const WhatCustomObject = () => {
    return (
        <div className={styles.JourneyPersonalizedParent}>
            <div className={styles.headingdiv}>
            <h1 className={styles.JourneyPersonalizedmainheading}>What are custom objects?</h1>
            <hr className={styles.line} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem nemo, provident quibusdam quod sed ea, excepturi quis quam, in dolor ex unde voluptatum a aperiam illo voluptatibus commodi minus. Custom object are a set of custom records you can create natively inside freshworks products to store information sprcific to your business .Go beyond your regular employee, customer data, and bring in all the context you need at scale .</p>
            </div>
                <div className={styles.WhatCustomObjectonediv}>
                    <div className={styles.bannerimageone}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectone.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div style={{ marginLeft: "5%" }} className={styles.WhatCustomObjectonecontenct}>
                        <h2>Create</h2>
                        <p className={styles.JourneyPersonalizedPara}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ullam repudiandae ratione consectetur doloribus laboriosam repellat magni deleniti labore neque. Dolor exercitationem harum odit rerum autem obcaecati maxime! Harum, asperiores. Create the bussiness objects that defines your business and its processes best </p>
                    </div>
                </div>
            
          

                <div className={styles.WhatCustomObjectsecdiv}>

                    <div className={styles.JourneyPersonalizeddiv}>
                        <h2>Contectrualize</h2>
                        <p className={styles.JourneyPersonalizedPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam quibusdam sint et corrupti dicta labore earum laboriosam maxime? Commodi odit quaerat dicta modi voluptatem, accusamus natus enim eius recusandae. Create the bussiness objects that defines your business and its processes best  </p>
                    </div>

                    <div className={styles.bannerimagetwo}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectsec.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{ width: "100%", height: "100%" }}

                        />
                    </div>

                </div>
            
            

                <div className={styles.WhatCustomObjectthirddiv}>
                    <div className={styles.bannerimagethree}>
                        <Image
                            src={"https://bottom-funnel-product.s3.ap-south-1.amazonaws.com/Images/customObject/whatCustomObjectthird.png"}
                            alt={"img"}
                            width={"0"}
                            height={"0"}
                            sizes={"100vw"}
                            style={{  width: "100%", height: "100%"  }}
                        />
                    </div>
                    <div style={{ marginLeft: "5%" }} className={styles.WhatCustomObjectthirdcontenct} >
                        <h2>Analyze</h2>
                        <p className={styles.JourneyPersonalizedPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi culpa ut eligendi magni ad, porro alias vero molestiae illum, qui dignissimos officia ratione mollitia temporibus debitis unde? Rem, minima ad! Get unique through these business - specific objectss using Analytics</p>
                    </div>
                </div>
           

        </div>
    )
}