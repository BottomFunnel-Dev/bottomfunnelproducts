import React from 'react'
import styles from "./SMBMore.module.css";
import Image from 'next/image';
export const SMBMore = () => {
    const col1 = [{img:"/Images/sbm/iconone.webp",hd:"Route automatically",p:"  Transfer incoming messages to right teams with Bottom Funnel chat patent - pending assignment features."},
    {img:"/Images/sbm/icontwo.webp",hd:"Plug in and use",p:"  Use the markteplace to connect with tools loke Bottom Funnel Desk, stripe,calender, and more!"},
    {img:"/Images/sbm/iconthree.webp",hd:"Measure and optimize",p:"Derive insights from user touchpoints and make business -critical decision"},
    {img:"/Images/sbm/iconfive.webp",hd:"Secure Your data",p:"Use a robust and secure software thats GDPR complaints"},
    {img:"/Images/sbm/iconfour.webp",hd:"Expand beyond borders",p:"Break beyond language barrier. Personalize your experience in 20+ language"}]
    return (
        <div className={styles.sMBMoreParent}>
            <h2>What's More</h2>
            <div className={styles.sMBMoreParentChild}>



                <div className={styles.sMBMoreParentChildchild}>
                    {col1.map((item) => {
                        return(
                            // <div className={styles.sMBMoreParentChildchildfirstchild}>
                            <div className={styles.BorderBox}>
                                <div className={styles.sMBMoreinnerImage}>
                                    <Image
                                        src={item.img}
                                        alt={"img"}
                                        width={"0"}
                                        height={"0"}
                                        sizes={"100vw"}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </div>
                                <h4>{item.hd}</h4>
                                <p>
                                    {item.p}
                                </p>
                            </div>
                        // </div>
                        );
                    })}
                    </div>
                <div className={styles.sMBMoreImage} >
                    <Image
                        src={"/Images/sbm/imagefive.png"}
                        alt={"img"}
                        width={"0"}
                        height={"0"}
                        sizes={"100vw"}
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </div>
        </div>
    )
}