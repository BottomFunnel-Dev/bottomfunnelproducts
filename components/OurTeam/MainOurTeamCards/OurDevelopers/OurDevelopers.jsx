import React from "react";
import styles from "./OurDevelopers.module.css"
import Image from "next/image";

export default function OurDevelopers({ OnDevelopersdata }) {
  const { heading, cardsdata } = OnDevelopersdata;

  return (
    <div className={styles.ourDevelopersMain}>
      <h3>{heading}</h3>
      <div className={styles.ourDeveloperscontain}>
        {cardsdata.map((e, idx) => (
          <div className={styles.ourDevelopersdiv}
          >
            <div className={styles.ourDevelopersimg}>
              <Image
                src={e.img}
                alt="img"
                width={"0"}
                height={"0"}
                sizes={"100vw"}
                style={{ width: "60%", height: "40%" }}
              />
            </div>

            <div className={styles.ourDeveloperscontent}>
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
  );
}
