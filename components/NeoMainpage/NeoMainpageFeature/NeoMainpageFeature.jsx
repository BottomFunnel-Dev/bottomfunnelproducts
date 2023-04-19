import React from 'react';
import styles from "./NeoMainpageFeature.module.css";
import Image from 'next/image';

export const NeoMainpageFeature=()=>{
    const neoguide =[
        {
            img:"/Images/NeoMainpage/screen1.png",
            hd:"Customize limitlessly",
            par:"Looking for solutions that meet YOUR business needs? Neo helps you customize limitlessly!",
            l1:"Bring your own custom objects to address complex workflows",
            l2:"Easily create and use workflows that are specific to your business needs",
            l3:"Effortlessly build customized applications with easy to use developer capabilities"
        },
        {
            img:"/Images/NeoMainpage/screen2.png",
            hd:"Extend effortlessly",
            par:"With Neo, you can extend applications as needed even as your processes get more demanding.",
            l1:"Extend your Freshworks experience with 1200+ marketplace apps",
            l2:"Employ the developer portal and community to build upon solutions of choice easily",
            l3:"Harness native integrations to seamlessly connect across applications"
        },
        {
            img:"/Images/NeoMainpage/screen3.png",
            hd:"Work Seamlessly",
            par:"Freshworks products are built ground up on the common foundation of the Neo platform, giving you a secure and unified Freshworks experience",
            l1:"Get a 360-degree user view with a unified data platform",
            l2:"Make smart business decisions with actionable insights from Freshworks Analytics",
            l3:"Manage easily with a common admin, signup, and billing platform"  
        },
    ]
    return(
        <div className={styles.NeoMainpageFeatureMain}>
<div className={styles.NeoMainpageFeaturesection}>
{neoguide.map((item) => {
            return (
<div className={styles.NeoMainpageFeaturediv}>
    <div className={styles.neoguideimages}>
    <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  /> 
                </div>
                <div className={styles.NeoMainpageFeaturedetails}>
                <h2>{item.hd}</h2>
                  <p>{item.par}</p>
                  <ul>
                    <li>{item.l1}</li>
                    <li>{item.l2}</li>
                    <li>{item.l3}</li>
                   
                  </ul>
                  </div>
                </div>
            );})}
</div>

</div>
    )
}