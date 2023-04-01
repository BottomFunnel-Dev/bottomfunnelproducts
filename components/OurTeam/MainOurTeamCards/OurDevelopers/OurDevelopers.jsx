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
                style={{ width: "80%", height: "60%" }}
              />
            </div>

            <div className={styles.ourDeveloperscontent}>
              <div className={styles.lower}>
                <span>
                  <h4>{e.title} </h4>
                  {/* <p>{e.date}</p> */}
                </span>

                <Image
                  src={e.twittericon}
                  alt="icon"
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "7%", height: "7%", marginTop: "6%", marginLeft: "7%"}}
                />

                <Image
                  src={e.linkdinicon}
                  alt="icon"
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "7%", height: "7%",  marginTop: "5%", marginLeft:"2%"}}
                />
              </div>

              <h6>{e.position}</h6>
              <p>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
