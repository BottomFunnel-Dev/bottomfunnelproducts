import React from 'react'
import styles from "./ForBusiness.module.css"
import Image from 'next/image';

export const ForBusiness = () => {
    const business = [
        {
            img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketerHomePagephotos/Frame.png",
            hd: "Conversational marketing and support",
            par: "Create delightful experience by truly understanding your customers and having conversations context",
        },
        {
            img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketerHomePagephotos/Frame1.png",
            hd: "Conversational marketing and support",
            par: "Create delightful experience by truly understanding your customers and having conversations context",
        },
        {
            img: "https://d3op2l77j7wnti.cloudfront.net/Images/MarketerHomePagephotos/Frame2.png",
            hd: "Conversational marketing and support",
            par: "Create delightful experience by truly understanding your customers and having conversations context",
        },
    ];
    return (
     
            <div className={styles.ForBusinessdivmain}>
                <div className={styles.ForBusinessdiv}>
                    <h2>The only multichannel, conversational CRM for your business</h2>
                </div>
                <div className={styles.ForBusinessdivcard}>
                {business.map((item) => {
                    return (

                        <div className={styles.ForBusinessdivcardinnerdiv}>
                            <div className={styles.ForBusinessdivcardimage}>
                                <Image
                                    src={item.img}
                                    alt={"image"}
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                            <div className={styles.ForBusinessdivcardimagecontain}>
                                <h5>{item.hd}</h5>
                                <p>{item.par}</p>
                            </div>
                       </div>

                    );
                })}
                   </div>
            </div >         
    );
}
