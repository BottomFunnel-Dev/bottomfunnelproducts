import React from "react";
import styles from "./OurDigitalMarketers.module.css"
import Image from "next/image";

export default function OurDigitalMarketers({ OnDigitalMarketerdata }) {
    const { heading, cardsdata } = OnDigitalMarketerdata;

    return (
        <>
        <div className={styles.dmHedaing}>
           <h3>{heading}</h3>
        </div>
        <div className={styles.ourDigitalMarketersMain}>
            <div className={styles.ourDigitalMarketerscontain}>
                {cardsdata.map((e, idx) => (
                    <div className={styles.ourDigitalMarketersdiv}
                    // style={{
                    //   backgroundColor: `${e.color}`
                    // }}
                    >
                        <div className={styles.ourDigitalMarketersimg}>
                            <Image
                                src={e.img}
                                alt="img"
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "60%", height: "40%" }}
                                />
                              </div>
                  
                              <div className={styles.ourDigitalMarketerscontent}>
                                <div className={styles.lower}>
                                  <span>
                                    <h4>{e.title} </h4>
                                    {/* <p>{e.date}</p> */}
                                  </span>
                  
                  
                                </div>
                  
                                <h6>{e.position}</h6>
                                <p>{e.desc}</p>
                  
                                <div className={styles.socialIcons}>
                                 <Image
                                    src={e.twittericon}
                                    alt="icon"
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "10%", height: "10%", marginLeft:"2%"}}
                                  />
                  
                                  <Image
                                    src={e.linkdinicon}
                                    alt="icon"
                                    width={"0"}
                                    height={"0"}
                                    sizes={"100vw"}
                                    style={{ width: "10%", height: "10%",  marginLeft:"5%"}}
                                  />
                                </div>
                              </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}
