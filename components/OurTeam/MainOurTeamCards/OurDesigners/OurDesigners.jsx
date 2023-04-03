import React from "react";
import styles from "./OurDesigners.module.css"
import Image from "next/image";

export default function OurDesignerss({ OnDesignerssdata }) {
    const { heading, cardsdata } = OnDesignerssdata;

    return (
        // <div className={styles.ourDesignersMain}>
        //     <h3>{heading}</h3>
        //     <div className={styles.ourDesignerscontain}>
        //         {cardsdata.map((e, idx) => (
        //             <div className={styles.ourDesignersdiv}
        //                 style={{
        //                     backgroundColor: `${e.color}`
        //                 }}>
        //                 <div className={styles.ourDesignersimg}>
        //                     <Image
        //                         src={e.img}
        //                         alt="img"
        //                         width={"0"}
        //                         height={"0"}
        //                         sizes={"100vw"}
        //                         style={{ width: "100%", height: "100%" }}
        //                     />
        //                 </div>
        //                 <div className={styles.ourDesignerscontent}>
        //                     <h4>{e.title}</h4>
        //                     <p>{e.desc}</p>

        //                     <div className={styles.lower}>
        //                         <Image
        //                             src={e.icon}
        //                             alt="icon"
        //                             width={"0"}
        //                             height={"0"}
        //                             sizes={"100vw"}
        //                             style={{ width: "10%", height: "100%", marginTop: "4%" }}
        //                         />
        //                         <span>
        //                             <p>{e.name} </p>
        //                             <p>{e.date}</p></span>
        //                         <h6>Read more</h6>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <>
        <div className={styles.designersHeading}>
            <h3>{heading}</h3>
        </div>
        <div className={styles.ourDesignersMain}>
            <div className={styles.ourDesignerscontain}>
                {cardsdata.map((e, idx) => (
                    <div className={styles.ourDesignersdiv}
                    >
                        <div className={styles.ourDesignersimg}>
                            <Image
                                src={e.img}
                                alt="img"
                                width={"0"}
                                height={"0"}
                                sizes={"100vw"}
                                style={{ width: "60%", height: "40%" }}
                            />
                        </div>

                       

                        
                        <div className={styles.ourDesignerscontent}>
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
