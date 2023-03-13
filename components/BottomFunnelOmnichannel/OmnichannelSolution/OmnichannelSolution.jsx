import React from 'react'
import styles from "./OmnichannelSolution.module.css"
import Image from 'next/image'

export const OmnichannelSolution = () => {
  return (
    <div className={styles.OmnichannelSolutionmaindiv}>
        <div  className={styles.OmnichannelSolutionheading} >
            <h2>
            Explore why Bottom Funnel Omnichannel Suite is the Most Complete Support Solution with the Fastest Time-to-Value.
            </h2>
            <h5>Reimagine more meaningful conversations and turn service agents into customer champions. Launch customer and employee delight in under 3 months!</h5>
        </div>
        <div className={styles.OmnichannelSolutioncardsmaindiv}>
            <div className={styles.OmnichannelSolutioncards}>
                <h5>Delight customers effortlessly</h5>
                <div className={styles.OmnichannelSolutionimage}>
                <Image
                  src={"/Images/Bottomfunnelomnichannelphotos/logo1.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Simplify every experience and put customers back in control by offering the support they expect, in their channel of choice.</p>
            </div>

            <div className={styles.OmnichannelSolutioncards}>
                <h5>Make every agent a customer champion</h5>
                <div className={styles.OmnichannelSolutionimage}>
                <Image
                  src={"/Images/Bottomfunnelomnichannelphotos/logo2.webp"}
                  alt={"Image"}
                  width={"0"}
                  height={"0"}
                  sizes={"100vw"}
                  style={{ width: "100%", height: "100%" }}
                />
                </div>
                <p>Give agents more context and automation to proactively understand customer needs and offer the next-best-action.</p>

            </div>

            <div className={styles.OmnichannelSolutioncards}>
                <h5>Skyrocket the speed of service</h5>
                <div className={styles.OmnichannelSolutionimage}>
                <Image
          src={"/Images/Bottomfunnelomnichannelphotos/logo3.webp"}
          alt={"Image"}
          width={"0"}
          height={"0"}
          sizes={"100vw"}
          style={{ width: "100%", height: "100%" }}
        />
                </div>
                <p>Achieve speed in delivering remarkable customer service. Our customers realize service productivity gains in under 3 months, and innovate faster with the NEO platform.</p>

            </div>


        </div>
    </div>
  )
}
