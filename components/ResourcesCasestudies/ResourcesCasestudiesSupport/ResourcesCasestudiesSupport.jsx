import React from 'react';
import styles from "./ResourcesCasestudiesSupport.module.css";
import Image from "next/image";

export const ResourcesCasestudiesSupport=()=>{
const logo=[
    {
        img: "/Images/ResourcesCasestudies/multichoice.png"
    },
    {
        img: "/Images/ResourcesCasestudies/brewdog.png"
    },
    {
        img: "/Images/ResourcesCasestudies/bridgestone.png"
    },
    {
        img: "/Images/ResourcesCasestudies/fiverr.png"
    },
    {
        img: "/Images/ResourcesCasestudies/klarna.png"
    },
    {
        img: "/Images/ResourcesCasestudies/bluenile.png"
    },
    {
        img: "/Images/ResourcesCasestudies/itv.png"
    },
    {
        img: "/Images/ResourcesCasestudies/travix.png"
    }
]

    return(
        <div className={styles.ResourcesCasestudiesSupportHeader}>
            <h2>We empower over 60K+ businesses to delight their customers and emloyees with ease</h2>
            <div className={styles.ResourcesCasestudiesSupportMain}>
                {logo.map((item)=>{
                    return(
                        <div className={styles.ResourcesCasestudiesSupportimages}>
                            <Image
                    src={item.img}
                    alt={"image"}
                    width={"0"}
                    height={"0"}
                    sizes={"100vw"}
                    style={{ width: "100%", height: "100%" }}
                  />
                        </div>
                       
                    )
                })}

            </div>
        </div>
    )
}